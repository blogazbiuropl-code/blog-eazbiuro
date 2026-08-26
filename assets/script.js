(() => {
  const toggle = document.querySelector('.az-nav-toggle');
  const nav = document.querySelector('.az-nav');
  const backdrop = document.querySelector('[data-az-menu-backdrop]');
  const header = document.querySelector('[data-header]');
  const year = document.querySelector('[data-year]');

  if (year) year.textContent = String(new Date().getFullYear());

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    backdrop?.classList.remove('is-open');
    document.body.classList.remove('az-menu-open');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      backdrop?.classList.toggle('is-open', open);
      document.body.classList.toggle('az-menu-open', open);
    });
    backdrop?.addEventListener('click', closeMenu);
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
})();
