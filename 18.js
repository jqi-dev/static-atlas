(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./client/components/AtlasContext/AtlasContext.js":
/*!********************************************************!*\
  !*** ./client/components/AtlasContext/AtlasContext.js ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AtlasContext = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AtlasContext = exports.AtlasContext = _react2.default.createContext(\"standalone\");\n\n//# sourceURL=webpack:///./client/components/AtlasContext/AtlasContext.js?");

/***/ }),

/***/ "./client/components/Caption/Caption.js":
/*!**********************************************!*\
  !*** ./client/components/Caption/Caption.js ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AtlasContext = __webpack_require__(/*! ../AtlasContext/AtlasContext */ \"./client/components/AtlasContext/AtlasContext.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Caption = function (_React$Component) {\n  _inherits(Caption, _React$Component);\n\n  function Caption() {\n    _classCallCheck(this, Caption);\n\n    return _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).apply(this, arguments));\n  }\n\n  _createClass(Caption, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        _AtlasContext.AtlasContext.Consumer,\n        null,\n        function (context) {\n          return context == \"entry\" ? _react2.default.createElement(\n            'div',\n            { className: 'w-40-l w-100 fr-l pl3-l pr0-l' },\n            _react2.default.createElement(\n              'div',\n              { className: 'w-90-l w-100 mw7 center f7 fr-l sans-serif gray lh-copy pa3 ba b--moon-gray bg-light-gray mb3' },\n              _this2.props.text\n            )\n          ) : _react2.default.createElement(\n            'div',\n            { className: 'w-100 mw7 center f6 fr-l sans-serif gray lh-copy br bl bb bt b--moon-gray bg-light-gray pa3' },\n            _this2.props.text\n          );\n        }\n      );\n    }\n  }]);\n\n  return Caption;\n}(_react2.default.Component);\n\nexports.default = Caption;\n\n//# sourceURL=webpack:///./client/components/Caption/Caption.js?");

/***/ }),

/***/ "./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.js":
/*!*********************************************************************************!*\
  !*** ./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _EntanglementKnots = __webpack_require__(/*! ./EntanglementKnots.sass */ \"./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.sass\");\n\nvar _EntanglementKnots2 = _interopRequireDefault(_EntanglementKnots);\n\nvar _AtlasContext = __webpack_require__(/*! ../../../components/AtlasContext/AtlasContext */ \"./client/components/AtlasContext/AtlasContext.js\");\n\nvar _Caption = __webpack_require__(/*! ../../../components/Caption/Caption */ \"./client/components/Caption/Caption.js\");\n\nvar _Caption2 = _interopRequireDefault(_Caption);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar EntanglementKnots = function (_React$Component) {\n\t_inherits(EntanglementKnots, _React$Component);\n\n\tfunction EntanglementKnots(props) {\n\t\t_classCallCheck(this, EntanglementKnots);\n\n\t\tvar _this = _possibleConstructorReturn(this, (EntanglementKnots.__proto__ || Object.getPrototypeOf(EntanglementKnots)).call(this, props));\n\n\t\t_this.initialColors = function (numStrings) {\n\t\t\tvar returnArray = [];\n\t\t\tfor (var i = 0; i < numStrings; i++) {\n\t\t\t\tvar r = 64 + Math.floor(Math.random() * 192);\n\t\t\t\tvar g = 64 + Math.floor(Math.random() * 192);\n\t\t\t\tvar b = 64 + Math.floor(Math.random() * 192);\n\n\t\t\t\treturnArray.push(\"rgb(\" + r + \",\" + g + \",\" + b + \")\");\n\t\t\t}\n\n\t\t\treturn returnArray;\n\t\t};\n\n\t\t_this.fillRow = function (y0, numStrings, margin, stringSpacing, positiveProbability, generatorsInLastRow, colors, crossingProbability, ctx, stringThickness, rowHeight, controlYFactor, spacerGap, bgColor) {\n\t\t\tvar stringNumber = 0;\n\t\t\tvar x0;\n\t\t\tvar temp;\n\t\t\tvar positiveSwitch;\n\t\t\tvar doPositive;\n\t\t\tvar prob = 0.5;\n\t\t\t//console.log(\"Inside row filler...\")\n\t\t\twhile (stringNumber < numStrings - 1) {\n\t\t\t\tx0 = margin + stringNumber * stringSpacing;\n\t\t\t\tif (Math.random() < prob) {\n\t\t\t\t\tpositiveSwitch = Math.random() < positiveProbability;\n\t\t\t\t\tdoPositive = positiveSwitch && generatorsInLastRow[stringNumber] != -1 || !positiveSwitch && generatorsInLastRow[stringNumber] == 1;\n\t\t\t\t\tif (doPositive) {\n\t\t\t\t\t\t//console.log(\"Attempting to draw positive crossing...\")\n\t\t\t\t\t\t_this.drawCrossing(x0, y0, colors[stringNumber], colors[stringNumber + 1], true, ctx, stringSpacing, rowHeight, stringThickness, controlYFactor, spacerGap, bgColor);\n\t\t\t\t\t\tgeneratorsInLastRow[stringNumber] = 1;\n\t\t\t\t\t\tgeneratorsInLastRow[stringNumber + 1] = 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t//console.log(\"Attempting to draw negative crossing...\")\n\t\t\t\t\t\t_this.drawCrossing(x0, y0, colors[stringNumber], colors[stringNumber + 1], false, ctx, stringSpacing, rowHeight, stringThickness, controlYFactor, spacerGap, bgColor);\n\t\t\t\t\t\tgeneratorsInLastRow[stringNumber] = -1;\n\t\t\t\t\t\tgeneratorsInLastRow[stringNumber + 1] = 0;\n\t\t\t\t\t}\n\n\t\t\t\t\ttemp = colors[stringNumber];\n\t\t\t\t\tcolors[stringNumber] = colors[stringNumber + 1];\n\t\t\t\t\tcolors[stringNumber + 1] = temp;\n\t\t\t\t\tstringNumber += 2;\n\t\t\t\t} else {\n\t\t\t\t\t//console.log(\"Attempting to draw string...\")\n\t\t\t\t\t_this.drawString(x0, y0, colors[stringNumber], ctx, stringThickness, rowHeight);\n\t\t\t\t\tstringNumber += 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (stringNumber == numStrings - 1) {\n\t\t\t\t//console.log(\"Attempting to draw string....\")\n\t\t\t\t_this.drawString(margin + stringNumber * stringSpacing, y0, colors[stringNumber], ctx, stringThickness, rowHeight);\n\t\t\t}\n\t\t\tprob = crossingProbability;\n\t\t};\n\n\t\t_this.drawString = function (x0, y0, color, ctx, stringThickness, rowHeight) {\n\t\t\t//console.log(\"Drawing string...\")\n\t\t\tctx.strokeStyle = color;\n\t\t\tctx.lineWidth = stringThickness;\n\t\t\tctx.lineCap = \"butt\";\n\t\t\tctx.beginPath();\n\t\t\tctx.moveTo(x0, y0);\n\t\t\tctx.lineTo(x0, y0 + rowHeight);\n\t\t\tctx.stroke();\n\t\t};\n\n\t\t_this.drawCrossing = function (x0, y0, color1, color2, positive, ctx, stringSpacing, rowHeight, stringThickness, controlYFactor, spacerGap, bgColor) {\n\t\t\t//console.log(\"Drawing crossing...\")\n\t\t\tvar midX = x0 + stringSpacing / 2;\n\t\t\tvar midY = y0 + rowHeight / 2;\n\n\t\t\tctx.lineCap = \"butt\";\n\n\t\t\tif (positive) {\n\t\t\t\tdrawLine1();\n\t\t\t\tdrawSpacer2();\n\t\t\t\tdrawLine2();\n\t\t\t} else {\n\t\t\t\tdrawLine2();\n\t\t\t\tdrawSpacer1();\n\t\t\t\tdrawLine1();\n\t\t\t}\n\n\t\t\tfunction drawLine1() {\n\t\t\t\tctx.strokeStyle = color1;\n\t\t\t\tctx.lineWidth = stringThickness;\n\t\t\t\tctx.beginPath();\n\t\t\t\tctx.moveTo(x0 + stringSpacing, y0);\n\t\t\t\tctx.bezierCurveTo(x0 + stringSpacing, y0 + rowHeight * controlYFactor, x0, y0 + rowHeight * (1 - controlYFactor), x0, y0 + rowHeight);\n\t\t\t\tctx.stroke();\n\t\t\t}\n\n\t\t\tfunction drawSpacer1() {\n\t\t\t\tctx.strokeStyle = bgColor;\n\t\t\t\tctx.lineWidth = stringThickness + spacerGap * 2;\n\t\t\t\tctx.beginPath();\n\t\t\t\tctx.moveTo(x0 + stringSpacing, y0);\n\t\t\t\tctx.bezierCurveTo(x0 + stringSpacing, y0 + rowHeight * controlYFactor, x0, y0 + rowHeight * (1 - controlYFactor), x0, y0 + rowHeight);\n\t\t\t\tctx.stroke();\n\t\t\t}\n\n\t\t\tfunction drawSpacer2() {\n\t\t\t\tctx.strokeStyle = bgColor;\n\t\t\t\tctx.lineWidth = stringThickness + 2 * spacerGap;\n\t\t\t\tctx.beginPath();\n\t\t\t\tctx.moveTo(x0, y0);\n\t\t\t\tctx.bezierCurveTo(x0, y0 + rowHeight * controlYFactor, x0 + stringSpacing, y0 + rowHeight * (1 - controlYFactor), x0 + stringSpacing, y0 + rowHeight);\n\t\t\t\tctx.stroke();\n\t\t\t}\n\n\t\t\tfunction drawLine2() {\n\t\t\t\tctx.strokeStyle = color2;\n\t\t\t\tctx.lineWidth = stringThickness;\n\t\t\t\tctx.beginPath();\n\t\t\t\tctx.moveTo(x0, y0);\n\t\t\t\tctx.bezierCurveTo(x0, y0 + rowHeight * controlYFactor, x0 + stringSpacing, y0 + rowHeight * (1 - controlYFactor), x0 + stringSpacing, y0 + rowHeight);\n\t\t\t\tctx.stroke();\n\t\t\t}\n\t\t};\n\n\t\t_this.motion = true;\n\t\t_this.oldtimer = null;\n\t\t_this.caption = \"Entanglement twists together two or more quantum particles, replacing their individual identities with an entwined whole.\";\n\t\treturn _this;\n\t}\n\n\t_createClass(EntanglementKnots, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar canvas = this.refs.canvas;\n\t\t\tvar ctx = canvas.getContext(\"2d\");\n\t\t\tvar width = canvas.width;\n\t\t\tvar height = canvas.height;\n\n\t\t\tvar rowHeight = 33;\n\t\t\tvar stringSpacing = 20;\n\t\t\tvar stringThickness = 5;\n\t\t\tvar bgColor = \"#000000\";\n\t\t\tvar numStrings = 1 + Math.floor((width - stringThickness) / stringSpacing);\n\t\t\tvar margin = (width - (numStrings - 1) * stringSpacing) / 2;\n\t\t\tvar crossingProbability = 0.67;\n\t\t\tvar positiveProbability = 0.5;\n\t\t\tvar spacerGap = 2.5;\n\t\t\tvar crossingAngle = 42 * Math.PI / 180;\n\t\t\tvar controlYFactor = 1 - stringSpacing / rowHeight * Math.tan(crossingAngle);\n\n\t\t\tvar colors = this.initialColors(numStrings);\n\n\t\t\tctx.fillStyle = bgColor;\n\t\t\tctx.fillRect(0, 0, width, height);\n\n\t\t\tvar generatorsInLastRow = [];\n\t\t\tfor (var k = 0; k < numStrings - 1; k++) {\n\t\t\t\tgeneratorsInLastRow.push(0);\n\t\t\t}\n\n\t\t\tvar i = Math.floor(height / rowHeight);\n\t\t\twhile (--i > -1) {\n\t\t\t\t//console.log(\"Filling row...\")\n\t\t\t\tthis.fillRow(i * rowHeight, numStrings, margin, stringSpacing, positiveProbability, generatorsInLastRow, colors, crossingProbability, ctx, stringThickness, rowHeight, controlYFactor, spacerGap, bgColor);\n\t\t\t}\n\n\t\t\tthis.timer = setInterval(onTimer, 500);\n\t\t\tvar fillRow = this.fillRow;\n\n\t\t\tfunction onTimer() {\n\t\t\t\tctx.drawImage(canvas, 0, 0, width, height - rowHeight, 0, rowHeight, width, height - rowHeight);\n\t\t\t\t//clear top row\n\t\t\t\tctx.fillStyle = bgColor;\n\t\t\t\tctx.fillRect(0, 0, width, rowHeight);\n\t\t\t\t//draw new top row\n\t\t\t\tfillRow(0, numStrings, margin, stringSpacing, positiveProbability, generatorsInLastRow, colors, crossingProbability, ctx, stringThickness, rowHeight, controlYFactor, spacerGap, bgColor);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'entanglement-banner' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'mt0 tc' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'relative w-100-l mt0-l' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'w-100 tc', name: 'canvas_container' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'bn b--moon-gray center relative tc' },\n\t\t\t\t\t\t\t\t_react2.default.createElement('canvas', { height: \"400\", width: \"800\", name: 'canvas', ref: 'canvas', className: 'w-100 ' + _EntanglementKnots2.default.EntanglementKnots })\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(_Caption2.default, { text: this.caption })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn EntanglementKnots;\n}(_react2.default.Component);\n\nexports.default = EntanglementKnots;\n\n//# sourceURL=webpack:///./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.js?");

/***/ }),

/***/ "./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.sass":
/*!***********************************************************************************!*\
  !*** ./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/sass-loader/lib/loader.js!./EntanglementKnots.sass */ \"./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.sass\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.sass?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.sass":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/sass-loader/lib/loader.js!./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.sass ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".💇🏿‍♂️🇸🇪😧😽client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__EntanglementKnots--2g3i5 {\\n  stroke-dasharray: 1000;\\n  stroke-dashoffset: 1000;\\n  animation: 🤹🏽‍♀️🤸‍♀️🤼🏿‍♂️📛client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__dash--3BGRC 5s linear forwards; }\\n\\n@keyframes 🤹🏽‍♀️🤸‍♀️🤼🏿‍♂️📛client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__dash--3BGRC {\\n  to {\\n    stroke-dashoffset: 0; } }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"EntanglementKnots\": \"💇🏿‍♂️🇸🇪😧😽client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__EntanglementKnots--2g3i5\",\n\t\"dash\": \"🤹🏽‍♀️🤸‍♀️🤼🏿‍♂️📛client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__dash--3BGRC\"\n};\n\n//# sourceURL=webpack:///./client/graphics/AnimatedGraphics/EntanglementKnots/EntanglementKnots.sass?./node_modules/css-loader??ref--8-1!./node_modules/sass-loader/lib/loader.js");

/***/ })

}]);