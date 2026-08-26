(function(){
  var header=document.querySelector('.az-header'),
      button=document.querySelector('.az-nav-toggle'),
      nav=document.getElementById('az-main-nav'),
      backdrop=document.querySelector('[data-az-menu-backdrop]');

  function closeMenu(){
    if(!button||!nav)return;
    button.setAttribute('aria-expanded','false');
    nav.classList.remove('is-open');
    if(backdrop){backdrop.classList.remove('is-open');backdrop.setAttribute('aria-hidden','true');}
    document.body.classList.remove('az-menu-open');
  }

  if(header&&button&&nav){
    button.addEventListener('click',function(){
      if(button.getAttribute('aria-expanded')==='true'){closeMenu();return;}
      button.setAttribute('aria-expanded','true');
      nav.classList.add('is-open');
      if(backdrop){backdrop.classList.add('is-open');backdrop.setAttribute('aria-hidden','false');}
      document.body.classList.add('az-menu-open');
    });
    if(backdrop)backdrop.addEventListener('click',closeMenu);
    nav.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});
    window.addEventListener('resize',function(){if(window.innerWidth>1100)closeMenu();});
    window.addEventListener('scroll',function(){header.classList.toggle('is-scrolled',window.scrollY>8);},{passive:true});
  }

  document.querySelectorAll('[data-year]').forEach(function(n){n.textContent=String(new Date().getFullYear());});
})();
