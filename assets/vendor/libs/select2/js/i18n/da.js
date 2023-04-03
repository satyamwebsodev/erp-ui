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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/da.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/da.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/da.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;\n  e.define(\"select2/i18n/da\", [], function () {\n    return {\n      errorLoading: function errorLoading() {\n        return \"Resultaterne kunne ikke indlæses.\";\n      },\n      inputTooLong: function inputTooLong(e) {\n        return \"Angiv venligst \" + (e.input.length - e.maximum) + \" tegn mindre\";\n      },\n      inputTooShort: function inputTooShort(e) {\n        return \"Angiv venligst \" + (e.minimum - e.input.length) + \" tegn mere\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Indlæser flere resultater…\";\n      },\n      maximumSelected: function maximumSelected(e) {\n        var n = \"Du kan kun vælge \" + e.maximum + \" emne\";\n        return 1 != e.maximum && (n += \"r\"), n;\n      },\n      noResults: function noResults() {\n        return \"Ingen resultater fundet\";\n      },\n      searching: function searching() {\n        return \"Søger…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Fjern alle elementer\";\n      }\n    };\n  }), e.define, e.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9kYS5qcz80YTgwIl0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsImUiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJpbnB1dCIsImxlbmd0aCIsIm1heGltdW0iLCJpbnB1dFRvb1Nob3J0IiwibWluaW11bSIsImxvYWRpbmdNb3JlIiwibWF4aW11bVNlbGVjdGVkIiwibiIsIm5vUmVzdWx0cyIsInNlYXJjaGluZyIsInJlbW92ZUFsbEl0ZW1zIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxDQUFDLFlBQVU7QUFBQyxNQUFHQSxNQUFNLElBQUVBLE1BQU0sQ0FBQ0MsRUFBZixJQUFtQkQsTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQTdCLElBQXNDRixNQUFNLENBQUNDLEVBQVAsQ0FBVUMsT0FBVixDQUFrQkMsR0FBM0QsRUFBK0QsSUFBSUMsQ0FBQyxHQUFDSixNQUFNLENBQUNDLEVBQVAsQ0FBVUMsT0FBVixDQUFrQkMsR0FBeEI7QUFBNEJDLEdBQUMsQ0FBQ0MsTUFBRixDQUFTLGlCQUFULEVBQTJCLEVBQTNCLEVBQThCLFlBQVU7QUFBQyxXQUFNO0FBQUNDLGtCQUFZLEVBQUMsd0JBQVU7QUFBQyxlQUFNLG1DQUFOO0FBQTBDLE9BQW5FO0FBQW9FQyxrQkFBWSxFQUFDLHNCQUFTSCxDQUFULEVBQVc7QUFBQyxlQUFNLHFCQUFtQkEsQ0FBQyxDQUFDSSxLQUFGLENBQVFDLE1BQVIsR0FBZUwsQ0FBQyxDQUFDTSxPQUFwQyxJQUE2QyxjQUFuRDtBQUFrRSxPQUEvSjtBQUFnS0MsbUJBQWEsRUFBQyx1QkFBU1AsQ0FBVCxFQUFXO0FBQUMsZUFBTSxxQkFBbUJBLENBQUMsQ0FBQ1EsT0FBRixHQUFVUixDQUFDLENBQUNJLEtBQUYsQ0FBUUMsTUFBckMsSUFBNkMsWUFBbkQ7QUFBZ0UsT0FBMVA7QUFBMlBJLGlCQUFXLEVBQUMsdUJBQVU7QUFBQyxlQUFNLDRCQUFOO0FBQW1DLE9BQXJUO0FBQXNUQyxxQkFBZSxFQUFDLHlCQUFTVixDQUFULEVBQVc7QUFBQyxZQUFJVyxDQUFDLEdBQUMsc0JBQW9CWCxDQUFDLENBQUNNLE9BQXRCLEdBQThCLE9BQXBDO0FBQTRDLGVBQU8sS0FBR04sQ0FBQyxDQUFDTSxPQUFMLEtBQWVLLENBQUMsSUFBRSxHQUFsQixHQUF1QkEsQ0FBOUI7QUFBZ0MsT0FBOVo7QUFBK1pDLGVBQVMsRUFBQyxxQkFBVTtBQUFDLGVBQU0seUJBQU47QUFBZ0MsT0FBcGQ7QUFBcWRDLGVBQVMsRUFBQyxxQkFBVTtBQUFDLGVBQU0sUUFBTjtBQUFlLE9BQXpmO0FBQTBmQyxvQkFBYyxFQUFDLDBCQUFVO0FBQUMsZUFBTSxzQkFBTjtBQUE2QjtBQUFqakIsS0FBTjtBQUF5akIsR0FBbG1CLEdBQW9tQmQsQ0FBQyxDQUFDQyxNQUF0bUIsRUFBNm1CRCxDQUFDLENBQUNlLE9BQS9tQjtBQUF1bkIsQ0FBN3RCLEVBQUQiLCJmaWxlIjoiLi9saWJzL3NlbGVjdDIvanMvaTE4bi9kYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBTZWxlY3QyIDQuMC4xMyB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCAqL1xyXG5cclxuIWZ1bmN0aW9uKCl7aWYoalF1ZXJ5JiZqUXVlcnkuZm4mJmpRdWVyeS5mbi5zZWxlY3QyJiZqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpdmFyIGU9alF1ZXJ5LmZuLnNlbGVjdDIuYW1kO2UuZGVmaW5lKFwic2VsZWN0Mi9pMThuL2RhXCIsW10sZnVuY3Rpb24oKXtyZXR1cm57ZXJyb3JMb2FkaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCJSZXN1bHRhdGVybmUga3VubmUgaWtrZSBpbmRsw6ZzZXMuXCJ9LGlucHV0VG9vTG9uZzpmdW5jdGlvbihlKXtyZXR1cm5cIkFuZ2l2IHZlbmxpZ3N0IFwiKyhlLmlucHV0Lmxlbmd0aC1lLm1heGltdW0pK1wiIHRlZ24gbWluZHJlXCJ9LGlucHV0VG9vU2hvcnQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCJBbmdpdiB2ZW5saWdzdCBcIisoZS5taW5pbXVtLWUuaW5wdXQubGVuZ3RoKStcIiB0ZWduIG1lcmVcIn0sbG9hZGluZ01vcmU6ZnVuY3Rpb24oKXtyZXR1cm5cIkluZGzDpnNlciBmbGVyZSByZXN1bHRhdGVy4oCmXCJ9LG1heGltdW1TZWxlY3RlZDpmdW5jdGlvbihlKXt2YXIgbj1cIkR1IGthbiBrdW4gdsOmbGdlIFwiK2UubWF4aW11bStcIiBlbW5lXCI7cmV0dXJuIDEhPWUubWF4aW11bSYmKG4rPVwiclwiKSxufSxub1Jlc3VsdHM6ZnVuY3Rpb24oKXtyZXR1cm5cIkluZ2VuIHJlc3VsdGF0ZXIgZnVuZGV0XCJ9LHNlYXJjaGluZzpmdW5jdGlvbigpe3JldHVyblwiU8O4Z2Vy4oCmXCJ9LHJlbW92ZUFsbEl0ZW1zOmZ1bmN0aW9uKCl7cmV0dXJuXCJGamVybiBhbGxlIGVsZW1lbnRlclwifX19KSxlLmRlZmluZSxlLnJlcXVpcmV9KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/da.js\n");

/***/ })

/******/ })));