// Mobile menu toggle
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.textContent = open ? 'CLOSE' : 'MENU';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('is-open');
      btn.textContent = 'MENU';
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

// One-tap mail buttons (subject + body prefilled, UTF-8 encoded)
var MAIL_TO = 'info@example.com'; // 本番ではスタジオのアドレスに差し替え
document.querySelectorAll('[data-mail]').forEach(function (a) {
  var subject = a.getAttribute('data-subject') || '';
  var body = a.getAttribute('data-body') || '';
  a.setAttribute('href', 'mailto:' + MAIL_TO +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body));
});

// Demo: podcast play button feedback
document.querySelectorAll('.play').forEach(function (b) {
  b.addEventListener('click', function () {
    alert('デモ版のため音声は再生されません。\n本番では、Spotify・Apple Podcastsなどのプレーヤー、または配信ページへのリンクを設置します。');
  });
});
