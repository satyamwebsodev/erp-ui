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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/nb.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/nb.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/nb.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;\n  e.define(\"select2/i18n/nb\", [], function () {\n    return {\n      errorLoading: function errorLoading() {\n        return \"Kunne ikke hente resultater.\";\n      },\n      inputTooLong: function inputTooLong(e) {\n        return \"Vennligst fjern \" + (e.input.length - e.maximum) + \" tegn\";\n      },\n      inputTooShort: function inputTooShort(e) {\n        return \"Vennligst skriv inn \" + (e.minimum - e.input.length) + \" tegn til\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Laster flere resultater…\";\n      },\n      maximumSelected: function maximumSelected(e) {\n        return \"Du kan velge maks \" + e.maximum + \" elementer\";\n      },\n      noResults: function noResults() {\n        return \"Ingen treff\";\n      },\n      searching: function searching() {\n        return \"Søker…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Fjern alle elementer\";\n      }\n    };\n  }), e.define, e.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9uYi5qcz80NDJlIl0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsImUiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJpbnB1dCIsImxlbmd0aCIsIm1heGltdW0iLCJpbnB1dFRvb1Nob3J0IiwibWluaW11bSIsImxvYWRpbmdNb3JlIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwicmVtb3ZlQWxsSXRlbXMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLENBQUMsWUFBVTtBQUFDLE1BQUdBLE1BQU0sSUFBRUEsTUFBTSxDQUFDQyxFQUFmLElBQW1CRCxNQUFNLENBQUNDLEVBQVAsQ0FBVUMsT0FBN0IsSUFBc0NGLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUEzRCxFQUErRCxJQUFJQyxDQUFDLEdBQUNKLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUF4QjtBQUE0QkMsR0FBQyxDQUFDQyxNQUFGLENBQVMsaUJBQVQsRUFBMkIsRUFBM0IsRUFBOEIsWUFBVTtBQUFDLFdBQU07QUFBQ0Msa0JBQVksRUFBQyx3QkFBVTtBQUFDLGVBQU0sOEJBQU47QUFBcUMsT0FBOUQ7QUFBK0RDLGtCQUFZLEVBQUMsc0JBQVNILENBQVQsRUFBVztBQUFDLGVBQU0sc0JBQW9CQSxDQUFDLENBQUNJLEtBQUYsQ0FBUUMsTUFBUixHQUFlTCxDQUFDLENBQUNNLE9BQXJDLElBQThDLE9BQXBEO0FBQTRELE9BQXBKO0FBQXFKQyxtQkFBYSxFQUFDLHVCQUFTUCxDQUFULEVBQVc7QUFBQyxlQUFNLDBCQUF3QkEsQ0FBQyxDQUFDUSxPQUFGLEdBQVVSLENBQUMsQ0FBQ0ksS0FBRixDQUFRQyxNQUExQyxJQUFrRCxXQUF4RDtBQUFvRSxPQUFuUDtBQUFvUEksaUJBQVcsRUFBQyx1QkFBVTtBQUFDLGVBQU0sMEJBQU47QUFBaUMsT0FBNVM7QUFBNlNDLHFCQUFlLEVBQUMseUJBQVNWLENBQVQsRUFBVztBQUFDLGVBQU0sdUJBQXFCQSxDQUFDLENBQUNNLE9BQXZCLEdBQStCLFlBQXJDO0FBQWtELE9BQTNYO0FBQTRYSyxlQUFTLEVBQUMscUJBQVU7QUFBQyxlQUFNLGFBQU47QUFBb0IsT0FBcmE7QUFBc2FDLGVBQVMsRUFBQyxxQkFBVTtBQUFDLGVBQU0sUUFBTjtBQUFlLE9BQTFjO0FBQTJjQyxvQkFBYyxFQUFDLDBCQUFVO0FBQUMsZUFBTSxzQkFBTjtBQUE2QjtBQUFsZ0IsS0FBTjtBQUEwZ0IsR0FBbmpCLEdBQXFqQmIsQ0FBQyxDQUFDQyxNQUF2akIsRUFBOGpCRCxDQUFDLENBQUNjLE9BQWhrQjtBQUF3a0IsQ0FBOXFCLEVBQUQiLCJmaWxlIjoiLi9saWJzL3NlbGVjdDIvanMvaTE4bi9uYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBTZWxlY3QyIDQuMC4xMyB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCAqL1xyXG5cclxuIWZ1bmN0aW9uKCl7aWYoalF1ZXJ5JiZqUXVlcnkuZm4mJmpRdWVyeS5mbi5zZWxlY3QyJiZqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpdmFyIGU9alF1ZXJ5LmZuLnNlbGVjdDIuYW1kO2UuZGVmaW5lKFwic2VsZWN0Mi9pMThuL25iXCIsW10sZnVuY3Rpb24oKXtyZXR1cm57ZXJyb3JMb2FkaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCJLdW5uZSBpa2tlIGhlbnRlIHJlc3VsdGF0ZXIuXCJ9LGlucHV0VG9vTG9uZzpmdW5jdGlvbihlKXtyZXR1cm5cIlZlbm5saWdzdCBmamVybiBcIisoZS5pbnB1dC5sZW5ndGgtZS5tYXhpbXVtKStcIiB0ZWduXCJ9LGlucHV0VG9vU2hvcnQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCJWZW5ubGlnc3Qgc2tyaXYgaW5uIFwiKyhlLm1pbmltdW0tZS5pbnB1dC5sZW5ndGgpK1wiIHRlZ24gdGlsXCJ9LGxvYWRpbmdNb3JlOmZ1bmN0aW9uKCl7cmV0dXJuXCJMYXN0ZXIgZmxlcmUgcmVzdWx0YXRlcuKAplwifSxtYXhpbXVtU2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCJEdSBrYW4gdmVsZ2UgbWFrcyBcIitlLm1heGltdW0rXCIgZWxlbWVudGVyXCJ9LG5vUmVzdWx0czpmdW5jdGlvbigpe3JldHVyblwiSW5nZW4gdHJlZmZcIn0sc2VhcmNoaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCJTw7hrZXLigKZcIn0scmVtb3ZlQWxsSXRlbXM6ZnVuY3Rpb24oKXtyZXR1cm5cIkZqZXJuIGFsbGUgZWxlbWVudGVyXCJ9fX0pLGUuZGVmaW5lLGUucmVxdWlyZX0oKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/nb.js\n");

/***/ })

/******/ })));