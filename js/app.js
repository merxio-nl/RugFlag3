
const TELEGRAM = "https:/* theme toggle cleaned */
(function(){
  const key='rf-theme';
  const saved = localStorage.getItem(key);
  if(saved) document.documentElement.setAttribute('data-theme', saved);
  function setTheme(t){ document.documentElement.setAttribute('data-theme', t); localStorage.setItem(key, t); }
  function current(){ return document.documentElement.getAttribute('data-theme') || 'light'; }

  document.addEventListener('DOMContentLoaded', ()=>{
    const el = document.createElement('button');
    el.className='theme-toggle';
    el.innerHTML = `<span>Dark</span><input type="checkbox" aria-label="Toggle dark mode">`;
    const sw = el.querySelector('input');
    sw.checked = current()==='dark';
    sw.addEventListener('change', ()=> setTheme(sw.checked ? 'dark' : 'light'));
    document.body.appendChild(el);
  });
})();



/* --- theme toggle (header) --- */
(function(){
  const key='rf-theme';
  const saved = localStorage.getItem(key);
  if(saved) document.documentElement.setAttribute('data-theme', saved);
  function setTheme(t){ document.documentElement.setAttribute('data-theme', t); localStorage.setItem(key, t); }
  function current(){ return document.documentElement.getAttribute('data-theme') || 'light'; }

  document.addEventListener('DOMContentLoaded', ()=>{
    const slot = document.getElementById('theme-slot');
    if(!slot) return;
    const wrap = document.createElement('span');
    wrap.style.display='inline-flex';
    wrap.style.alignItems='center';
    wrap.style.gap='8px';
    wrap.style.marginLeft='8px';

    const label = document.createElement('span');
    label.textContent = 'Dark';
    label.className = 'muted';

    const sw = document.createElement('input');
    sw.type='checkbox';
    sw.setAttribute('aria-label','Toggle dark mode');
    sw.className='theme-switch';
    Object.assign(sw.style,{appearance:'none',width:'34px',height:'18px',borderRadius:'999px',background:'#d1d5db',position:'relative',outline:'none',border:'1px solid var(--border)',verticalAlign:'middle'});
    sw.checked = current()==='dark';
    sw.addEventListener('change', ()=> setTheme(sw.checked ? 'dark' : 'light'));

    const s = document.createElement('style');
    s.textContent = `.theme-switch::after{content:"";position:absolute;top:50%;left:2px;width:14px;height:14px;transform:translateY(-50%);border-radius:999px;background:#fff;transition:all .2s}
    input.theme-switch:checked::after{left:18px;background:#111}
    html[data-theme="dark"] input.theme-switch{background:#f5f5f5}
    html[data-theme="dark"] input.theme-switch:checked::after{background:#111}`;
    document.head.appendChild(s);

    wrap.appendChild(label);
    wrap.appendChild(sw);
    slot.replaceWith(wrap);
  });
})();

