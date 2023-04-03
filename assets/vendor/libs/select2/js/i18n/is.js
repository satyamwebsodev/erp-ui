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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/is.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/is.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/is.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;\n  n.define(\"select2/i18n/is\", [], function () {\n    return {\n      inputTooLong: function inputTooLong(n) {\n        var t = n.input.length - n.maximum,\n            e = \"Vinsamlegast styttið texta um \" + t + \" staf\";\n        return t <= 1 ? e : e + \"i\";\n      },\n      inputTooShort: function inputTooShort(n) {\n        var t = n.minimum - n.input.length,\n            e = \"Vinsamlegast skrifið \" + t + \" staf\";\n        return t > 1 && (e += \"i\"), e += \" í viðbót\";\n      },\n      loadingMore: function loadingMore() {\n        return \"Sæki fleiri niðurstöður…\";\n      },\n      maximumSelected: function maximumSelected(n) {\n        return \"Þú getur aðeins valið \" + n.maximum + \" atriði\";\n      },\n      noResults: function noResults() {\n        return \"Ekkert fannst\";\n      },\n      searching: function searching() {\n        return \"Leita…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Fjarlægðu öll atriði\";\n      }\n    };\n  }), n.define, n.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9pcy5qcz9hMDE2Il0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsIm4iLCJkZWZpbmUiLCJpbnB1dFRvb0xvbmciLCJ0IiwiaW5wdXQiLCJsZW5ndGgiLCJtYXhpbXVtIiwiZSIsImlucHV0VG9vU2hvcnQiLCJtaW5pbXVtIiwibG9hZGluZ01vcmUiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJyZW1vdmVBbGxJdGVtcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsQ0FBQyxZQUFVO0FBQUMsTUFBR0EsTUFBTSxJQUFFQSxNQUFNLENBQUNDLEVBQWYsSUFBbUJELE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUE3QixJQUFzQ0YsTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQTNELEVBQStELElBQUlDLENBQUMsR0FBQ0osTUFBTSxDQUFDQyxFQUFQLENBQVVDLE9BQVYsQ0FBa0JDLEdBQXhCO0FBQTRCQyxHQUFDLENBQUNDLE1BQUYsQ0FBUyxpQkFBVCxFQUEyQixFQUEzQixFQUE4QixZQUFVO0FBQUMsV0FBTTtBQUFDQyxrQkFBWSxFQUFDLHNCQUFTRixDQUFULEVBQVc7QUFBQyxZQUFJRyxDQUFDLEdBQUNILENBQUMsQ0FBQ0ksS0FBRixDQUFRQyxNQUFSLEdBQWVMLENBQUMsQ0FBQ00sT0FBdkI7QUFBQSxZQUErQkMsQ0FBQyxHQUFDLG1DQUFpQ0osQ0FBakMsR0FBbUMsT0FBcEU7QUFBNEUsZUFBT0EsQ0FBQyxJQUFFLENBQUgsR0FBS0ksQ0FBTCxHQUFPQSxDQUFDLEdBQUMsR0FBaEI7QUFBb0IsT0FBMUg7QUFBMkhDLG1CQUFhLEVBQUMsdUJBQVNSLENBQVQsRUFBVztBQUFDLFlBQUlHLENBQUMsR0FBQ0gsQ0FBQyxDQUFDUyxPQUFGLEdBQVVULENBQUMsQ0FBQ0ksS0FBRixDQUFRQyxNQUF4QjtBQUFBLFlBQStCRSxDQUFDLEdBQUMsMEJBQXdCSixDQUF4QixHQUEwQixPQUEzRDtBQUFtRSxlQUFPQSxDQUFDLEdBQUMsQ0FBRixLQUFNSSxDQUFDLElBQUUsR0FBVCxHQUFjQSxDQUFDLElBQUUsV0FBeEI7QUFBb0MsT0FBNVA7QUFBNlBHLGlCQUFXLEVBQUMsdUJBQVU7QUFBQyxlQUFNLDBCQUFOO0FBQWlDLE9BQXJUO0FBQXNUQyxxQkFBZSxFQUFDLHlCQUFTWCxDQUFULEVBQVc7QUFBQyxlQUFNLDJCQUF5QkEsQ0FBQyxDQUFDTSxPQUEzQixHQUFtQyxTQUF6QztBQUFtRCxPQUFyWTtBQUFzWU0sZUFBUyxFQUFDLHFCQUFVO0FBQUMsZUFBTSxlQUFOO0FBQXNCLE9BQWpiO0FBQWtiQyxlQUFTLEVBQUMscUJBQVU7QUFBQyxlQUFNLFFBQU47QUFBZSxPQUF0ZDtBQUF1ZEMsb0JBQWMsRUFBQywwQkFBVTtBQUFDLGVBQU0sc0JBQU47QUFBNkI7QUFBOWdCLEtBQU47QUFBc2hCLEdBQS9qQixHQUFpa0JkLENBQUMsQ0FBQ0MsTUFBbmtCLEVBQTBrQkQsQ0FBQyxDQUFDZSxPQUE1a0I7QUFBb2xCLENBQTFyQixFQUFEIiwiZmlsZSI6Ii4vbGlicy9zZWxlY3QyL2pzL2kxOG4vaXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgU2VsZWN0MiA0LjAuMTMgfCBodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgKi9cclxuXHJcbiFmdW5jdGlvbigpe2lmKGpRdWVyeSYmalF1ZXJ5LmZuJiZqUXVlcnkuZm4uc2VsZWN0MiYmalF1ZXJ5LmZuLnNlbGVjdDIuYW1kKXZhciBuPWpRdWVyeS5mbi5zZWxlY3QyLmFtZDtuLmRlZmluZShcInNlbGVjdDIvaTE4bi9pc1wiLFtdLGZ1bmN0aW9uKCl7cmV0dXJue2lucHV0VG9vTG9uZzpmdW5jdGlvbihuKXt2YXIgdD1uLmlucHV0Lmxlbmd0aC1uLm1heGltdW0sZT1cIlZpbnNhbWxlZ2FzdCBzdHl0dGnDsCB0ZXh0YSB1bSBcIit0K1wiIHN0YWZcIjtyZXR1cm4gdDw9MT9lOmUrXCJpXCJ9LGlucHV0VG9vU2hvcnQ6ZnVuY3Rpb24obil7dmFyIHQ9bi5taW5pbXVtLW4uaW5wdXQubGVuZ3RoLGU9XCJWaW5zYW1sZWdhc3Qgc2tyaWZpw7AgXCIrdCtcIiBzdGFmXCI7cmV0dXJuIHQ+MSYmKGUrPVwiaVwiKSxlKz1cIiDDrSB2acOwYsOzdFwifSxsb2FkaW5nTW9yZTpmdW5jdGlvbigpe3JldHVyblwiU8Oma2kgZmxlaXJpIG5pw7B1cnN0w7bDsHVy4oCmXCJ9LG1heGltdW1TZWxlY3RlZDpmdW5jdGlvbihuKXtyZXR1cm5cIsOew7ogZ2V0dXIgYcOwZWlucyB2YWxpw7AgXCIrbi5tYXhpbXVtK1wiIGF0cmnDsGlcIn0sbm9SZXN1bHRzOmZ1bmN0aW9uKCl7cmV0dXJuXCJFa2tlcnQgZmFubnN0XCJ9LHNlYXJjaGluZzpmdW5jdGlvbigpe3JldHVyblwiTGVpdGHigKZcIn0scmVtb3ZlQWxsSXRlbXM6ZnVuY3Rpb24oKXtyZXR1cm5cIkZqYXJsw6Znw7B1IMO2bGwgYXRyacOwaVwifX19KSxuLmRlZmluZSxuLnJlcXVpcmV9KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/is.js\n");

/***/ })

/******/ })));