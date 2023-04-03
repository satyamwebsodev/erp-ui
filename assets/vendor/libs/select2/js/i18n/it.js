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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/it.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/it.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/it.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;\n  e.define(\"select2/i18n/it\", [], function () {\n    return {\n      errorLoading: function errorLoading() {\n        return \"I risultati non possono essere caricati.\";\n      },\n      inputTooLong: function inputTooLong(e) {\n        var n = e.input.length - e.maximum,\n            t = \"Per favore cancella \" + n + \" caratter\";\n        return t += 1 !== n ? \"i\" : \"e\";\n      },\n      inputTooShort: function inputTooShort(e) {\n        return \"Per favore inserisci \" + (e.minimum - e.input.length) + \" o più caratteri\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Caricando più risultati…\";\n      },\n      maximumSelected: function maximumSelected(e) {\n        var n = \"Puoi selezionare solo \" + e.maximum + \" element\";\n        return 1 !== e.maximum ? n += \"i\" : n += \"o\", n;\n      },\n      noResults: function noResults() {\n        return \"Nessun risultato trovato\";\n      },\n      searching: function searching() {\n        return \"Sto cercando…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Rimuovi tutti gli oggetti\";\n      }\n    };\n  }), e.define, e.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9pdC5qcz84N2M1Il0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsImUiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJuIiwiaW5wdXQiLCJsZW5ndGgiLCJtYXhpbXVtIiwidCIsImlucHV0VG9vU2hvcnQiLCJtaW5pbXVtIiwibG9hZGluZ01vcmUiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJyZW1vdmVBbGxJdGVtcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsQ0FBQyxZQUFVO0FBQUMsTUFBR0EsTUFBTSxJQUFFQSxNQUFNLENBQUNDLEVBQWYsSUFBbUJELE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUE3QixJQUFzQ0YsTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQTNELEVBQStELElBQUlDLENBQUMsR0FBQ0osTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQXhCO0FBQTRCQyxHQUFDLENBQUNDLE1BQUYsQ0FBUyxpQkFBVCxFQUEyQixFQUEzQixFQUE4QixZQUFVO0FBQUMsV0FBTTtBQUFDQyxrQkFBWSxFQUFDLHdCQUFVO0FBQUMsZUFBTSwwQ0FBTjtBQUFpRCxPQUExRTtBQUEyRUMsa0JBQVksRUFBQyxzQkFBU0gsQ0FBVCxFQUFXO0FBQUMsWUFBSUksQ0FBQyxHQUFDSixDQUFDLENBQUNLLEtBQUYsQ0FBUUMsTUFBUixHQUFlTixDQUFDLENBQUNPLE9BQXZCO0FBQUEsWUFBK0JDLENBQUMsR0FBQyx5QkFBdUJKLENBQXZCLEdBQXlCLFdBQTFEO0FBQXNFLGVBQU9JLENBQUMsSUFBRSxNQUFJSixDQUFKLEdBQU0sR0FBTixHQUFVLEdBQXBCO0FBQXdCLE9BQWxNO0FBQW1NSyxtQkFBYSxFQUFDLHVCQUFTVCxDQUFULEVBQVc7QUFBQyxlQUFNLDJCQUF5QkEsQ0FBQyxDQUFDVSxPQUFGLEdBQVVWLENBQUMsQ0FBQ0ssS0FBRixDQUFRQyxNQUEzQyxJQUFtRCxrQkFBekQ7QUFBNEUsT0FBelM7QUFBMFNLLGlCQUFXLEVBQUMsdUJBQVU7QUFBQyxlQUFNLDBCQUFOO0FBQWlDLE9BQWxXO0FBQW1XQyxxQkFBZSxFQUFDLHlCQUFTWixDQUFULEVBQVc7QUFBQyxZQUFJSSxDQUFDLEdBQUMsMkJBQXlCSixDQUFDLENBQUNPLE9BQTNCLEdBQW1DLFVBQXpDO0FBQW9ELGVBQU8sTUFBSVAsQ0FBQyxDQUFDTyxPQUFOLEdBQWNILENBQUMsSUFBRSxHQUFqQixHQUFxQkEsQ0FBQyxJQUFFLEdBQXhCLEVBQTRCQSxDQUFuQztBQUFxQyxPQUF4ZDtBQUF5ZFMsZUFBUyxFQUFDLHFCQUFVO0FBQUMsZUFBTSwwQkFBTjtBQUFpQyxPQUEvZ0I7QUFBZ2hCQyxlQUFTLEVBQUMscUJBQVU7QUFBQyxlQUFNLGVBQU47QUFBc0IsT0FBM2pCO0FBQTRqQkMsb0JBQWMsRUFBQywwQkFBVTtBQUFDLGVBQU0sMkJBQU47QUFBa0M7QUFBeG5CLEtBQU47QUFBZ29CLEdBQXpxQixHQUEycUJmLENBQUMsQ0FBQ0MsTUFBN3FCLEVBQW9yQkQsQ0FBQyxDQUFDZ0IsT0FBdHJCO0FBQThyQixDQUFweUIsRUFBRCIsImZpbGUiOiIuL2xpYnMvc2VsZWN0Mi9qcy9pMThuL2l0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIFNlbGVjdDIgNC4wLjEzIHwgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9ibG9iL21hc3Rlci9MSUNFTlNFLm1kICovXHJcblxyXG4hZnVuY3Rpb24oKXtpZihqUXVlcnkmJmpRdWVyeS5mbiYmalF1ZXJ5LmZuLnNlbGVjdDImJmpRdWVyeS5mbi5zZWxlY3QyLmFtZCl2YXIgZT1qUXVlcnkuZm4uc2VsZWN0Mi5hbWQ7ZS5kZWZpbmUoXCJzZWxlY3QyL2kxOG4vaXRcIixbXSxmdW5jdGlvbigpe3JldHVybntlcnJvckxvYWRpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cIkkgcmlzdWx0YXRpIG5vbiBwb3Nzb25vIGVzc2VyZSBjYXJpY2F0aS5cIn0saW5wdXRUb29Mb25nOmZ1bmN0aW9uKGUpe3ZhciBuPWUuaW5wdXQubGVuZ3RoLWUubWF4aW11bSx0PVwiUGVyIGZhdm9yZSBjYW5jZWxsYSBcIituK1wiIGNhcmF0dGVyXCI7cmV0dXJuIHQrPTEhPT1uP1wiaVwiOlwiZVwifSxpbnB1dFRvb1Nob3J0OmZ1bmN0aW9uKGUpe3JldHVyblwiUGVyIGZhdm9yZSBpbnNlcmlzY2kgXCIrKGUubWluaW11bS1lLmlucHV0Lmxlbmd0aCkrXCIgbyBwacO5IGNhcmF0dGVyaVwifSxsb2FkaW5nTW9yZTpmdW5jdGlvbigpe3JldHVyblwiQ2FyaWNhbmRvIHBpw7kgcmlzdWx0YXRp4oCmXCJ9LG1heGltdW1TZWxlY3RlZDpmdW5jdGlvbihlKXt2YXIgbj1cIlB1b2kgc2VsZXppb25hcmUgc29sbyBcIitlLm1heGltdW0rXCIgZWxlbWVudFwiO3JldHVybiAxIT09ZS5tYXhpbXVtP24rPVwiaVwiOm4rPVwib1wiLG59LG5vUmVzdWx0czpmdW5jdGlvbigpe3JldHVyblwiTmVzc3VuIHJpc3VsdGF0byB0cm92YXRvXCJ9LHNlYXJjaGluZzpmdW5jdGlvbigpe3JldHVyblwiU3RvIGNlcmNhbmRv4oCmXCJ9LHJlbW92ZUFsbEl0ZW1zOmZ1bmN0aW9uKCl7cmV0dXJuXCJSaW11b3ZpIHR1dHRpIGdsaSBvZ2dldHRpXCJ9fX0pLGUuZGVmaW5lLGUucmVxdWlyZX0oKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/it.js\n");

/***/ })

/******/ })));