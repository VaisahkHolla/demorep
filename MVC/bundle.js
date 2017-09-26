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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var View = __webpack_require__(2);
	var elements = {
	    nameList: document.querySelector('#nameList'),
	    addButton: document.querySelector('#addButton'),
	    removeButton: document.querySelector('#removeButton')
	};

	var view = new View(elements);
	view.init();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = __webpack_require__(3);
	var Model = __webpack_require__(4);

	var View = function () {
	    function View() {
	        var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.model = new Model();
	        this.controller = new Controller();
	    }

	    _createClass(View, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;

	            this.model.modelAdded.subscribe(function (newData) {
	                _this.render(newData);
	            });

	            this.model.modelRemoved.subscribe(function (index) {
	                _this.render(index);
	            });
	            this.elements.addButton.addEventListener('click', function () {
	                var name = prompt('Enter a new name');
	                if (name) _this.controller.addData(name);
	            });
	            this.elements.removeButton.addEventListener('click', function () {
	                var index = _this.elements.nameList.options.selectedIndex;
	                _this.controller.removeData(index);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render(newData) {
	            this.elements.nameList.innerHTML = "";
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = newData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    data = _step.value;

	                    this.elements.nameList.appendChild(document.createElement('option').appendChild(document.createTextNode(data)));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }]);

	    return View;
	}();

	module.exports = View;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = __webpack_require__(4);

	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.model = new Model();
	    }

	    _createClass(Controller, [{
	        key: "addData",
	        value: function addData(newData) {
	            this.model.add(newData);
	        }
	    }, {
	        key: "removeData",
	        value: function removeData(index) {
	            this.model.remove(index);
	        }
	    }]);

	    return Controller;
	}();

	module.exports = Controller;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = __webpack_require__(5);

	var Model = function () {
	    function Model() {
	        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        _classCallCheck(this, Model);

	        //default array declared
	        this.data = data;
	        this.modelAdded = new Observer();
	        this.modelRemoved = new Observer();
	    }

	    _createClass(Model, [{
	        key: 'add',
	        value: function add(newData) {
	            this.data.push(newData);
	            this.modelAdded.publish(this.data);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(item) {
	            this.data.splice(item, 1);
	            this.modelRemoved.publish(this.data);
	        }
	    }]);

	    return Model;
	}();

	module.exports = Model;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = function () {
	    function Observer() {
	        var subscribers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        _classCallCheck(this, Observer);

	        this.subscribers = subscribers;
	    }

	    _createClass(Observer, [{
	        key: "subscribe",
	        value: function subscribe(cb) {
	            this.subscribers.push(cb);
	            //cb is a callback function
	        }
	    }, {
	        key: "publish",
	        value: function publish(data) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.subscribers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    subscriber = _step.value;

	                    subscriber(data);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }]);

	    return Observer;
	}();

	module.exports = Observer;

/***/ }
/******/ ]);