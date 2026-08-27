(function(){
  var toggle=document.querySelector('.az-nav-toggle');
  var nav=document.querySelector('.az-nav');
  var backdrop=document.querySelector('[data-az-menu-backdrop]');
  function closeMenu(){if(!toggle||!nav)return;toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');if(backdrop)backdrop.classList.remove('is-open');document.body.classList.remove('az-menu-open');}
  if(toggle&&nav){toggle.addEventListener('click',function(){var open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open);if(backdrop)backdrop.classList.toggle('is-open',!open);document.body.classList.toggle('az-menu-open',!open);});}
  if(backdrop)backdrop.addEventListener('click',closeMenu);
  document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear();});
})();
