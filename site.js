/* Mobile nav toggle. */
(function () {
  var t = document.querySelector('.nav-tog');
  var l = document.querySelector('.nav-links');
  if (!t || !l) return;
  t.addEventListener('click', function () {
    var open = l.classList.toggle('open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
