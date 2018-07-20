(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./client/components/GraphicsGallery/GraphicsGallery.js":
/*!**************************************************************!*\
  !*** ./client/components/GraphicsGallery/GraphicsGallery.js ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _templateObject = _taggedTemplateLiteral([''], ['']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _graphicsManifest = __webpack_require__(/*! ../../graphics/graphicsManifest */ \"./client/graphics/graphicsManifest.js\");\n\nvar Graphics = _interopRequireWildcard(_graphicsManifest);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar GraphicWrapper = _styledComponents2.default.div.attrs({\n  className: \"w-50-l w-100 pa0 mb4 pl3 pr3 border\"\n})(_templateObject);\n\n// Graphic can accept props or an individual key\n// Possibly a confusing way to handle these two cases?\nvar Graphic = function Graphic(props) {\n  var key, padding;\n\n  if (props.hasOwnProperty(\"match\")) {\n    key = props.match.params.graphic;\n    padding = \"w-100 mw7 cf center pt6\";\n  } else {\n    key = props;\n  }\n\n  var Component = Graphics[key];\n\n  if (!Component) {\n    return _react2.default.createElement(\n      'div',\n      { className: 'w-100 mw7 cf center pt6' },\n      'Sorry! We can\\'t seem to find that graphic. Back to the ',\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/graphics' },\n        'full list'\n      ),\n      '.'\n    );\n  }\n\n  return _react2.default.createElement(\n    GraphicWrapper,\n    { key: key, className: padding },\n    !props.hasOwnProperty(\"match\") ? _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: \"/graphics/\" + key },\n        'Standalone graphic'\n      ),\n      _react2.default.createElement(Component, null)\n    ) : _react2.default.createElement(\n      'div',\n      null,\n      'Back to the ',\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/graphics' },\n        'full list'\n      ),\n      '.',\n      _react2.default.createElement(Component, null)\n    )\n  );\n};\n\nvar Gallery = function Gallery() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'w-100 mw7 cf center pt6' },\n    _react2.default.createElement(\n      'div',\n      { className: 'flex flex-wrap items-center' },\n      Object.keys(Graphics).map(function (key) {\n        return Graphic(key);\n      })\n    )\n  );\n};\n\nvar GraphicsGallery = function (_React$Component) {\n  _inherits(GraphicsGallery, _React$Component);\n\n  function GraphicsGallery() {\n    _classCallCheck(this, GraphicsGallery);\n\n    return _possibleConstructorReturn(this, (GraphicsGallery.__proto__ || Object.getPrototypeOf(GraphicsGallery)).apply(this, arguments));\n  }\n\n  _createClass(GraphicsGallery, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/graphics', component: Gallery }),\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/graphics/:graphic', component: Graphic })\n      );\n    }\n  }]);\n\n  return GraphicsGallery;\n}(_react2.default.Component);\n\nexports.default = GraphicsGallery;\n\n//# sourceURL=webpack:///./client/components/GraphicsGallery/GraphicsGallery.js?");

/***/ }),

/***/ "./client/graphics/graphicsManifest.js":
/*!*********************************************!*\
  !*** ./client/graphics/graphicsManifest.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.TestNotebook = exports.WavesCrossSection = exports.EntanglementKnots = exports.SimpleGSAP = exports.TestAnimation = exports.KickedRotor = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _Loading = __webpack_require__(/*! ../components/Loading/Loading */ \"./client/components/Loading/Loading.js\");\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KickedRotor = (0, _reactLoadable2.default)({\n\tloader: function loader() {\n\t\treturn Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(22)]).then(__webpack_require__.t.bind(null, /*! ./AnimatedGraphics/KickedRotor/KickedRotor */ \"./client/graphics/AnimatedGraphics/KickedRotor/KickedRotor.js\", 7));\n\t},\n\tloading: _Loading2.default\n});\n\nvar BandStructure = (0, _reactLoadable2.default)({\n\tloader: function loader() {\n\t\treturn Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(21)]).then(__webpack_require__.t.bind(null, /*! ./InteractiveGraphics/BandStructure/BandStructure */ \"./client/graphics/InteractiveGraphics/BandStructure/BandStructure.js\", 7));\n\t},\n\tloading: _Loading2.default\n});\n\nvar TestAnimation = (0, _reactLoadable2.default)({\n\tloader: function loader() {\n\t\treturn Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(20)]).then(__webpack_require__.t.bind(null, /*! ./InteractiveGraphics/TestAnimation/TestAnimation */ \"./client/graphics/InteractiveGraphics/TestAnimation/TestAnimation.js\", 7));\n\t},\n\tloading: _Loading2.default\n});\n\nvar SimpleGSAP = (0, _reactLoadable2.default)({\n\tloader: function loader() {\n\t\treturn Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(19)]).then(__webpack_require__.t.bind(null, /*! ./InteractiveGraphics/SimpleGSAP/SimpleGSAP */ \"./client/graphics/InteractiveGraphics/SimpleGSAP/SimpleGSAP.js\", 7));\n\t},\n\tloading: _Loading2.default\n});\n\nvar EntanglementKnots = (0, _reactLoadable2.default)({\n\tloader: function loader() {\n\t\treturn Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(18)]).then(__webpack_require__.t.bind(null, /*! ./AnimatedGraphics/EntanglementKnots/EntanglementKnots */ \"./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.js\", 7));\n\t},\n\tloading: _Loading2.default\n});\n\nvar WavesCrossSection = (0, _reactLoadable2.default)({\n\tloader: function loader() {\n\t\treturn Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(17)]).then(__webpack_require__.t.bind(null, /*! ./InteractiveGraphics/WavesCrossSection/WavesCrossSection */ \"./client/graphics/InteractiveGraphics/WavesCrossSection/WavesCrossSection.js\", 7));\n\t},\n\tloading: _Loading2.default\n});\n\nvar TestNotebook = (0, _reactLoadable2.default)({\n\tloader: function loader() {\n\t\treturn Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(16)]).then(__webpack_require__.t.bind(null, /*! ../notebooks/TestNotebook/TestNotebook */ \"./client/notebooks/TestNotebook/TestNotebook.js\", 7));\n\t},\n\tloading: _Loading2.default\n});\n\nexports.KickedRotor = KickedRotor;\nexports.TestAnimation = TestAnimation;\nexports.SimpleGSAP = SimpleGSAP;\nexports.EntanglementKnots = EntanglementKnots;\nexports.WavesCrossSection = WavesCrossSection;\nexports.TestNotebook = TestNotebook;\n\n//# sourceURL=webpack:///./client/graphics/graphicsManifest.js?");

/***/ })

}]);