export default (document) => {
  const facebookShare = (e) => {
    e.preventDefault();
    debugger;
    FB.ui({
      method: 'share',
      display: 'popup',
      href: 'http://www.fforr.es/gpn',
    }, (response) => {
      console.log(response);
    });
  };
  const els = document.getElementsByClassName('facebook-share-button');
  for (const el of els) {
    el.addEventListener('click', facebookShare);
  }
};
