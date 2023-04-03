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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/uk.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/uk.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/uk.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;\n  n.define(\"select2/i18n/uk\", [], function () {\n    function n(n, e, u, r) {\n      return n % 100 > 10 && n % 100 < 15 ? r : n % 10 == 1 ? e : n % 10 > 1 && n % 10 < 5 ? u : r;\n    }\n\n    return {\n      errorLoading: function errorLoading() {\n        return \"Неможливо завантажити результати\";\n      },\n      inputTooLong: function inputTooLong(e) {\n        return \"Будь ласка, видаліть \" + (e.input.length - e.maximum) + \" \" + n(e.maximum, \"літеру\", \"літери\", \"літер\");\n      },\n      inputTooShort: function inputTooShort(n) {\n        return \"Будь ласка, введіть \" + (n.minimum - n.input.length) + \" або більше літер\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Завантаження інших результатів…\";\n      },\n      maximumSelected: function maximumSelected(e) {\n        return \"Ви можете вибрати лише \" + e.maximum + \" \" + n(e.maximum, \"пункт\", \"пункти\", \"пунктів\");\n      },\n      noResults: function noResults() {\n        return \"Нічого не знайдено\";\n      },\n      searching: function searching() {\n        return \"Пошук…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Видалити всі елементи\";\n      }\n    };\n  }), n.define, n.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi91ay5qcz82YzBjIl0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsIm4iLCJkZWZpbmUiLCJlIiwidSIsInIiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJpbnB1dCIsImxlbmd0aCIsIm1heGltdW0iLCJpbnB1dFRvb1Nob3J0IiwibWluaW11bSIsImxvYWRpbmdNb3JlIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwicmVtb3ZlQWxsSXRlbXMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLENBQUMsWUFBVTtBQUFDLE1BQUdBLE1BQU0sSUFBRUEsTUFBTSxDQUFDQyxFQUFmLElBQW1CRCxNQUFNLENBQUNDLEVBQVAsQ0FBVUMsT0FBN0IsSUFBc0NGLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUEzRCxFQUErRCxJQUFJQyxDQUFDLEdBQUNKLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUF4QjtBQUE0QkMsR0FBQyxDQUFDQyxNQUFGLENBQVMsaUJBQVQsRUFBMkIsRUFBM0IsRUFBOEIsWUFBVTtBQUFDLGFBQVNELENBQVQsQ0FBV0EsQ0FBWCxFQUFhRSxDQUFiLEVBQWVDLENBQWYsRUFBaUJDLENBQWpCLEVBQW1CO0FBQUMsYUFBT0osQ0FBQyxHQUFDLEdBQUYsR0FBTSxFQUFOLElBQVVBLENBQUMsR0FBQyxHQUFGLEdBQU0sRUFBaEIsR0FBbUJJLENBQW5CLEdBQXFCSixDQUFDLEdBQUMsRUFBRixJQUFNLENBQU4sR0FBUUUsQ0FBUixHQUFVRixDQUFDLEdBQUMsRUFBRixHQUFLLENBQUwsSUFBUUEsQ0FBQyxHQUFDLEVBQUYsR0FBSyxDQUFiLEdBQWVHLENBQWYsR0FBaUJDLENBQXZEO0FBQXlEOztBQUFBLFdBQU07QUFBQ0Msa0JBQVksRUFBQyx3QkFBVTtBQUFDLGVBQU0sa0NBQU47QUFBeUMsT0FBbEU7QUFBbUVDLGtCQUFZLEVBQUMsc0JBQVNKLENBQVQsRUFBVztBQUFDLGVBQU0sMkJBQXlCQSxDQUFDLENBQUNLLEtBQUYsQ0FBUUMsTUFBUixHQUFlTixDQUFDLENBQUNPLE9BQTFDLElBQW1ELEdBQW5ELEdBQXVEVCxDQUFDLENBQUNFLENBQUMsQ0FBQ08sT0FBSCxFQUFXLFFBQVgsRUFBb0IsUUFBcEIsRUFBNkIsT0FBN0IsQ0FBOUQ7QUFBb0csT0FBaE07QUFBaU1DLG1CQUFhLEVBQUMsdUJBQVNWLENBQVQsRUFBVztBQUFDLGVBQU0sMEJBQXdCQSxDQUFDLENBQUNXLE9BQUYsR0FBVVgsQ0FBQyxDQUFDTyxLQUFGLENBQVFDLE1BQTFDLElBQWtELG1CQUF4RDtBQUE0RSxPQUF2UztBQUF3U0ksaUJBQVcsRUFBQyx1QkFBVTtBQUFDLGVBQU0saUNBQU47QUFBd0MsT0FBdlc7QUFBd1dDLHFCQUFlLEVBQUMseUJBQVNYLENBQVQsRUFBVztBQUFDLGVBQU0sNEJBQTBCQSxDQUFDLENBQUNPLE9BQTVCLEdBQW9DLEdBQXBDLEdBQXdDVCxDQUFDLENBQUNFLENBQUMsQ0FBQ08sT0FBSCxFQUFXLE9BQVgsRUFBbUIsUUFBbkIsRUFBNEIsU0FBNUIsQ0FBL0M7QUFBc0YsT0FBMWQ7QUFBMmRLLGVBQVMsRUFBQyxxQkFBVTtBQUFDLGVBQU0sb0JBQU47QUFBMkIsT0FBM2dCO0FBQTRnQkMsZUFBUyxFQUFDLHFCQUFVO0FBQUMsZUFBTSxRQUFOO0FBQWUsT0FBaGpCO0FBQWlqQkMsb0JBQWMsRUFBQywwQkFBVTtBQUFDLGVBQU0sdUJBQU47QUFBOEI7QUFBem1CLEtBQU47QUFBaW5CLEdBQXZ1QixHQUF5dUJoQixDQUFDLENBQUNDLE1BQTN1QixFQUFrdkJELENBQUMsQ0FBQ2lCLE9BQXB2QjtBQUE0dkIsQ0FBbDJCLEVBQUQiLCJmaWxlIjoiLi9saWJzL3NlbGVjdDIvanMvaTE4bi91ay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBTZWxlY3QyIDQuMC4xMyB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCAqL1xyXG5cclxuIWZ1bmN0aW9uKCl7aWYoalF1ZXJ5JiZqUXVlcnkuZm4mJmpRdWVyeS5mbi5zZWxlY3QyJiZqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpdmFyIG49alF1ZXJ5LmZuLnNlbGVjdDIuYW1kO24uZGVmaW5lKFwic2VsZWN0Mi9pMThuL3VrXCIsW10sZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sZSx1LHIpe3JldHVybiBuJTEwMD4xMCYmbiUxMDA8MTU/cjpuJTEwPT0xP2U6biUxMD4xJiZuJTEwPDU/dTpyfXJldHVybntlcnJvckxvYWRpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cItCd0LXQvNC+0LbQu9C40LLQviDQt9Cw0LLQsNC90YLQsNC20LjRgtC4INGA0LXQt9GD0LvRjNGC0LDRgtC4XCJ9LGlucHV0VG9vTG9uZzpmdW5jdGlvbihlKXtyZXR1cm5cItCR0YPQtNGMINC70LDRgdC60LAsINCy0LjQtNCw0LvRltGC0YwgXCIrKGUuaW5wdXQubGVuZ3RoLWUubWF4aW11bSkrXCIgXCIrbihlLm1heGltdW0sXCLQu9GW0YLQtdGA0YNcIixcItC70ZbRgtC10YDQuFwiLFwi0LvRltGC0LXRgFwiKX0saW5wdXRUb29TaG9ydDpmdW5jdGlvbihuKXtyZXR1cm5cItCR0YPQtNGMINC70LDRgdC60LAsINCy0LLQtdC00ZbRgtGMIFwiKyhuLm1pbmltdW0tbi5pbnB1dC5sZW5ndGgpK1wiINCw0LHQviDQsdGW0LvRjNGI0LUg0LvRltGC0LXRgFwifSxsb2FkaW5nTW9yZTpmdW5jdGlvbigpe3JldHVyblwi0JfQsNCy0LDQvdGC0LDQttC10L3QvdGPINGW0L3RiNC40YUg0YDQtdC30YPQu9GM0YLQsNGC0ZbQsuKAplwifSxtYXhpbXVtU2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCLQktC4INC80L7QttC10YLQtSDQstC40LHRgNCw0YLQuCDQu9C40YjQtSBcIitlLm1heGltdW0rXCIgXCIrbihlLm1heGltdW0sXCLQv9GD0L3QutGCXCIsXCLQv9GD0L3QutGC0LhcIixcItC/0YPQvdC60YLRltCyXCIpfSxub1Jlc3VsdHM6ZnVuY3Rpb24oKXtyZXR1cm5cItCd0ZbRh9C+0LPQviDQvdC1INC30L3QsNC50LTQtdC90L5cIn0sc2VhcmNoaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCLQn9C+0YjRg9C64oCmXCJ9LHJlbW92ZUFsbEl0ZW1zOmZ1bmN0aW9uKCl7cmV0dXJuXCLQktC40LTQsNC70LjRgtC4INCy0YHRliDQtdC70LXQvNC10L3RgtC4XCJ9fX0pLG4uZGVmaW5lLG4ucmVxdWlyZX0oKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/uk.js\n");

/***/ })

/******/ })));