(() => {
  (() => {
    window.matchMedia("(min-width: 360px)").addEventListener("change", (e) => {
      window
        .matchMedia("(min-width: 360px)")
        .addEventListener("change", (e) => {
          if (!e.matches) return;
          if (!e.matches) return;
          mobileMenu.classList.remove("is-open");
          mobileMenu.classList.remove("is-open");
          openMenuBtn.setAttribute("aria-expanded", false);
          openMenuBtn.setAttribute("aria-expanded", false);
          bodyScrollLock.enableBodyScroll(document.body);
          bodyScrollLock.enableBodyScroll(document.body);
        });
    });
  })();
})();
