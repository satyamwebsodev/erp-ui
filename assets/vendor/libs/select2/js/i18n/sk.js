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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/sk.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/sk.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/sk.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;\n  e.define(\"select2/i18n/sk\", [], function () {\n    var e = {\n      2: function _(e) {\n        return e ? \"dva\" : \"dve\";\n      },\n      3: function _() {\n        return \"tri\";\n      },\n      4: function _() {\n        return \"štyri\";\n      }\n    };\n    return {\n      errorLoading: function errorLoading() {\n        return \"Výsledky sa nepodarilo načítať.\";\n      },\n      inputTooLong: function inputTooLong(n) {\n        var t = n.input.length - n.maximum;\n        return 1 == t ? \"Prosím, zadajte o jeden znak menej\" : t >= 2 && t <= 4 ? \"Prosím, zadajte o \" + e[t](!0) + \" znaky menej\" : \"Prosím, zadajte o \" + t + \" znakov menej\";\n      },\n      inputTooShort: function inputTooShort(n) {\n        var t = n.minimum - n.input.length;\n        return 1 == t ? \"Prosím, zadajte ešte jeden znak\" : t <= 4 ? \"Prosím, zadajte ešte ďalšie \" + e[t](!0) + \" znaky\" : \"Prosím, zadajte ešte ďalších \" + t + \" znakov\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Načítanie ďalších výsledkov…\";\n      },\n      maximumSelected: function maximumSelected(n) {\n        return 1 == n.maximum ? \"Môžete zvoliť len jednu položku\" : n.maximum >= 2 && n.maximum <= 4 ? \"Môžete zvoliť najviac \" + e[n.maximum](!1) + \" položky\" : \"Môžete zvoliť najviac \" + n.maximum + \" položiek\";\n      },\n      noResults: function noResults() {\n        return \"Nenašli sa žiadne položky\";\n      },\n      searching: function searching() {\n        return \"Vyhľadávanie…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Odstráňte všetky položky\";\n      }\n    };\n  }), e.define, e.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9zay5qcz8wOWFhIl0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsImUiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJuIiwidCIsImlucHV0IiwibGVuZ3RoIiwibWF4aW11bSIsImlucHV0VG9vU2hvcnQiLCJtaW5pbXVtIiwibG9hZGluZ01vcmUiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJyZW1vdmVBbGxJdGVtcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsQ0FBQyxZQUFVO0FBQUMsTUFBR0EsTUFBTSxJQUFFQSxNQUFNLENBQUNDLEVBQWYsSUFBbUJELE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUE3QixJQUFzQ0YsTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQTNELEVBQStELElBQUlDLENBQUMsR0FBQ0osTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQXhCO0FBQTRCQyxHQUFDLENBQUNDLE1BQUYsQ0FBUyxpQkFBVCxFQUEyQixFQUEzQixFQUE4QixZQUFVO0FBQUMsUUFBSUQsQ0FBQyxHQUFDO0FBQUMsU0FBRSxXQUFTQSxDQUFULEVBQVc7QUFBQyxlQUFPQSxDQUFDLEdBQUMsS0FBRCxHQUFPLEtBQWY7QUFBcUIsT0FBcEM7QUFBcUMsU0FBRSxhQUFVO0FBQUMsZUFBTSxLQUFOO0FBQVksT0FBOUQ7QUFBK0QsU0FBRSxhQUFVO0FBQUMsZUFBTSxPQUFOO0FBQWM7QUFBMUYsS0FBTjtBQUFrRyxXQUFNO0FBQUNFLGtCQUFZLEVBQUMsd0JBQVU7QUFBQyxlQUFNLGlDQUFOO0FBQXdDLE9BQWpFO0FBQWtFQyxrQkFBWSxFQUFDLHNCQUFTQyxDQUFULEVBQVc7QUFBQyxZQUFJQyxDQUFDLEdBQUNELENBQUMsQ0FBQ0UsS0FBRixDQUFRQyxNQUFSLEdBQWVILENBQUMsQ0FBQ0ksT0FBdkI7QUFBK0IsZUFBTyxLQUFHSCxDQUFILEdBQUssb0NBQUwsR0FBMENBLENBQUMsSUFBRSxDQUFILElBQU1BLENBQUMsSUFBRSxDQUFULEdBQVcsdUJBQXFCTCxDQUFDLENBQUNLLENBQUQsQ0FBRCxDQUFLLENBQUMsQ0FBTixDQUFyQixHQUE4QixjQUF6QyxHQUF3RCx1QkFBcUJBLENBQXJCLEdBQXVCLGVBQWhJO0FBQWdKLE9BQTFRO0FBQTJRSSxtQkFBYSxFQUFDLHVCQUFTTCxDQUFULEVBQVc7QUFBQyxZQUFJQyxDQUFDLEdBQUNELENBQUMsQ0FBQ00sT0FBRixHQUFVTixDQUFDLENBQUNFLEtBQUYsQ0FBUUMsTUFBeEI7QUFBK0IsZUFBTyxLQUFHRixDQUFILEdBQUssaUNBQUwsR0FBdUNBLENBQUMsSUFBRSxDQUFILEdBQUssaUNBQStCTCxDQUFDLENBQUNLLENBQUQsQ0FBRCxDQUFLLENBQUMsQ0FBTixDQUEvQixHQUF3QyxRQUE3QyxHQUFzRCxrQ0FBZ0NBLENBQWhDLEdBQWtDLFNBQXRJO0FBQWdKLE9BQXBkO0FBQXFkTSxpQkFBVyxFQUFDLHVCQUFVO0FBQUMsZUFBTSw4QkFBTjtBQUFxQyxPQUFqaEI7QUFBa2hCQyxxQkFBZSxFQUFDLHlCQUFTUixDQUFULEVBQVc7QUFBQyxlQUFPLEtBQUdBLENBQUMsQ0FBQ0ksT0FBTCxHQUFhLGlDQUFiLEdBQStDSixDQUFDLENBQUNJLE9BQUYsSUFBVyxDQUFYLElBQWNKLENBQUMsQ0FBQ0ksT0FBRixJQUFXLENBQXpCLEdBQTJCLDJCQUF5QlIsQ0FBQyxDQUFDSSxDQUFDLENBQUNJLE9BQUgsQ0FBRCxDQUFhLENBQUMsQ0FBZCxDQUF6QixHQUEwQyxVQUFyRSxHQUFnRiwyQkFBeUJKLENBQUMsQ0FBQ0ksT0FBM0IsR0FBbUMsV0FBeks7QUFBcUwsT0FBbnVCO0FBQW91QkssZUFBUyxFQUFDLHFCQUFVO0FBQUMsZUFBTSwyQkFBTjtBQUFrQyxPQUEzeEI7QUFBNHhCQyxlQUFTLEVBQUMscUJBQVU7QUFBQyxlQUFNLGVBQU47QUFBc0IsT0FBdjBCO0FBQXcwQkMsb0JBQWMsRUFBQywwQkFBVTtBQUFDLGVBQU0sMEJBQU47QUFBaUM7QUFBbjRCLEtBQU47QUFBMjRCLEdBQXRoQyxHQUF3aENmLENBQUMsQ0FBQ0MsTUFBMWhDLEVBQWlpQ0QsQ0FBQyxDQUFDZ0IsT0FBbmlDO0FBQTJpQyxDQUFqcEMsRUFBRCIsImZpbGUiOiIuL2xpYnMvc2VsZWN0Mi9qcy9pMThuL3NrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIFNlbGVjdDIgNC4wLjEzIHwgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9ibG9iL21hc3Rlci9MSUNFTlNFLm1kICovXHJcblxyXG4hZnVuY3Rpb24oKXtpZihqUXVlcnkmJmpRdWVyeS5mbiYmalF1ZXJ5LmZuLnNlbGVjdDImJmpRdWVyeS5mbi5zZWxlY3QyLmFtZCl2YXIgZT1qUXVlcnkuZm4uc2VsZWN0Mi5hbWQ7ZS5kZWZpbmUoXCJzZWxlY3QyL2kxOG4vc2tcIixbXSxmdW5jdGlvbigpe3ZhciBlPXsyOmZ1bmN0aW9uKGUpe3JldHVybiBlP1wiZHZhXCI6XCJkdmVcIn0sMzpmdW5jdGlvbigpe3JldHVyblwidHJpXCJ9LDQ6ZnVuY3Rpb24oKXtyZXR1cm5cIsWhdHlyaVwifX07cmV0dXJue2Vycm9yTG9hZGluZzpmdW5jdGlvbigpe3JldHVyblwiVsO9c2xlZGt5IHNhIG5lcG9kYXJpbG8gbmHEjcOtdGHFpS5cIn0saW5wdXRUb29Mb25nOmZ1bmN0aW9uKG4pe3ZhciB0PW4uaW5wdXQubGVuZ3RoLW4ubWF4aW11bTtyZXR1cm4gMT09dD9cIlByb3PDrW0sIHphZGFqdGUgbyBqZWRlbiB6bmFrIG1lbmVqXCI6dD49MiYmdDw9ND9cIlByb3PDrW0sIHphZGFqdGUgbyBcIitlW3RdKCEwKStcIiB6bmFreSBtZW5lalwiOlwiUHJvc8OtbSwgemFkYWp0ZSBvIFwiK3QrXCIgem5ha292IG1lbmVqXCJ9LGlucHV0VG9vU2hvcnQ6ZnVuY3Rpb24obil7dmFyIHQ9bi5taW5pbXVtLW4uaW5wdXQubGVuZ3RoO3JldHVybiAxPT10P1wiUHJvc8OtbSwgemFkYWp0ZSBlxaF0ZSBqZWRlbiB6bmFrXCI6dDw9ND9cIlByb3PDrW0sIHphZGFqdGUgZcWhdGUgxI9hbMWhaWUgXCIrZVt0XSghMCkrXCIgem5ha3lcIjpcIlByb3PDrW0sIHphZGFqdGUgZcWhdGUgxI9hbMWhw61jaCBcIit0K1wiIHpuYWtvdlwifSxsb2FkaW5nTW9yZTpmdW5jdGlvbigpe3JldHVyblwiTmHEjcOtdGFuaWUgxI9hbMWhw61jaCB2w71zbGVka2924oCmXCJ9LG1heGltdW1TZWxlY3RlZDpmdW5jdGlvbihuKXtyZXR1cm4gMT09bi5tYXhpbXVtP1wiTcO0xb5ldGUgenZvbGnFpSBsZW4gamVkbnUgcG9sb8W+a3VcIjpuLm1heGltdW0+PTImJm4ubWF4aW11bTw9ND9cIk3DtMW+ZXRlIHp2b2xpxaUgbmFqdmlhYyBcIitlW24ubWF4aW11bV0oITEpK1wiIHBvbG/Fvmt5XCI6XCJNw7TFvmV0ZSB6dm9sacWlIG5hanZpYWMgXCIrbi5tYXhpbXVtK1wiIHBvbG/Fvmlla1wifSxub1Jlc3VsdHM6ZnVuY3Rpb24oKXtyZXR1cm5cIk5lbmHFoWxpIHNhIMW+aWFkbmUgcG9sb8W+a3lcIn0sc2VhcmNoaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCJWeWjEvmFkw6F2YW5pZeKAplwifSxyZW1vdmVBbGxJdGVtczpmdW5jdGlvbigpe3JldHVyblwiT2RzdHLDocWIdGUgdsWhZXRreSBwb2xvxb5reVwifX19KSxlLmRlZmluZSxlLnJlcXVpcmV9KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/sk.js\n");

/***/ })

/******/ })));