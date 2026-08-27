(function(){
  'use strict';

  var HEADER = "<header class=\"site-header az-header\" data-header=\"\">\n<div class=\"container az-header-inner\">\n<a aria-label=\"Blog A-Z Biuro — strona główna\" class=\"az-brand\" href=\"https://blog.eazbiuro.pl/\">\n<img alt=\"A-Z Biuro\" class=\"az-brand-logo\" decoding=\"async\" height=\"90\" src=\"/assets/logo-eazbiuro.png\" width=\"335\"/>\n<span aria-hidden=\"true\" class=\"az-brand-divider\"></span>\n<span class=\"az-brand-label\">Blog</span>\n</a>\n<button aria-controls=\"az-main-nav\" aria-expanded=\"false\" aria-label=\"Otwórz menu\" class=\"az-nav-toggle\" type=\"button\"><span></span><span></span><span></span></button>\n<div aria-hidden=\"true\" class=\"az-menu-backdrop\" data-az-menu-backdrop=\"\"></div>\n<nav aria-label=\"Nawigacja główna\" class=\"az-nav\" id=\"az-main-nav\">\n<a href=\"/o-blogu/\">O blogu</a>\n<a class=\"az-nav-ecosystem\" href=\"https://poradnik.eazbiuro.pl/\" target=\"_blank\" rel=\"noopener noreferrer\">Poradnik zakupowy</a>\n<a class=\"az-nav-ecosystem\" href=\"https://wiedza.eazbiuro.pl/\" target=\"_blank\" rel=\"noopener noreferrer\">Centrum Wiedzy</a>\n<a class=\"az-nav-ecosystem\" href=\"https://marki.eazbiuro.pl/\" target=\"_blank\" rel=\"noopener noreferrer\">Marki</a>\n<a href=\"https://eazbiuro.pl/pl/page/kontakt\">Kontakt</a>\n<a class=\"az-nav-cta\" href=\"https://eazbiuro.pl/pl/shop\">Przejdź do sklepu</a>\n</nav>\n</div>\n</header>";
  var FOOTER = "<footer class=\"footer az-footer\" data-nosnippet=\"\">\n<div class=\"container az-footer-grid\">\n<div class=\"az-footer-brand\">\n<a aria-label=\"Blog A-Z Biuro — strona główna\" class=\"az-footer-logo-link\" href=\"https://blog.eazbiuro.pl/\"><img alt=\"A-Z Biuro\" class=\"az-footer-logo\" decoding=\"async\" height=\"68\" loading=\"lazy\" src=\"/assets/logo-eazbiuro.png\" width=\"250\"/></a>\n<p>Aktualności, case studies, nowości i doświadczenia z codziennej pracy A-Z Biuro.</p>\n</div>\n<div class=\"az-footer-column\"><h2>Blog</h2><a href=\"/o-blogu/\">O blogu</a></div>\n<div class=\"az-footer-column\"><h2>Serwisy A-Z Biuro</h2><a href=\"https://eazbiuro.pl/pl/shop\">Sklep internetowy</a><a href=\"https://poradnik.eazbiuro.pl/\">Poradnik zakupowy</a><a href=\"https://wiedza.eazbiuro.pl/\">Centrum Wiedzy</a><a href=\"https://marki.eazbiuro.pl/\">Marki</a></div>\n<div class=\"az-footer-column\"><h2>Obsługa klienta</h2><a href=\"https://eazbiuro.pl/pl/page/kontakt\">Kontakt</a><a href=\"https://eazbiuro.pl/pl/page/faq\">FAQ</a><a href=\"https://eazbiuro.pl/pl/page/zwroty-i-reklamacje\">Zwroty i reklamacje</a></div>\n</div>\n<div class=\"container az-footer-disclaimer\" role=\"note\"><strong>Blog A-Z Biuro</strong> — aktualności, wdrożenia, praktyczne doświadczenia, komentarze i historie z życia firmy.</div>\n<div class=\"container az-footer-bottom\"><span>© <span data-year=\"\">2026</span> A-Z Biuro</span><span>blog.eazbiuro.pl</span></div>\n</footer>";

  class AzSiteHeader extends HTMLElement {
    connectedCallback() {
      if (this.dataset.rendered === '1') return;
      this.dataset.rendered = '1';
      this.innerHTML = HEADER;
    }
  }

  class AzSiteFooter extends HTMLElement {
    connectedCallback() {
      if (this.dataset.rendered === '1') return;
      this.dataset.rendered = '1';
      this.innerHTML = FOOTER;
    }
  }

  if (!customElements.get('az-site-header')) customElements.define('az-site-header', AzSiteHeader);
  if (!customElements.get('az-site-footer')) customElements.define('az-site-footer', AzSiteFooter);
})();
