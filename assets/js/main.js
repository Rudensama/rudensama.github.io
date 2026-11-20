// Highlight current nav link
(function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Mobile nav toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      links.classList.toggle('open');
      btn.textContent = links.classList.contains('open') ? 'close' : 'menu';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (links.classList.contains('open') && !links.contains(e.target) && e.target !== btn) {
        links.classList.remove('open');
        btn.textContent = 'menu';
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        btn.textContent = 'menu';
      }
    });
  }
})();

// Obfuscated email rendering
(function () {
  var user = 'rudensama.dev';
  var domain = 'gmail.com';
  var email = user + '@' + domain;
  document.querySelectorAll('[data-email]').forEach(function (el) {
    if (el.tagName === 'A') {
      el.href = 'mailto:' + email;
    }
    el.textContent = email;
  });
})();

// Auto-update copyright year
(function () {
  var year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = year;
  });
})();

// Reveal content as it enters the viewport, staggered within each batch
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var items = document.querySelectorAll(
    '.intro-block, .section-title, .list-item, .now-list li, .social-links, ' +
    'section > .btn, section > p, .legal-sidebar, .legal-content'
  );
  var io = new IntersectionObserver(function (entries) {
    var n = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.setProperty('--d', (n++ * 70) + 'ms');
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) {
    el.classList.add('reveal');
    io.observe(el);
  });
})();
