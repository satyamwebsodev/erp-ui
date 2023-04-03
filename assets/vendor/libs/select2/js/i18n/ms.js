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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/ms.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/ms.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/ms.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;\n  n.define(\"select2/i18n/ms\", [], function () {\n    return {\n      errorLoading: function errorLoading() {\n        return \"Keputusan tidak berjaya dimuatkan.\";\n      },\n      inputTooLong: function inputTooLong(n) {\n        return \"Sila hapuskan \" + (n.input.length - n.maximum) + \" aksara\";\n      },\n      inputTooShort: function inputTooShort(n) {\n        return \"Sila masukkan \" + (n.minimum - n.input.length) + \" atau lebih aksara\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Sedang memuatkan keputusan…\";\n      },\n      maximumSelected: function maximumSelected(n) {\n        return \"Anda hanya boleh memilih \" + n.maximum + \" pilihan\";\n      },\n      noResults: function noResults() {\n        return \"Tiada padanan yang ditemui\";\n      },\n      searching: function searching() {\n        return \"Mencari…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Keluarkan semua item\";\n      }\n    };\n  }), n.define, n.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9tcy5qcz9lMzk0Il0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsIm4iLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJpbnB1dCIsImxlbmd0aCIsIm1heGltdW0iLCJpbnB1dFRvb1Nob3J0IiwibWluaW11bSIsImxvYWRpbmdNb3JlIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwicmVtb3ZlQWxsSXRlbXMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLENBQUMsWUFBVTtBQUFDLE1BQUdBLE1BQU0sSUFBRUEsTUFBTSxDQUFDQyxFQUFmLElBQW1CRCxNQUFNLENBQUNDLEVBQVAsQ0FBVUMsT0FBN0IsSUFBc0NGLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUEzRCxFQUErRCxJQUFJQyxDQUFDLEdBQUNKLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUF4QjtBQUE0QkMsR0FBQyxDQUFDQyxNQUFGLENBQVMsaUJBQVQsRUFBMkIsRUFBM0IsRUFBOEIsWUFBVTtBQUFDLFdBQU07QUFBQ0Msa0JBQVksRUFBQyx3QkFBVTtBQUFDLGVBQU0sb0NBQU47QUFBMkMsT0FBcEU7QUFBcUVDLGtCQUFZLEVBQUMsc0JBQVNILENBQVQsRUFBVztBQUFDLGVBQU0sb0JBQWtCQSxDQUFDLENBQUNJLEtBQUYsQ0FBUUMsTUFBUixHQUFlTCxDQUFDLENBQUNNLE9BQW5DLElBQTRDLFNBQWxEO0FBQTRELE9BQTFKO0FBQTJKQyxtQkFBYSxFQUFDLHVCQUFTUCxDQUFULEVBQVc7QUFBQyxlQUFNLG9CQUFrQkEsQ0FBQyxDQUFDUSxPQUFGLEdBQVVSLENBQUMsQ0FBQ0ksS0FBRixDQUFRQyxNQUFwQyxJQUE0QyxvQkFBbEQ7QUFBdUUsT0FBNVA7QUFBNlBJLGlCQUFXLEVBQUMsdUJBQVU7QUFBQyxlQUFNLDZCQUFOO0FBQW9DLE9BQXhUO0FBQXlUQyxxQkFBZSxFQUFDLHlCQUFTVixDQUFULEVBQVc7QUFBQyxlQUFNLDhCQUE0QkEsQ0FBQyxDQUFDTSxPQUE5QixHQUFzQyxVQUE1QztBQUF1RCxPQUE1WTtBQUE2WUssZUFBUyxFQUFDLHFCQUFVO0FBQUMsZUFBTSw0QkFBTjtBQUFtQyxPQUFyYztBQUFzY0MsZUFBUyxFQUFDLHFCQUFVO0FBQUMsZUFBTSxVQUFOO0FBQWlCLE9BQTVlO0FBQTZlQyxvQkFBYyxFQUFDLDBCQUFVO0FBQUMsZUFBTSxzQkFBTjtBQUE2QjtBQUFwaUIsS0FBTjtBQUE0aUIsR0FBcmxCLEdBQXVsQmIsQ0FBQyxDQUFDQyxNQUF6bEIsRUFBZ21CRCxDQUFDLENBQUNjLE9BQWxtQjtBQUEwbUIsQ0FBaHRCLEVBQUQiLCJmaWxlIjoiLi9saWJzL3NlbGVjdDIvanMvaTE4bi9tcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBTZWxlY3QyIDQuMC4xMyB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCAqL1xyXG5cclxuIWZ1bmN0aW9uKCl7aWYoalF1ZXJ5JiZqUXVlcnkuZm4mJmpRdWVyeS5mbi5zZWxlY3QyJiZqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpdmFyIG49alF1ZXJ5LmZuLnNlbGVjdDIuYW1kO24uZGVmaW5lKFwic2VsZWN0Mi9pMThuL21zXCIsW10sZnVuY3Rpb24oKXtyZXR1cm57ZXJyb3JMb2FkaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCJLZXB1dHVzYW4gdGlkYWsgYmVyamF5YSBkaW11YXRrYW4uXCJ9LGlucHV0VG9vTG9uZzpmdW5jdGlvbihuKXtyZXR1cm5cIlNpbGEgaGFwdXNrYW4gXCIrKG4uaW5wdXQubGVuZ3RoLW4ubWF4aW11bSkrXCIgYWtzYXJhXCJ9LGlucHV0VG9vU2hvcnQ6ZnVuY3Rpb24obil7cmV0dXJuXCJTaWxhIG1hc3Vra2FuIFwiKyhuLm1pbmltdW0tbi5pbnB1dC5sZW5ndGgpK1wiIGF0YXUgbGViaWggYWtzYXJhXCJ9LGxvYWRpbmdNb3JlOmZ1bmN0aW9uKCl7cmV0dXJuXCJTZWRhbmcgbWVtdWF0a2FuIGtlcHV0dXNhbuKAplwifSxtYXhpbXVtU2VsZWN0ZWQ6ZnVuY3Rpb24obil7cmV0dXJuXCJBbmRhIGhhbnlhIGJvbGVoIG1lbWlsaWggXCIrbi5tYXhpbXVtK1wiIHBpbGloYW5cIn0sbm9SZXN1bHRzOmZ1bmN0aW9uKCl7cmV0dXJuXCJUaWFkYSBwYWRhbmFuIHlhbmcgZGl0ZW11aVwifSxzZWFyY2hpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cIk1lbmNhcmnigKZcIn0scmVtb3ZlQWxsSXRlbXM6ZnVuY3Rpb24oKXtyZXR1cm5cIktlbHVhcmthbiBzZW11YSBpdGVtXCJ9fX0pLG4uZGVmaW5lLG4ucmVxdWlyZX0oKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/ms.js\n");

/***/ })

/******/ })));