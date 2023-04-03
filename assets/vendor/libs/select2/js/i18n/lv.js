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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/select2/js/i18n/lv.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/select2/js/i18n/lv.js":
/*!************************************!*\
  !*** ./libs/select2/js/i18n/lv.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */\n!function () {\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;\n  e.define(\"select2/i18n/lv\", [], function () {\n    function e(e, n, u, i) {\n      return 11 === e ? n : e % 10 == 1 ? u : i;\n    }\n\n    return {\n      inputTooLong: function inputTooLong(n) {\n        var u = n.input.length - n.maximum,\n            i = \"Lūdzu ievadiet par  \" + u;\n        return (i += \" simbol\" + e(u, \"iem\", \"u\", \"iem\")) + \" mazāk\";\n      },\n      inputTooShort: function inputTooShort(n) {\n        var u = n.minimum - n.input.length,\n            i = \"Lūdzu ievadiet vēl \" + u;\n        return i += \" simbol\" + e(u, \"us\", \"u\", \"us\");\n      },\n      loadingMore: function loadingMore() {\n        return \"Datu ielāde…\";\n      },\n      maximumSelected: function maximumSelected(n) {\n        var u = \"Jūs varat izvēlēties ne vairāk kā \" + n.maximum;\n        return u += \" element\" + e(n.maximum, \"us\", \"u\", \"us\");\n      },\n      noResults: function noResults() {\n        return \"Sakritību nav\";\n      },\n      searching: function searching() {\n        return \"Meklēšana…\";\n      },\n      removeAllItems: function removeAllItems() {\n        return \"Noņemt visus vienumus\";\n      }\n    };\n  }), e.define, e.require;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL3NlbGVjdDIvanMvaTE4bi9sdi5qcz8yMjBkIl0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwic2VsZWN0MiIsImFtZCIsImUiLCJkZWZpbmUiLCJuIiwidSIsImkiLCJpbnB1dFRvb0xvbmciLCJpbnB1dCIsImxlbmd0aCIsIm1heGltdW0iLCJpbnB1dFRvb1Nob3J0IiwibWluaW11bSIsImxvYWRpbmdNb3JlIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwicmVtb3ZlQWxsSXRlbXMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLENBQUMsWUFBVTtBQUFDLE1BQUdBLE1BQU0sSUFBRUEsTUFBTSxDQUFDQyxFQUFmLElBQW1CRCxNQUFNLENBQUNDLEVBQVAsQ0FBVUMsT0FBN0IsSUFBc0NGLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUEzRCxFQUErRCxJQUFJQyxDQUFDLEdBQUNKLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxPQUFWLENBQWtCQyxHQUF4QjtBQUE0QkMsR0FBQyxDQUFDQyxNQUFGLENBQVMsaUJBQVQsRUFBMkIsRUFBM0IsRUFBOEIsWUFBVTtBQUFDLGFBQVNELENBQVQsQ0FBV0EsQ0FBWCxFQUFhRSxDQUFiLEVBQWVDLENBQWYsRUFBaUJDLENBQWpCLEVBQW1CO0FBQUMsYUFBTyxPQUFLSixDQUFMLEdBQU9FLENBQVAsR0FBU0YsQ0FBQyxHQUFDLEVBQUYsSUFBTSxDQUFOLEdBQVFHLENBQVIsR0FBVUMsQ0FBMUI7QUFBNEI7O0FBQUEsV0FBTTtBQUFDQyxrQkFBWSxFQUFDLHNCQUFTSCxDQUFULEVBQVc7QUFBQyxZQUFJQyxDQUFDLEdBQUNELENBQUMsQ0FBQ0ksS0FBRixDQUFRQyxNQUFSLEdBQWVMLENBQUMsQ0FBQ00sT0FBdkI7QUFBQSxZQUErQkosQ0FBQyxHQUFDLHlCQUF1QkQsQ0FBeEQ7QUFBMEQsZUFBTSxDQUFDQyxDQUFDLElBQUUsWUFBVUosQ0FBQyxDQUFDRyxDQUFELEVBQUcsS0FBSCxFQUFTLEdBQVQsRUFBYSxLQUFiLENBQWYsSUFBb0MsUUFBMUM7QUFBbUQsT0FBdkk7QUFBd0lNLG1CQUFhLEVBQUMsdUJBQVNQLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDUSxPQUFGLEdBQVVSLENBQUMsQ0FBQ0ksS0FBRixDQUFRQyxNQUF4QjtBQUFBLFlBQStCSCxDQUFDLEdBQUMsd0JBQXNCRCxDQUF2RDtBQUF5RCxlQUFPQyxDQUFDLElBQUUsWUFBVUosQ0FBQyxDQUFDRyxDQUFELEVBQUcsSUFBSCxFQUFRLEdBQVIsRUFBWSxJQUFaLENBQXJCO0FBQXVDLE9BQWxRO0FBQW1RUSxpQkFBVyxFQUFDLHVCQUFVO0FBQUMsZUFBTSxjQUFOO0FBQXFCLE9BQS9TO0FBQWdUQyxxQkFBZSxFQUFDLHlCQUFTVixDQUFULEVBQVc7QUFBQyxZQUFJQyxDQUFDLEdBQUMsdUNBQXFDRCxDQUFDLENBQUNNLE9BQTdDO0FBQXFELGVBQU9MLENBQUMsSUFBRSxhQUFXSCxDQUFDLENBQUNFLENBQUMsQ0FBQ00sT0FBSCxFQUFXLElBQVgsRUFBZ0IsR0FBaEIsRUFBb0IsSUFBcEIsQ0FBdEI7QUFBZ0QsT0FBamI7QUFBa2JLLGVBQVMsRUFBQyxxQkFBVTtBQUFDLGVBQU0sZUFBTjtBQUFzQixPQUE3ZDtBQUE4ZEMsZUFBUyxFQUFDLHFCQUFVO0FBQUMsZUFBTSxZQUFOO0FBQW1CLE9BQXRnQjtBQUF1Z0JDLG9CQUFjLEVBQUMsMEJBQVU7QUFBQyxlQUFNLHVCQUFOO0FBQThCO0FBQS9qQixLQUFOO0FBQXVrQixHQUFocUIsR0FBa3FCZixDQUFDLENBQUNDLE1BQXBxQixFQUEycUJELENBQUMsQ0FBQ2dCLE9BQTdxQjtBQUFxckIsQ0FBM3hCLEVBQUQiLCJmaWxlIjoiLi9saWJzL3NlbGVjdDIvanMvaTE4bi9sdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBTZWxlY3QyIDQuMC4xMyB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCAqL1xyXG5cclxuIWZ1bmN0aW9uKCl7aWYoalF1ZXJ5JiZqUXVlcnkuZm4mJmpRdWVyeS5mbi5zZWxlY3QyJiZqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpdmFyIGU9alF1ZXJ5LmZuLnNlbGVjdDIuYW1kO2UuZGVmaW5lKFwic2VsZWN0Mi9pMThuL2x2XCIsW10sZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsbix1LGkpe3JldHVybiAxMT09PWU/bjplJTEwPT0xP3U6aX1yZXR1cm57aW5wdXRUb29Mb25nOmZ1bmN0aW9uKG4pe3ZhciB1PW4uaW5wdXQubGVuZ3RoLW4ubWF4aW11bSxpPVwiTMWrZHp1IGlldmFkaWV0IHBhciAgXCIrdTtyZXR1cm4oaSs9XCIgc2ltYm9sXCIrZSh1LFwiaWVtXCIsXCJ1XCIsXCJpZW1cIikpK1wiIG1hesSBa1wifSxpbnB1dFRvb1Nob3J0OmZ1bmN0aW9uKG4pe3ZhciB1PW4ubWluaW11bS1uLmlucHV0Lmxlbmd0aCxpPVwiTMWrZHp1IGlldmFkaWV0IHbEk2wgXCIrdTtyZXR1cm4gaSs9XCIgc2ltYm9sXCIrZSh1LFwidXNcIixcInVcIixcInVzXCIpfSxsb2FkaW5nTW9yZTpmdW5jdGlvbigpe3JldHVyblwiRGF0dSBpZWzEgWRl4oCmXCJ9LG1heGltdW1TZWxlY3RlZDpmdW5jdGlvbihuKXt2YXIgdT1cIkrFq3MgdmFyYXQgaXp2xJNsxJN0aWVzIG5lIHZhaXLEgWsga8SBIFwiK24ubWF4aW11bTtyZXR1cm4gdSs9XCIgZWxlbWVudFwiK2Uobi5tYXhpbXVtLFwidXNcIixcInVcIixcInVzXCIpfSxub1Jlc3VsdHM6ZnVuY3Rpb24oKXtyZXR1cm5cIlNha3JpdMSrYnUgbmF2XCJ9LHNlYXJjaGluZzpmdW5jdGlvbigpe3JldHVyblwiTWVrbMSTxaFhbmHigKZcIn0scmVtb3ZlQWxsSXRlbXM6ZnVuY3Rpb24oKXtyZXR1cm5cIk5vxYZlbXQgdmlzdXMgdmllbnVtdXNcIn19fSksZS5kZWZpbmUsZS5yZXF1aXJlfSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/select2/js/i18n/lv.js\n");

/***/ })

/******/ })));