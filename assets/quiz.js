/* AI Agent 全栈训练营 - 共享测验组件
   所有 lessons/*.html 通过 <script src="../assets/quiz.js"></script> 引用。
   用法：
     QuizApp.mount(document.getElementById('quiz'), {
       title: '…',
       questions: [ {…}, … ]
     });
   题型：
     choice: { type:'choice', concept, section, notesRef, question, options:[…], answer:int, explanation }
     recall: { type:'recall', concept, section, notesRef, question, hint, modelAnswer }
   评分：
     choice - 点选后立即判对错；recall - 自评（答对/部分/没答上）。
     全部作答后可生成诊断报告，按知识点汇总薄弱项并给出笔记定位。 */

(function () {
  'use strict';

  function el(tag, cls, html) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function mount(root, config) {
    const state = config.questions.map(() => ({ done: false, ok: null }));
    root.innerHTML = '';

    if (config.title) {
      const h = el('h2', null, esc(config.title));
      root.appendChild(h);
    }

    config.questions.forEach((q, i) => {
      root.appendChild(q.type === 'recall' ? renderRecall(q, i) : renderChoice(q, i));
    });

    root.appendChild(renderReport());

    function renderChoice(q, i) {
      const box = el('div', 'quiz-q');
      box.appendChild(el('span', 'q-tag', `Q${i + 1} · ${esc(q.concept)} · ${esc(q.section || '')}`));
      // 题干可含作者嵌入的 <pre> 代码块（审查题），题干是静态内容不走 esc；选项与讲解仍转义
      box.appendChild(el('p', 'q-text', q.question));

      const opts = [];
      q.options.forEach((text, j) => {
        const b = el('button', 'opt', `${String.fromCharCode(65 + j)}. ${esc(text)}`);
        b.addEventListener('click', () => {
          if (state[i].done) return;
          state[i].done = true;
          state[i].ok = j === q.answer;
          opts.forEach((btn, k) => {
            btn.disabled = true;
            if (k === q.answer) btn.classList.add('correct');
            else if (k === j) btn.classList.add('wrong');
          });
          const fb = box.querySelector('.quiz-feedback');
          fb.className = 'quiz-feedback show ' + (state[i].ok ? 'good' : 'bad');
          fb.innerHTML =
            (state[i].ok ? '✓ 正确。' : '✗ 正确答案：' + String.fromCharCode(65 + q.answer) + '。') +
            esc(q.explanation) +
            (q.notesRef ? `<span class="fb-src">回读定位：${esc(q.notesRef)}</span>` : '');
          updateReport();
        });
        opts.push(b);
        box.appendChild(b);
      });

      const fb = el('div', 'quiz-feedback');
      box.appendChild(fb);
      return box;
    }

    function renderRecall(q, i) {
      const box = el('div', 'quiz-q');
      box.appendChild(el('span', 'q-tag', `Q${i + 1} · ${esc(q.concept)} · ${esc(q.section || '')} · 回忆题`));
      box.appendChild(el('p', 'q-text', esc(q.question)));
      if (q.hint) box.appendChild(el('p', null, `<span style="color:var(--ink-faint);font-size:.88rem">提示：${esc(q.hint)}</span>`));

      const ta = el('textarea', 'recall-input');
      ta.placeholder = '先凭记忆作答，写完再对答案——回忆比重读更能形成长期记忆。';
      box.appendChild(ta);

      const revealBtn = el('button', 'reveal-btn', '对答案');
      revealBtn.addEventListener('click', () => {
        if (state[i].done) return;
        box.querySelector('.recall-answer').classList.add('show');
        const rate = box.querySelector('.self-rate');
        rate.classList.add('show');
        revealBtn.style.display = 'none';
      });
      box.appendChild(revealBtn);

      const ans = el('div', 'recall-answer', `<strong>参考答案：</strong>${q.modelAnswer}`);
      box.appendChild(ans);

      const rate = el('div', 'self-rate');
      const rates = [
        { label: '答对了', cls: 'got', val: true },
        { label: '部分对', cls: 'partial', val: 'partial' },
        { label: '没答上', cls: 'missed', val: false }
      ];
      rates.forEach(r => {
        const b = el('button', r.cls, r.label);
        b.addEventListener('click', () => {
          state[i].done = true;
          state[i].ok = r.val;
          rate.querySelectorAll('button').forEach(x => (x.disabled = true));
          b.style.outline = '2px solid var(--accent)';
          updateReport();
        });
        rate.appendChild(b);
      });
      const hint = el('span', null, ' <span style="font-size:.8rem;color:var(--ink-faint)">严格自评：漏了关键点就算「部分对」</span>');
      rate.appendChild(hint);
      box.appendChild(rate);

      return box;
    }

    function renderReport() {
      const wrap = el('div', 'quiz-report');
      const total = config.questions.length;
      wrap.appendChild(el('div', 'score-line', `诊断报告：<span id="quiz-score">已作答 0 / ${total}</span>`));
      wrap.appendChild(el('div', 'verdict', '完成全部题目后，这里会汇总薄弱知识点，并给出笔记与代码的回读定位。'));
      const list = el('ul', 'weak-list');
      wrap.appendChild(list);
      return wrap;
    }

    function updateReport() {
      const done = state.filter(s => s.done).length;
      const total = config.questions.length;
      const scoreEl = root.querySelector('#quiz-score');
      scoreEl.textContent = `已作答 ${done} / ${total}`;

      if (done < total) return;

      const correct = state.filter(s => s.ok === true).length;
      const weak = config.questions.filter((q, i) => state[i].done && state[i].ok !== true);
      const pct = Math.round((correct / total) * 100);

      let verdict;
      if (pct >= 85) verdict = `正确率 ${pct}%（${correct}/${total}）。已达到「能解释」标准，薄弱点回读笔记后即可进入下一主题课。`;
      else if (pct >= 60) verdict = `正确率 ${pct}%（${correct}/${total}）。基本框架在，但关键边界还不稳——按下面的定位回读笔记对应小节，再回到课程代码验证。`;
      else verdict = `正确率 ${pct}%（${correct}/${total}）。当前还停留在「有印象」阶段，建议先完整回读薄弱点对应的笔记小节，隔天再重做本课测验。`;

      root.querySelector('.quiz-report .verdict').textContent = verdict;

      const list = root.querySelector('.weak-list');
      list.innerHTML = '';
      if (weak.length === 0) {
        list.appendChild(el('li', null, '无薄弱知识点。本主题课通过。'));
      } else {
        weak.forEach(q => {
          const li = el('li', null,
            `<strong>${esc(q.concept)}</strong>（${esc(q.section || '')}）— ${esc(q.notesRef || '')}` +
            (q.codeRef ? `<br>代码验证：${q.codeRef}` : ''));
          list.appendChild(li);
        });
        const li = el('li', null, '<em>间隔重测：</em>把薄弱点笔记读完后，隔 1–2 天重做本课测验（检索练习 + 间隔重复）。');
        list.appendChild(li);
      }
    }
  }

  window.QuizApp = { mount: mount };
})();
