export const pinterest = () => {
  window.pAsyncInit = () => {
    window.PDK = {};
    window.PDK.init({
      appId: '4844179537688276452', // Change this
      cookie: true,
    });
  };

  const p = (d, s, id) => {
    const pjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    const js = d.createElement(s); js.id = id;
    js.src = '//assets.pinterest.com/sdk/sdk.js';
    pjs.parentNode.insertBefore(js, pjs);
  };
  p(document, 'script', 'pinterest-jssdk');
};
