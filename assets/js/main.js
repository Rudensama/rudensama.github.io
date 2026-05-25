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
    btn.addEventListener('click', function () {
      links.classList.toggle('open');
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
  var el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
})();
