(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const reduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const targets = document.querySelectorAll('.section, .hero-inner');
  targets.forEach((el) => el.classList.add('reveal'));

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((el) => io.observe(el));
  }

  if (
    typeof console !== 'undefined' &&
    console.log &&
    !navigator.webdriver
  ) {
    const style = 'color:#5ccfe6;font-family:monospace;font-size:12px';
    console.log('%c$ whoami', style);
    console.log('%c> Kittiphop "Ikkyu" Khankaew (LapisBerry)', style);
    console.log(
      '%c> say hi: kittiphopkhankaew@gmail.com',
      'color:#f15bb5;font-family:monospace;font-size:12px'
    );
  }
})();
