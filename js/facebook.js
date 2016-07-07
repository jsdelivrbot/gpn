export const facebook = () => {
  window.fbAsyncInit = () => {
    FB.init({
      appId: '156991178053696',
      xfbml: true,
      version: 'v2.6',
    });
  };

  const f = (d, s, id) => {
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    const js = d.createElement(s); js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  };
  f(document, 'script', 'facebook-jssdk');
};
