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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/sq.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/sq.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/sq.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;\n  e.define(\"select2/i18n/sq\", [], function () {\n    return {\n      errorLoading: function errorLoading() {\n        return \"Rezultatet nuk mund të ngarkoheshin.\";\n      },\n      inputTooLong: function inputTooLong(e) {\n        var n = e.input.length - e.maximum,\n            t = \"Të lutem fshi \" + n + \" karakter\";\n        return 1 != n && (t += \"e\"), t;\n      },\n      inputTooShort: function inputTooShort(e) {\n        return \"Të lutem shkruaj \" + (e.minimum - e.input.length) + \" ose më shumë karaktere\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Duke ngarkuar më shumë rezultate…\";\n      },\n      maximumSelected: function maximumSelected(e) {\n        var n = \"Mund të zgjedhësh vetëm \" + e.maximum + \" element\";\n        return 1 != e.maximum && (n += \"e\"), n;\n      },\n      noResults: function noResults() {\n        return \"Nuk u gjet asnjë rezultat\";\n      },\n      searching: function searching() {\n        return \"Duke kërkuar…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Hiq të gjitha sendet\";\n      }\n    };\n  }), e.define, e.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9zcS5qcz8zZWRhIl0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsImUiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJuIiwiaW5wdXQiLCJsZW5ndGgiLCJtYXhpbXVtIiwidCIsImlucHV0VG9vU2hvcnQiLCJtaW5pbXVtIiwibG9hZGluZ01vcmUiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJyZW1vdmVBbGxJdGVtcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsQ0FBQyxZQUFVO0FBQUMsTUFBR0EsTUFBTSxJQUFFQSxNQUFNLENBQUNDLEVBQWYsSUFBbUJELE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUE3QixJQUFzQ0YsTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQTNELEVBQStELElBQUlDLENBQUMsR0FBQ0osTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQXhCO0FBQTRCQyxHQUFDLENBQUNDLE1BQUYsQ0FBUyxpQkFBVCxFQUEyQixFQUEzQixFQUE4QixZQUFVO0FBQUMsV0FBTTtBQUFDQyxrQkFBWSxFQUFDLHdCQUFVO0FBQUMsZUFBTSxzQ0FBTjtBQUE2QyxPQUF0RTtBQUF1RUMsa0JBQVksRUFBQyxzQkFBU0gsQ0FBVCxFQUFXO0FBQUMsWUFBSUksQ0FBQyxHQUFDSixDQUFDLENBQUNLLEtBQUYsQ0FBUUMsTUFBUixHQUFlTixDQUFDLENBQUNPLE9BQXZCO0FBQUEsWUFBK0JDLENBQUMsR0FBQyxtQkFBaUJKLENBQWpCLEdBQW1CLFdBQXBEO0FBQWdFLGVBQU8sS0FBR0EsQ0FBSCxLQUFPSSxDQUFDLElBQUUsR0FBVixHQUFlQSxDQUF0QjtBQUF3QixPQUF4TDtBQUF5TEMsbUJBQWEsRUFBQyx1QkFBU1QsQ0FBVCxFQUFXO0FBQUMsZUFBTSx1QkFBcUJBLENBQUMsQ0FBQ1UsT0FBRixHQUFVVixDQUFDLENBQUNLLEtBQUYsQ0FBUUMsTUFBdkMsSUFBK0MseUJBQXJEO0FBQStFLE9BQWxTO0FBQW1TSyxpQkFBVyxFQUFDLHVCQUFVO0FBQUMsZUFBTSxtQ0FBTjtBQUEwQyxPQUFwVztBQUFxV0MscUJBQWUsRUFBQyx5QkFBU1osQ0FBVCxFQUFXO0FBQUMsWUFBSUksQ0FBQyxHQUFDLDZCQUEyQkosQ0FBQyxDQUFDTyxPQUE3QixHQUFxQyxVQUEzQztBQUFzRCxlQUFPLEtBQUdQLENBQUMsQ0FBQ08sT0FBTCxLQUFlSCxDQUFDLElBQUUsR0FBbEIsR0FBdUJBLENBQTlCO0FBQWdDLE9BQXZkO0FBQXdkUyxlQUFTLEVBQUMscUJBQVU7QUFBQyxlQUFNLDJCQUFOO0FBQWtDLE9BQS9nQjtBQUFnaEJDLGVBQVMsRUFBQyxxQkFBVTtBQUFDLGVBQU0sZUFBTjtBQUFzQixPQUEzakI7QUFBNGpCQyxvQkFBYyxFQUFDLDBCQUFVO0FBQUMsZUFBTSxzQkFBTjtBQUE2QjtBQUFubkIsS0FBTjtBQUEybkIsR0FBcHFCLEdBQXNxQmYsQ0FBQyxDQUFDQyxNQUF4cUIsRUFBK3FCRCxDQUFDLENBQUNnQixPQUFqckI7QUFBeXJCLENBQS94QixFQUFEIiwiZmlsZSI6Ii4vbGlicy9zZWxlY3QyL2pzL2kxOG4vc3EuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgU2VsZWN0MiA0LjAuMTMgfCBodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgKi9cclxuXHJcbiFmdW5jdGlvbigpe2lmKGpRdWVyeSYmalF1ZXJ5LmZuJiZqUXVlcnkuZm4uc2VsZWN0MiYmalF1ZXJ5LmZuLnNlbGVjdDIuYW1kKXZhciBlPWpRdWVyeS5mbi5zZWxlY3QyLmFtZDtlLmRlZmluZShcInNlbGVjdDIvaTE4bi9zcVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJue2Vycm9yTG9hZGluZzpmdW5jdGlvbigpe3JldHVyblwiUmV6dWx0YXRldCBudWsgbXVuZCB0w6sgbmdhcmtvaGVzaGluLlwifSxpbnB1dFRvb0xvbmc6ZnVuY3Rpb24oZSl7dmFyIG49ZS5pbnB1dC5sZW5ndGgtZS5tYXhpbXVtLHQ9XCJUw6sgbHV0ZW0gZnNoaSBcIituK1wiIGthcmFrdGVyXCI7cmV0dXJuIDEhPW4mJih0Kz1cImVcIiksdH0saW5wdXRUb29TaG9ydDpmdW5jdGlvbihlKXtyZXR1cm5cIlTDqyBsdXRlbSBzaGtydWFqIFwiKyhlLm1pbmltdW0tZS5pbnB1dC5sZW5ndGgpK1wiIG9zZSBtw6sgc2h1bcOrIGthcmFrdGVyZVwifSxsb2FkaW5nTW9yZTpmdW5jdGlvbigpe3JldHVyblwiRHVrZSBuZ2Fya3VhciBtw6sgc2h1bcOrIHJlenVsdGF0ZeKAplwifSxtYXhpbXVtU2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7dmFyIG49XCJNdW5kIHTDqyB6Z2plZGjDq3NoIHZldMOrbSBcIitlLm1heGltdW0rXCIgZWxlbWVudFwiO3JldHVybiAxIT1lLm1heGltdW0mJihuKz1cImVcIiksbn0sbm9SZXN1bHRzOmZ1bmN0aW9uKCl7cmV0dXJuXCJOdWsgdSBnamV0IGFzbmrDqyByZXp1bHRhdFwifSxzZWFyY2hpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cIkR1a2Uga8Orcmt1YXLigKZcIn0scmVtb3ZlQWxsSXRlbXM6ZnVuY3Rpb24oKXtyZXR1cm5cIkhpcSB0w6sgZ2ppdGhhIHNlbmRldFwifX19KSxlLmRlZmluZSxlLnJlcXVpcmV9KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/sq.js\n");

/***/ })

/******/ })));