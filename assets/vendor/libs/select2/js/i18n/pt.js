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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/pt.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/pt.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/pt.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;\n  e.define(\"select2/i18n/pt\", [], function () {\n    return {\n      errorLoading: function errorLoading() {\n        return \"Os resultados não puderam ser carregados.\";\n      },\n      inputTooLong: function inputTooLong(e) {\n        var r = e.input.length - e.maximum,\n            n = \"Por favor apague \" + r + \" \";\n        return n += 1 != r ? \"caracteres\" : \"caractere\";\n      },\n      inputTooShort: function inputTooShort(e) {\n        return \"Introduza \" + (e.minimum - e.input.length) + \" ou mais caracteres\";\n      },\n      loadingMore: function loadingMore() {\n        return \"A carregar mais resultados…\";\n      },\n      maximumSelected: function maximumSelected(e) {\n        var r = \"Apenas pode seleccionar \" + e.maximum + \" \";\n        return r += 1 != e.maximum ? \"itens\" : \"item\";\n      },\n      noResults: function noResults() {\n        return \"Sem resultados\";\n      },\n      searching: function searching() {\n        return \"A procurar…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Remover todos os itens\";\n      }\n    };\n  }), e.define, e.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9wdC5qcz8xNzk2Il0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsImUiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJyIiwiaW5wdXQiLCJsZW5ndGgiLCJtYXhpbXVtIiwibiIsImlucHV0VG9vU2hvcnQiLCJtaW5pbXVtIiwibG9hZGluZ01vcmUiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJyZW1vdmVBbGxJdGVtcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsQ0FBQyxZQUFVO0FBQUMsTUFBR0EsTUFBTSxJQUFFQSxNQUFNLENBQUNDLEVBQWYsSUFBbUJELE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUE3QixJQUFzQ0YsTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQTNELEVBQStELElBQUlDLENBQUMsR0FBQ0osTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQXhCO0FBQTRCQyxHQUFDLENBQUNDLE1BQUYsQ0FBUyxpQkFBVCxFQUEyQixFQUEzQixFQUE4QixZQUFVO0FBQUMsV0FBTTtBQUFDQyxrQkFBWSxFQUFDLHdCQUFVO0FBQUMsZUFBTSwyQ0FBTjtBQUFrRCxPQUEzRTtBQUE0RUMsa0JBQVksRUFBQyxzQkFBU0gsQ0FBVCxFQUFXO0FBQUMsWUFBSUksQ0FBQyxHQUFDSixDQUFDLENBQUNLLEtBQUYsQ0FBUUMsTUFBUixHQUFlTixDQUFDLENBQUNPLE9BQXZCO0FBQUEsWUFBK0JDLENBQUMsR0FBQyxzQkFBb0JKLENBQXBCLEdBQXNCLEdBQXZEO0FBQTJELGVBQU9JLENBQUMsSUFBRSxLQUFHSixDQUFILEdBQUssWUFBTCxHQUFrQixXQUE1QjtBQUF3QyxPQUF4TTtBQUF5TUssbUJBQWEsRUFBQyx1QkFBU1QsQ0FBVCxFQUFXO0FBQUMsZUFBTSxnQkFBY0EsQ0FBQyxDQUFDVSxPQUFGLEdBQVVWLENBQUMsQ0FBQ0ssS0FBRixDQUFRQyxNQUFoQyxJQUF3QyxxQkFBOUM7QUFBb0UsT0FBdlM7QUFBd1NLLGlCQUFXLEVBQUMsdUJBQVU7QUFBQyxlQUFNLDZCQUFOO0FBQW9DLE9BQW5XO0FBQW9XQyxxQkFBZSxFQUFDLHlCQUFTWixDQUFULEVBQVc7QUFBQyxZQUFJSSxDQUFDLEdBQUMsNkJBQTJCSixDQUFDLENBQUNPLE9BQTdCLEdBQXFDLEdBQTNDO0FBQStDLGVBQU9ILENBQUMsSUFBRSxLQUFHSixDQUFDLENBQUNPLE9BQUwsR0FBYSxPQUFiLEdBQXFCLE1BQS9CO0FBQXNDLE9BQXJkO0FBQXNkTSxlQUFTLEVBQUMscUJBQVU7QUFBQyxlQUFNLGdCQUFOO0FBQXVCLE9BQWxnQjtBQUFtZ0JDLGVBQVMsRUFBQyxxQkFBVTtBQUFDLGVBQU0sYUFBTjtBQUFvQixPQUE1aUI7QUFBNmlCQyxvQkFBYyxFQUFDLDBCQUFVO0FBQUMsZUFBTSx3QkFBTjtBQUErQjtBQUF0bUIsS0FBTjtBQUE4bUIsR0FBdnBCLEdBQXlwQmYsQ0FBQyxDQUFDQyxNQUEzcEIsRUFBa3FCRCxDQUFDLENBQUNnQixPQUFwcUI7QUFBNHFCLENBQWx4QixFQUFEIiwiZmlsZSI6Ii4vbGlicy9zZWxlY3QyL2pzL2kxOG4vcHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgU2VsZWN0MiA0LjAuMTMgfCBodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgKi9cclxuXHJcbiFmdW5jdGlvbigpe2lmKGpRdWVyeSYmalF1ZXJ5LmZuJiZqUXVlcnkuZm4uc2VsZWN0MiYmalF1ZXJ5LmZuLnNlbGVjdDIuYW1kKXZhciBlPWpRdWVyeS5mbi5zZWxlY3QyLmFtZDtlLmRlZmluZShcInNlbGVjdDIvaTE4bi9wdFwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJue2Vycm9yTG9hZGluZzpmdW5jdGlvbigpe3JldHVyblwiT3MgcmVzdWx0YWRvcyBuw6NvIHB1ZGVyYW0gc2VyIGNhcnJlZ2Fkb3MuXCJ9LGlucHV0VG9vTG9uZzpmdW5jdGlvbihlKXt2YXIgcj1lLmlucHV0Lmxlbmd0aC1lLm1heGltdW0sbj1cIlBvciBmYXZvciBhcGFndWUgXCIrcitcIiBcIjtyZXR1cm4gbis9MSE9cj9cImNhcmFjdGVyZXNcIjpcImNhcmFjdGVyZVwifSxpbnB1dFRvb1Nob3J0OmZ1bmN0aW9uKGUpe3JldHVyblwiSW50cm9kdXphIFwiKyhlLm1pbmltdW0tZS5pbnB1dC5sZW5ndGgpK1wiIG91IG1haXMgY2FyYWN0ZXJlc1wifSxsb2FkaW5nTW9yZTpmdW5jdGlvbigpe3JldHVyblwiQSBjYXJyZWdhciBtYWlzIHJlc3VsdGFkb3PigKZcIn0sbWF4aW11bVNlbGVjdGVkOmZ1bmN0aW9uKGUpe3ZhciByPVwiQXBlbmFzIHBvZGUgc2VsZWNjaW9uYXIgXCIrZS5tYXhpbXVtK1wiIFwiO3JldHVybiByKz0xIT1lLm1heGltdW0/XCJpdGVuc1wiOlwiaXRlbVwifSxub1Jlc3VsdHM6ZnVuY3Rpb24oKXtyZXR1cm5cIlNlbSByZXN1bHRhZG9zXCJ9LHNlYXJjaGluZzpmdW5jdGlvbigpe3JldHVyblwiQSBwcm9jdXJhcuKAplwifSxyZW1vdmVBbGxJdGVtczpmdW5jdGlvbigpe3JldHVyblwiUmVtb3ZlciB0b2RvcyBvcyBpdGVuc1wifX19KSxlLmRlZmluZSxlLnJlcXVpcmV9KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/pt.js\n");

/***/ })

/******/ })));