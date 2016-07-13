/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stylus = __webpack_require__(1);

	var _stylus2 = _interopRequireDefault(_stylus);

	var _twitter = __webpack_require__(20);

	var _facebook = __webpack_require__(21);

	var _pinterest = __webpack_require__(22);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _sharing = __webpack_require__(24);

	var _sharing2 = _interopRequireDefault(_sharing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.twttr = (0, _twitter.twitter)();
	(0, _facebook.facebook)();
	(0, _pinterest.pinterest)();
	(0, _sharing2.default)(document);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(2);

	Object.defineProperty(exports, 'base', {
	  enumerable: true,
	  get: function () {
	    return _base.base;
	  }
	});

	var _fonts = __webpack_require__(9);

	Object.defineProperty(exports, 'fonts', {
	  enumerable: true,
	  get: function () {
	    return _fonts.fonts;
	  }
	});

	var _searchBar = __webpack_require__(13);

	Object.defineProperty(exports, 'searchBar', {
	  enumerable: true,
	  get: function () {
	    return _searchBar.searchBar;
	  }
	});

	var _smallTopBar = __webpack_require__(14);

	Object.defineProperty(exports, 'smallTopBar', {
	  enumerable: true,
	  get: function () {
	    return _smallTopBar.smallTopBar;
	  }
	});

	var _subLinks = __webpack_require__(15);

	Object.defineProperty(exports, 'subLinks', {
	  enumerable: true,
	  get: function () {
	    return _subLinks.subLinks;
	  }
	});

	var _title = __webpack_require__(16);

	Object.defineProperty(exports, 'title', {
	  enumerable: true,
	  get: function () {
	    return _title.title;
	  }
	});

	var _content = __webpack_require__(17);

	Object.defineProperty(exports, 'content', {
	  enumerable: true,
	  get: function () {
	    return _content.content;
	  }
	});

	var _also = __webpack_require__(18);

	Object.defineProperty(exports, 'also', {
	  enumerable: true,
	  get: function () {
	    return _also.also;
	  }
	});

	var _footer = __webpack_require__(19);

	Object.defineProperty(exports, 'footer', {
	  enumerable: true,
	  get: function () {
	    return _footer.footer;
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const twitter = exports.twitter = (d = document, s = 'script', id = 'twitter-wjs') => {
	  window.twttr = {};
	  const fjs = d.getElementsByTagName(s)[0];
	  const t = window.twttr || {};
	  if (d.getElementById(id)) return t;
	  const js = d.createElement(s);
	  js.id = id;
	  js.src = 'https://platform.twitter.com/widgets.js';
	  fjs.parentNode.insertBefore(js, fjs);

	  t._e = [];
	  t.ready = f => {
	    t._e.push(f);
	  };
	  return t;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const facebook = exports.facebook = () => {
	  window.fbAsyncInit = () => {
	    FB.init({
	      appId: '156991178053696',
	      xfbml: true,
	      version: 'v2.6'
	    });
	  };

	  const f = (d, s, id) => {
	    const fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) {
	      return;
	    }
	    const js = d.createElement(s);js.id = id;
	    js.src = '//connect.facebook.net/en_US/sdk.js';
	    fjs.parentNode.insertBefore(js, fjs);
	  };
	  f(document, 'script', 'facebook-jssdk');
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const pinterest = exports.pinterest = () => {
	  window.pAsyncInit = () => {
	    PDK.init({
	      appId: '4844179537688276452', // Change this
	      cookie: true
	    });
	  };

	  const p = (d, s, id) => {
	    const pjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) {
	      return;
	    }
	    const js = d.createElement(s);js.id = id;
	    js.src = '//assets.pinterest.com/sdk/sdk.js';
	    pjs.parentNode.insertBefore(js, pjs);
	  };
	  p(document, 'script', 'pinterest-jssdk');
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	document.getElementById('buyMe').addEventListener('click', () => {
	  alert(`Well... hadn't done anything with this button yet...

	Using old school alerts are still a thing right?`);
		});

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = document => {
	  const facebookShare = e => {
	    e.preventDefault();
	    FB.ui({
	      method: 'share',
	      display: 'popup',
	      href: 'http://fforr.es/gpn/'
	    }, response => {
	      console.log(response);
	    });
	  };
	  const els = document.getElementsByClassName('facebook-share-button');
	  for (const el of els) {
	    el.addEventListener('click', facebookShare);
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map