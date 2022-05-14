module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/task/AllTask.js":
/*!************************************!*\
  !*** ./components/task/AllTask.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _task_SingleTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task/SingleTask */ "./components/task/SingleTask.js");
/* harmony import */ var _AllTask_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllTask.module.css */ "./components/task/AllTask.module.css");
/* harmony import */ var _AllTask_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AllTask_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\IT\\moje_projekty\\to-do_list\\components\\task\\AllTask.js";



const AllTask = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _AllTask_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["all-tasks"],
    children: props.tasks.map(task => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_task_SingleTask__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: task.id,
      title: task.title,
      priority: task.priority,
      start_date: task.start_date,
      complete: task.complete,
      description: task.description,
      onDeleteTask: props.onDeleteTask
    }, task.id, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AllTask);

/***/ }),

/***/ "./components/task/AllTask.module.css":
/*!********************************************!*\
  !*** ./components/task/AllTask.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"all-tasks": "AllTask_all-tasks__T4Rig"
};


/***/ }),

/***/ "./components/task/SingleTask.js":
/*!***************************************!*\
  !*** ./components/task/SingleTask.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SingleTask_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleTask.module.css */ "./components/task/SingleTask.module.css");
/* harmony import */ var _SingleTask_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleTask_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\IT\\moje_projekty\\to-do_list\\components\\task\\SingleTask.js";



const SingleTask = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const showDetailHandler = () => {
    router.push("/" + props.id);
  };

  function getStatusText(props) {
    if (props.priority == "low priority") {
      return "color1";
    } else if (props.priority == "medium priority") {
      return "color2";
    }

    return "color3";
  }

  function getComplete(props) {
    if (props.complete === true) {
      return "./check.png";
    }

    return "./work-in-progress.png";
  }

  function deleteTask() {
    const dataId = props.id;
    props.onDeleteTask(dataId);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _SingleTask_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SingleTask_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: getStatusText(props),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: props.priority
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SingleTask_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.status,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: getComplete(props),
        alt: "icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SingleTask_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: showDetailHandler,
        children: "Show Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SingleTask_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.delete,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        onClick: deleteTask,
        src: "/delete.png",
        alt: "delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SingleTask);

/***/ }),

/***/ "./components/task/SingleTask.module.css":
/*!***********************************************!*\
  !*** ./components/task/SingleTask.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"row": "SingleTask_row__3CGpn",
	"title": "SingleTask_title__2MP1O",
	"status": "SingleTask_status__2jRuV",
	"button": "SingleTask_button__1TLb4",
	"delete": "SingleTask_delete__2ouxF"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_task_AllTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/task/AllTask */ "./components/task/AllTask.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\IT\\moje_projekty\\to-do_list\\pages\\index.js";





function Home(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  async function deleteTaskHandler(enteredTaskData) {
    const response = await fetch("/api/helper", {
      method: "DELETE",
      body: JSON.stringify(enteredTaskData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    router.push("/");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [props.tasks.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_task_AllTask__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tasks: props.tasks,
      onDeleteTask: deleteTaskHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this), props.tasks.length === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "no-found",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "No found tasks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

async function getStaticProps() {
  const MONGODB = process.env.REACT_APP_MONGODB;
  let client;

  try {
    client = await mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect(MONGODB);
  } catch (error) {
    res.status(500).json({
      message: "Could not connect to database"
    });
    return;
  }

  const db = client.db();
  const taskCollection = db.collection("tasks");
  const tasks = await taskCollection.find().toArray();
  client.close();
  return {
    props: {
      tasks: tasks.map(task => ({
        title: task.title,
        priority: task.priority,
        start_date: task.start_date || null,
        complete: task.complete || null,
        id: task._id.toString()
      }))
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YXNrL0FsbFRhc2suanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YXNrL0FsbFRhc2subW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rhc2svU2luZ2xlVGFzay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rhc2svU2luZ2xlVGFzay5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQWxsVGFzayIsInByb3BzIiwiY2xhc3NlcyIsInRhc2tzIiwibWFwIiwidGFzayIsImlkIiwidGl0bGUiLCJwcmlvcml0eSIsInN0YXJ0X2RhdGUiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwib25EZWxldGVUYXNrIiwiU2luZ2xlVGFzayIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxIYW5kbGVyIiwicHVzaCIsImdldFN0YXR1c1RleHQiLCJnZXRDb21wbGV0ZSIsImRlbGV0ZVRhc2siLCJkYXRhSWQiLCJyb3ciLCJzdGF0dXMiLCJidXR0b24iLCJkZWxldGUiLCJIb21lIiwiZGVsZXRlVGFza0hhbmRsZXIiLCJlbnRlcmVkVGFza0RhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibGVuZ3RoIiwiZ2V0U3RhdGljUHJvcHMiLCJNT05HT0RCIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9NT05HT0RCIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZXJyb3IiLCJyZXMiLCJqc29uIiwibWVzc2FnZSIsImRiIiwidGFza0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJjbG9zZSIsIl9pZCIsInRvU3RyaW5nIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFJQyxLQUFELElBQVc7QUFFekIsc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLDBEQUFPLENBQUMsV0FBRCxDQUF0QjtBQUFBLGNBQ0dELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxHQUFaLENBQWlCQyxJQUFELGlCQUNmLHFFQUFDLHdEQUFEO0FBRUUsUUFBRSxFQUFFQSxJQUFJLENBQUNDLEVBRlg7QUFHRSxXQUFLLEVBQUVE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LE9BRGEsQ0FBZjtBQUdELEdBSkQsQ0FJRSxPQUFPTyxLQUFQLEVBQWM7QUFDZEMsT0FBRyxDQUFDdkIsTUFBSixDQUFXLEdBQVgsRUFBZ0J3QixJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBTUMsRUFBRSxHQUFHUCxNQUFNLENBQUNPLEVBQVAsRUFBWDtBQUVBLFFBQU1DLGNBQWMsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsT0FBZCxDQUF2QjtBQUNBLFFBQU1oRCxLQUFLLEdBQUcsTUFBTStDLGNBQWMsQ0FBQ0UsSUFBZixHQUFzQkMsT0FBdEIsRUFBcEI7QUFFQVgsUUFBTSxDQUFDWSxLQUFQO0FBRUEsU0FBTztBQUNMckQsU0FBSyxFQUFFO0FBQ0xFLFdBQUssRUFBRUEsS0FBSyxDQUFDQyxHQUFOLENBQVdDLElBQUQsS0FBVztBQUMxQkUsYUFBSyxFQUFFRixJQUFJLENBQUNFLEtBRGM7QUFFMUJDLGdCQUFRLEVBQUVILElBQUksQ0FBQ0csUUFGVztBQUcxQkMsa0JBQVUsRUFBRUosSUFBSSxDQUFDSSxVQUFMLElBQW1CLElBSEw7QUFJMUJDLGdCQUFRLEVBQUVMLElBQUksQ0FBQ0ssUUFBTCxJQUFpQixJQUpEO0FBSzFCSixVQUFFLEVBQUVELElBQUksQ0FBQ2tELEdBQUwsQ0FBU0MsUUFBVDtBQUxzQixPQUFYLENBQVY7QUFERixLQURGO0FBVUxDLGNBQVUsRUFBRTtBQVZQLEdBQVA7QUFZRDtBQUNjL0IsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNwRUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNpbmdsZVRhc2sgZnJvbSBcIi4uL3Rhc2svU2luZ2xlVGFza1wiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9BbGxUYXNrLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEFsbFRhc2sgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXNbXCJhbGwtdGFza3NcIl19PlxyXG4gICAgICB7cHJvcHMudGFza3MubWFwKCh0YXNrKSA9PiAoXHJcbiAgICAgICAgPFNpbmdsZVRhc2tcclxuICAgICAgICAgIGtleT17dGFzay5pZH1cclxuICAgICAgICAgIGlkPXt0YXNrLmlkfVxyXG4gICAgICAgICAgdGl0bGU9e3Rhc2sudGl0bGV9XHJcbiAgICAgICAgICBwcmlvcml0eT17dGFzay5wcmlvcml0eX1cclxuICAgICAgICAgIHN0YXJ0X2RhdGU9e3Rhc2suc3RhcnRfZGF0ZX1cclxuICAgICAgICAgIGNvbXBsZXRlPXt0YXNrLmNvbXBsZXRlfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Rhc2suZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkRlbGV0ZVRhc2s9e3Byb3BzLm9uRGVsZXRlVGFza31cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWxsVGFzaztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWxsLXRhc2tzXCI6IFwiQWxsVGFza19hbGwtdGFza3NfX1Q0UmlnXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vU2luZ2xlVGFzay5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBTaW5nbGVUYXNrID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHNob3dEZXRhaWxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIgKyBwcm9wcy5pZCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0U3RhdHVzVGV4dChwcm9wcykge1xyXG4gICAgaWYgKHByb3BzLnByaW9yaXR5ID09IFwibG93IHByaW9yaXR5XCIpIHtcclxuICAgICAgcmV0dXJuIFwiY29sb3IxXCI7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnByaW9yaXR5ID09IFwibWVkaXVtIHByaW9yaXR5XCIpIHtcclxuICAgICAgcmV0dXJuIFwiY29sb3IyXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJjb2xvcjNcIjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldENvbXBsZXRlKHByb3BzKSB7XHJcbiAgICBpZiAocHJvcHMuY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIFwiLi9jaGVjay5wbmdcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcIi4vd29yay1pbi1wcm9ncmVzcy5wbmdcIjtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVUYXNrKCkge1xyXG4gICAgY29uc3QgZGF0YUlkID0gcHJvcHMuaWQ7XHJcblxyXG4gICAgcHJvcHMub25EZWxldGVUYXNrKGRhdGFJZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dldFN0YXR1c1RleHQocHJvcHMpfT5cclxuICAgICAgICA8aDM+e3Byb3BzLnByaW9yaXR5fTwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGF0dXN9PlxyXG4gICAgICAgIDxpbWcgc3JjPXtnZXRDb21wbGV0ZShwcm9wcyl9IGFsdD1cImljb25cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dEZXRhaWxIYW5kbGVyfT5TaG93IERldGFpbHM8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZX0+XHJcbiAgICAgICAgPGltZyBvbkNsaWNrPXtkZWxldGVUYXNrfSBzcmM9XCIvZGVsZXRlLnBuZ1wiIGFsdD1cImRlbGV0ZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlVGFzaztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicm93XCI6IFwiU2luZ2xlVGFza19yb3dfXzNDR3BuXCIsXG5cdFwidGl0bGVcIjogXCJTaW5nbGVUYXNrX3RpdGxlX18yTVAxT1wiLFxuXHRcInN0YXR1c1wiOiBcIlNpbmdsZVRhc2tfc3RhdHVzX18yalJ1VlwiLFxuXHRcImJ1dHRvblwiOiBcIlNpbmdsZVRhc2tfYnV0dG9uX18xVExiNFwiLFxuXHRcImRlbGV0ZVwiOiBcIlNpbmdsZVRhc2tfZGVsZXRlX18yb3V4RlwiXG59O1xuIiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbGxUYXNrIGZyb20gXCIuLi9jb21wb25lbnRzL3Rhc2svQWxsVGFza1wiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGFza0hhbmRsZXIoZW50ZXJlZFRhc2tEYXRhKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvaGVscGVyXCIsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRUYXNrRGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge3Byb3BzLnRhc2tzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8QWxsVGFzayB0YXNrcz17cHJvcHMudGFza3N9IG9uRGVsZXRlVGFzaz17ZGVsZXRlVGFza0hhbmRsZXJ9IC8+XG4gICAgICApfVxuICAgICAge3Byb3BzLnRhc2tzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tZm91bmRcIj5cbiAgICAgICAgICA8aDI+Tm8gZm91bmQgdGFza3M8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXG4gIGNvbnN0IE1PTkdPREIgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfTU9OR09EQlxuXG4gIGxldCBjbGllbnQ7XG5cbiAgdHJ5IHtcbiAgICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgTU9OR09EQlxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkNvdWxkIG5vdCBjb25uZWN0IHRvIGRhdGFiYXNlXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgdGFza0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwidGFza3NcIik7XG4gIGNvbnN0IHRhc2tzID0gYXdhaXQgdGFza0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0YXNrczogdGFza3MubWFwKCh0YXNrKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGFzay50aXRsZSxcbiAgICAgICAgcHJpb3JpdHk6IHRhc2sucHJpb3JpdHksXG4gICAgICAgIHN0YXJ0X2RhdGU6IHRhc2suc3RhcnRfZGF0ZSB8fCBudWxsLFxuICAgICAgICBjb21wbGV0ZTogdGFzay5jb21wbGV0ZSB8fCBudWxsLFxuICAgICAgICBpZDogdGFzay5faWQudG9TdHJpbmcoKSxcbiAgICAgIH0pKSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==