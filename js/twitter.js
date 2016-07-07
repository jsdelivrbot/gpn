export const twitter = (d = document, s = 'script', id = 'twitter-wjs') => {
  window.twttr = {};
  const fjs = d.getElementsByTagName(s)[0];
  const t = window.twttr || {};
  if (d.getElementById(id)) return t;
  const js = d.createElement(s);
  js.id = id;
  js.src = 'https://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = (f) => {
    t._e.push(f);
  };
  return t;
};
