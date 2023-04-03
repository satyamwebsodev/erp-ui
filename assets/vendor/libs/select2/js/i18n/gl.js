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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/gl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/gl.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/gl.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;\n  e.define(\"select2/i18n/gl\", [], function () {\n    return {\n      errorLoading: function errorLoading() {\n        return \"Non foi posíbel cargar os resultados.\";\n      },\n      inputTooLong: function inputTooLong(e) {\n        var n = e.input.length - e.maximum;\n        return 1 === n ? \"Elimine un carácter\" : \"Elimine \" + n + \" caracteres\";\n      },\n      inputTooShort: function inputTooShort(e) {\n        var n = e.minimum - e.input.length;\n        return 1 === n ? \"Engada un carácter\" : \"Engada \" + n + \" caracteres\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Cargando máis resultados…\";\n      },\n      maximumSelected: function maximumSelected(e) {\n        return 1 === e.maximum ? \"Só pode seleccionar un elemento\" : \"Só pode seleccionar \" + e.maximum + \" elementos\";\n      },\n      noResults: function noResults() {\n        return \"Non se atoparon resultados\";\n      },\n      searching: function searching() {\n        return \"Buscando…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Elimina todos os elementos\";\n      }\n    };\n  }), e.define, e.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9nbC5qcz9iYWZkIl0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsImUiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJuIiwiaW5wdXQiLCJsZW5ndGgiLCJtYXhpbXVtIiwiaW5wdXRUb29TaG9ydCIsIm1pbmltdW0iLCJsb2FkaW5nTW9yZSIsIm1heGltdW1TZWxlY3RlZCIsIm5vUmVzdWx0cyIsInNlYXJjaGluZyIsInJlbW92ZUFsbEl0ZW1zIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxDQUFDLFlBQVU7QUFBQyxNQUFHQSxNQUFNLElBQUVBLE1BQU0sQ0FBQ0MsRUFBZixJQUFtQkQsTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQTdCLElBQXNDRixNQUFNLENBQUNDLEVBQVAsQ0FBVUMsT0FBVixDQUFrQkMsR0FBM0QsRUFBK0QsSUFBSUMsQ0FBQyxHQUFDSixNQUFNLENBQUNDLEVBQVAsQ0FBVUMsT0FBVixDQUFrQkMsR0FBeEI7QUFBNEJDLEdBQUMsQ0FBQ0MsTUFBRixDQUFTLGlCQUFULEVBQTJCLEVBQTNCLEVBQThCLFlBQVU7QUFBQyxXQUFNO0FBQUNDLGtCQUFZLEVBQUMsd0JBQVU7QUFBQyxlQUFNLHVDQUFOO0FBQThDLE9BQXZFO0FBQXdFQyxrQkFBWSxFQUFDLHNCQUFTSCxDQUFULEVBQVc7QUFBQyxZQUFJSSxDQUFDLEdBQUNKLENBQUMsQ0FBQ0ssS0FBRixDQUFRQyxNQUFSLEdBQWVOLENBQUMsQ0FBQ08sT0FBdkI7QUFBK0IsZUFBTyxNQUFJSCxDQUFKLEdBQU0scUJBQU4sR0FBNEIsYUFBV0EsQ0FBWCxHQUFhLGFBQWhEO0FBQThELE9BQTlMO0FBQStMSSxtQkFBYSxFQUFDLHVCQUFTUixDQUFULEVBQVc7QUFBQyxZQUFJSSxDQUFDLEdBQUNKLENBQUMsQ0FBQ1MsT0FBRixHQUFVVCxDQUFDLENBQUNLLEtBQUYsQ0FBUUMsTUFBeEI7QUFBK0IsZUFBTyxNQUFJRixDQUFKLEdBQU0sb0JBQU4sR0FBMkIsWUFBVUEsQ0FBVixHQUFZLGFBQTlDO0FBQTRELE9BQXBUO0FBQXFUTSxpQkFBVyxFQUFDLHVCQUFVO0FBQUMsZUFBTSwyQkFBTjtBQUFrQyxPQUE5VztBQUErV0MscUJBQWUsRUFBQyx5QkFBU1gsQ0FBVCxFQUFXO0FBQUMsZUFBTyxNQUFJQSxDQUFDLENBQUNPLE9BQU4sR0FBYyxpQ0FBZCxHQUFnRCx5QkFBdUJQLENBQUMsQ0FBQ08sT0FBekIsR0FBaUMsWUFBeEY7QUFBcUcsT0FBaGY7QUFBaWZLLGVBQVMsRUFBQyxxQkFBVTtBQUFDLGVBQU0sNEJBQU47QUFBbUMsT0FBemlCO0FBQTBpQkMsZUFBUyxFQUFDLHFCQUFVO0FBQUMsZUFBTSxXQUFOO0FBQWtCLE9BQWpsQjtBQUFrbEJDLG9CQUFjLEVBQUMsMEJBQVU7QUFBQyxlQUFNLDRCQUFOO0FBQW1DO0FBQS9vQixLQUFOO0FBQXVwQixHQUFoc0IsR0FBa3NCZCxDQUFDLENBQUNDLE1BQXBzQixFQUEyc0JELENBQUMsQ0FBQ2UsT0FBN3NCO0FBQXF0QixDQUEzekIsRUFBRCIsImZpbGUiOiIuL2xpYnMvc2VsZWN0Mi9qcy9pMThuL2dsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIFNlbGVjdDIgNC4wLjEzIHwgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9ibG9iL21hc3Rlci9MSUNFTlNFLm1kICovXHJcblxyXG4hZnVuY3Rpb24oKXtpZihqUXVlcnkmJmpRdWVyeS5mbiYmalF1ZXJ5LmZuLnNlbGVjdDImJmpRdWVyeS5mbi5zZWxlY3QyLmFtZCl2YXIgZT1qUXVlcnkuZm4uc2VsZWN0Mi5hbWQ7ZS5kZWZpbmUoXCJzZWxlY3QyL2kxOG4vZ2xcIixbXSxmdW5jdGlvbigpe3JldHVybntlcnJvckxvYWRpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cIk5vbiBmb2kgcG9zw61iZWwgY2FyZ2FyIG9zIHJlc3VsdGFkb3MuXCJ9LGlucHV0VG9vTG9uZzpmdW5jdGlvbihlKXt2YXIgbj1lLmlucHV0Lmxlbmd0aC1lLm1heGltdW07cmV0dXJuIDE9PT1uP1wiRWxpbWluZSB1biBjYXLDoWN0ZXJcIjpcIkVsaW1pbmUgXCIrbitcIiBjYXJhY3RlcmVzXCJ9LGlucHV0VG9vU2hvcnQ6ZnVuY3Rpb24oZSl7dmFyIG49ZS5taW5pbXVtLWUuaW5wdXQubGVuZ3RoO3JldHVybiAxPT09bj9cIkVuZ2FkYSB1biBjYXLDoWN0ZXJcIjpcIkVuZ2FkYSBcIituK1wiIGNhcmFjdGVyZXNcIn0sbG9hZGluZ01vcmU6ZnVuY3Rpb24oKXtyZXR1cm5cIkNhcmdhbmRvIG3DoWlzIHJlc3VsdGFkb3PigKZcIn0sbWF4aW11bVNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5tYXhpbXVtP1wiU8OzIHBvZGUgc2VsZWNjaW9uYXIgdW4gZWxlbWVudG9cIjpcIlPDsyBwb2RlIHNlbGVjY2lvbmFyIFwiK2UubWF4aW11bStcIiBlbGVtZW50b3NcIn0sbm9SZXN1bHRzOmZ1bmN0aW9uKCl7cmV0dXJuXCJOb24gc2UgYXRvcGFyb24gcmVzdWx0YWRvc1wifSxzZWFyY2hpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cIkJ1c2NhbmRv4oCmXCJ9LHJlbW92ZUFsbEl0ZW1zOmZ1bmN0aW9uKCl7cmV0dXJuXCJFbGltaW5hIHRvZG9zIG9zIGVsZW1lbnRvc1wifX19KSxlLmRlZmluZSxlLnJlcXVpcmV9KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/gl.js\n");

/***/ })

/******/ })));