(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/tk.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/tk.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/tk.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;\n  e.define(\"select2/i18n/tk\", [], function () {\n    return {\n      errorLoading: function errorLoading() {\n        return \"Netije ýüklenmedi.\";\n      },\n      inputTooLong: function inputTooLong(e) {\n        return e.input.length - e.maximum + \" harp bozuň.\";\n      },\n      inputTooShort: function inputTooShort(e) {\n        return \"Ýene-de iň az \" + (e.minimum - e.input.length) + \" harp ýazyň.\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Köpräk netije görkezilýär…\";\n      },\n      maximumSelected: function maximumSelected(e) {\n        return \"Diňe \" + e.maximum + \" sanysyny saýlaň.\";\n      },\n      noResults: function noResults() {\n        return \"Netije tapylmady.\";\n      },\n      searching: function searching() {\n        return \"Gözlenýär…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Remove all items\";\n      }\n    };\n  }), e.define, e.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi90ay5qcz9mNDgxIl0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsImUiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJpbnB1dCIsImxlbmd0aCIsIm1heGltdW0iLCJpbnB1dFRvb1Nob3J0IiwibWluaW11bSIsImxvYWRpbmdNb3JlIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwicmVtb3ZlQWxsSXRlbXMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLENBQUMsWUFBVTtBQUFDLE1BQUdBLE1BQU0sSUFBRUEsTUFBTSxDQUFDQyxFQUFmLElBQW1CRCxNQUFNLENBQUNDLEVBQVAsQ0FBVUMsT0FBN0IsSUFBc0NGLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUEzRCxFQUErRCxJQUFJQyxDQUFDLEdBQUNKLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUF4QjtBQUE0QkMsR0FBQyxDQUFDQyxNQUFGLENBQVMsaUJBQVQsRUFBMkIsRUFBM0IsRUFBOEIsWUFBVTtBQUFDLFdBQU07QUFBQ0Msa0JBQVksRUFBQyx3QkFBVTtBQUFDLGVBQU0sb0JBQU47QUFBMkIsT0FBcEQ7QUFBcURDLGtCQUFZLEVBQUMsc0JBQVNILENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsQ0FBQ0ksS0FBRixDQUFRQyxNQUFSLEdBQWVMLENBQUMsQ0FBQ00sT0FBakIsR0FBeUIsY0FBaEM7QUFBK0MsT0FBN0g7QUFBOEhDLG1CQUFhLEVBQUMsdUJBQVNQLENBQVQsRUFBVztBQUFDLGVBQU0sb0JBQWtCQSxDQUFDLENBQUNRLE9BQUYsR0FBVVIsQ0FBQyxDQUFDSSxLQUFGLENBQVFDLE1BQXBDLElBQTRDLGNBQWxEO0FBQWlFLE9BQXpOO0FBQTBOSSxpQkFBVyxFQUFDLHVCQUFVO0FBQUMsZUFBTSw0QkFBTjtBQUFtQyxPQUFwUjtBQUFxUkMscUJBQWUsRUFBQyx5QkFBU1YsQ0FBVCxFQUFXO0FBQUMsZUFBTSxVQUFRQSxDQUFDLENBQUNNLE9BQVYsR0FBa0IsbUJBQXhCO0FBQTRDLE9BQTdWO0FBQThWSyxlQUFTLEVBQUMscUJBQVU7QUFBQyxlQUFNLG1CQUFOO0FBQTBCLE9BQTdZO0FBQThZQyxlQUFTLEVBQUMscUJBQVU7QUFBQyxlQUFNLFlBQU47QUFBbUIsT0FBdGI7QUFBdWJDLG9CQUFjLEVBQUMsMEJBQVU7QUFBQyxlQUFNLGtCQUFOO0FBQXlCO0FBQTFlLEtBQU47QUFBa2YsR0FBM2hCLEdBQTZoQmIsQ0FBQyxDQUFDQyxNQUEvaEIsRUFBc2lCRCxDQUFDLENBQUNjLE9BQXhpQjtBQUFnakIsQ0FBdHBCLEVBQUQiLCJmaWxlIjoiLi9saWJzL3NlbGVjdDIvanMvaTE4bi90ay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBTZWxlY3QyIDQuMC4xMyB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCAqL1xyXG5cclxuIWZ1bmN0aW9uKCl7aWYoalF1ZXJ5JiZqUXVlcnkuZm4mJmpRdWVyeS5mbi5zZWxlY3QyJiZqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpdmFyIGU9alF1ZXJ5LmZuLnNlbGVjdDIuYW1kO2UuZGVmaW5lKFwic2VsZWN0Mi9pMThuL3RrXCIsW10sZnVuY3Rpb24oKXtyZXR1cm57ZXJyb3JMb2FkaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCJOZXRpamUgw73DvGtsZW5tZWRpLlwifSxpbnB1dFRvb0xvbmc6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5wdXQubGVuZ3RoLWUubWF4aW11bStcIiBoYXJwIGJvenXFiC5cIn0saW5wdXRUb29TaG9ydDpmdW5jdGlvbihlKXtyZXR1cm5cIsOdZW5lLWRlIGnFiCBheiBcIisoZS5taW5pbXVtLWUuaW5wdXQubGVuZ3RoKStcIiBoYXJwIMO9YXp5xYguXCJ9LGxvYWRpbmdNb3JlOmZ1bmN0aW9uKCl7cmV0dXJuXCJLw7ZwcsOkayBuZXRpamUgZ8O2cmtlemlsw73DpHLigKZcIn0sbWF4aW11bVNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVyblwiRGnFiGUgXCIrZS5tYXhpbXVtK1wiIHNhbnlzeW55IHNhw71sYcWILlwifSxub1Jlc3VsdHM6ZnVuY3Rpb24oKXtyZXR1cm5cIk5ldGlqZSB0YXB5bG1hZHkuXCJ9LHNlYXJjaGluZzpmdW5jdGlvbigpe3JldHVyblwiR8O2emxlbsO9w6Ry4oCmXCJ9LHJlbW92ZUFsbEl0ZW1zOmZ1bmN0aW9uKCl7cmV0dXJuXCJSZW1vdmUgYWxsIGl0ZW1zXCJ9fX0pLGUuZGVmaW5lLGUucmVxdWlyZX0oKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/tk.js\n");

/***/ })

/******/ })));