(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "./client/graphics/InteractiveGraphics/WavesCrossSection/WavesCrossSection.js":
/*!************************************************************************************!*\
  !*** ./client/graphics/InteractiveGraphics/WavesCrossSection/WavesCrossSection.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  font-family: -apple-system, BlinkMacSystemFont, \"avenir next\", avenir, \"helvetica neue\", helvetica, ubuntu, roboto, noto, \"segoe ui\", arial, sans-serif;\\n  background-color: rgba(250, 250, 250, 0.75);\\n  margin: 0 0rem;\\n\\n  // canvas {\\n    // outline: 1px solid #cccccc;\\n  // }\\n'], ['\\n  font-family: -apple-system, BlinkMacSystemFont, \"avenir next\", avenir, \"helvetica neue\", helvetica, ubuntu, roboto, noto, \"segoe ui\", arial, sans-serif;\\n  background-color: rgba(250, 250, 250, 0.75);\\n  margin: 0 0rem;\\n\\n  // canvas {\\n    // outline: 1px solid #cccccc;\\n  // }\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\n  max-width: 1200px;\\n  width: 100%;\\n  margin: 0px auto;\\n  position: relative;\\n'], ['\\n  max-width: 1200px;\\n  width: 100%;\\n  margin: 0px auto;\\n  position: relative;\\n']),\n    _templateObject3 = _taggedTemplateLiteral(['\\n  max-width: 1200px;\\n  width: 100%;\\n  margin: 0px auto;\\n  position: relative;\\n  border-top: 2px solid #ffffff;\\n  top: -4px;\\n'], ['\\n  max-width: 1200px;\\n  width: 100%;\\n  margin: 0px auto;\\n  position: relative;\\n  border-top: 2px solid #ffffff;\\n  top: -4px;\\n']),\n    _templateObject4 = _taggedTemplateLiteral(['\\n  color: #eaeaea;\\n  font-size: 2vw;\\n  margin: 0;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  margin-right: -50%;\\n  transform: translate(-50%, -50%);\\n  transition: opacity 1s;\\n  pointer-events: none;\\n'], ['\\n  color: #eaeaea;\\n  font-size: 2vw;\\n  margin: 0;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  margin-right: -50%;\\n  transform: translate(-50%, -50%);\\n  transition: opacity 1s;\\n  pointer-events: none;\\n']),\n    _templateObject5 = _taggedTemplateLiteral(['\\n  width: 100%;\\n  opacity: 0;\\n  transition: opacity 1s;\\n  position: absolute;\\n  pointer-events: none;\\n'], ['\\n  width: 100%;\\n  opacity: 0;\\n  transition: opacity 1s;\\n  position: absolute;\\n  pointer-events: none;\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _label = __webpack_require__(/*! ./label.svg */ \"./client/graphics/InteractiveGraphics/WavesCrossSection/label.svg\");\n\nvar _label2 = _interopRequireDefault(_label);\n\nvar _script = __webpack_require__(/*! ./script */ \"./client/graphics/InteractiveGraphics/WavesCrossSection/script.js\");\n\nvar _script2 = _interopRequireDefault(_script);\n\nvar _Caption = __webpack_require__(/*! ../../../components/Caption/Caption */ \"./client/components/Caption/Caption.js\");\n\nvar _Caption2 = _interopRequireDefault(_Caption);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar FauxBody = _styledComponents2.default.div(_templateObject);\n\nvar Container = _styledComponents2.default.div(_templateObject2);\n\nvar CrossSection = _styledComponents2.default.div(_templateObject3);\n\nvar Message = _styledComponents2.default.div(_templateObject4);\n\nvar Overlay = _styledComponents2.default.img(_templateObject5);\n\nvar WavesCrossSection = function (_React$Component) {\n  _inherits(WavesCrossSection, _React$Component);\n\n  function WavesCrossSection(props) {\n    _classCallCheck(this, WavesCrossSection);\n\n    var _this = _possibleConstructorReturn(this, (WavesCrossSection.__proto__ || Object.getPrototypeOf(WavesCrossSection)).call(this, props));\n\n    _this.caption = \"When you click or tap to create a wave, it travels outward from a central point. When two waves overlap, they interfere and yield brighter or darker spots than any single wave.\";\n    return _this;\n  }\n\n  _createClass(WavesCrossSection, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // When the component finishes mounting, run the stuff from script.js\n      (0, _script2.default)();\n    }\n  }, {\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate() {\n      return false;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        FauxBody,\n        null,\n        _react2.default.createElement(\n          Container,\n          { id: 'container' },\n          _react2.default.createElement(Overlay, { src: _label2.default, id: 'overlay' }),\n          _react2.default.createElement(\n            Message,\n            { id: 'message' },\n            'Tap to make ripples!'\n          )\n        ),\n        _react2.default.createElement(CrossSection, { id: 'cross-section' }),\n        _react2.default.createElement(_Caption2.default, { text: this.caption })\n      );\n    }\n  }]);\n\n  return WavesCrossSection;\n}(_react2.default.Component);\n\nexports.default = WavesCrossSection;\n\n//# sourceURL=webpack:///./client/graphics/InteractiveGraphics/WavesCrossSection/WavesCrossSection.js?");

/***/ }),

/***/ "./client/graphics/InteractiveGraphics/WavesCrossSection/label.svg":
/*!*************************************************************************!*\
  !*** ./client/graphics/InteractiveGraphics/WavesCrossSection/label.svg ***!
  \*************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f86ef32e19545e2e248ec2552cb7363a.svg\";\n\n//# sourceURL=webpack:///./client/graphics/InteractiveGraphics/WavesCrossSection/label.svg?");

/***/ }),

/***/ "./client/graphics/InteractiveGraphics/WavesCrossSection/script.js":
/*!*************************************************************************!*\
  !*** ./client/graphics/InteractiveGraphics/WavesCrossSection/script.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nvar scene, camera, waveRenderer, crossRenderer, crossShader, crossPlane, crossScene, bufferScene, bufferTexture;\n// var frame = 0;\n// var circle_lifetime = 10000;\nvar waveArray = [];\nvar numWaves = 0;\n// var animTime = new Date;\n// var fpsCounter = 0;\nvar resolution = 300; // 156 originally\n\nvar vertexShaderCPP = [\"uniform float amplitude;\", \"varying vec2 vUv;\", \"uniform int activeWaves;\", \"uniform vec4 waves [ 16 ];\", \"attribute float displacement;\", \"varying float distance;\", \"varying vec3 vNormal;\", \"void main() {\", \"vUv = uv;\", \"vNormal = normal;\", \"distance = displacement * 0.5 + 0.5;\", \"for (int i=0; i < 16; i++) {\", \"float vx = pow((waves[i][0]-position[0]), 2.0);\", \"float vy = pow((waves[i][1]-position[1]), 2.0);\", \"float hyp = sqrt(vx + vy);\", \"float amp = waves[i][3] * 0.5;\", \"float edge = 300.0 - waves[i][2];\", \"float width = 64.0;\", \"if ((hyp < edge) && ((edge - hyp) < width)) {\", \"float disp = (1.0 - (edge - hyp)/width) * amp * sin(hyp - edge);\", \"distance = distance + disp;\", \"}\", \"else { distance = distance + 0.0; }\", \"}\", \"vec3 newPosition = position + amplitude * normal * vec3( 1.0 );\", \"gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\", \"}\"].join(\"\\n\");\n\nvar fragmentShaderCPP = [\"varying vec3 vNormal;\", \"varying float distance;\", \"varying vec2 vUv;\", \"uniform vec3 color;\", \"void main() {\", \"gl_FragColor = vec4(vec3(color) + vec3(distance * 0.5, distance * 0.25, distance), distance * 0.5 + 0.25);\", \"}\"].join(\"\\n\");\n\nvar fragmentShaderCrossTextureCPP = [\"uniform sampler2D bufferTexture;\", \"varying vec2 vUv;\", \"uniform vec2 size;\", \"void main() {\", \"float lineWidth = 3.0;\", \"float position_x = gl_FragCoord.x / size[0];\", \"vec2 position = vec2(position_x, 0.5);\", \"vec4 color = texture2D(bufferTexture, position);\", \"float color_value = color.w * size[1];\", \"float min = color_value + 0.25;\", \"float max = color_value + 0.75 + lineWidth;\", \"if(gl_FragCoord.y > min && gl_FragCoord.y < max) {\", \"gl_FragColor = vec4(1.0,1.0,1.0,1.0); // white\", \"}\", \"else{\", \"gl_FragColor = vec4(0.07, 0.51, 0.85, 1.0); // blue\", \"}\", \"}\"].join(\"\\n\");\n\nmodule.exports = function () {\n  init();\n  document.body.style.height = documentHeight();\n};\n\nfunction addWave(array) {\n  waveArray.set(array, numWaves % 16 * 4); // mod 16 so if array is full latest wave overwrites oldest\n  numWaves += 1;\n}\n\nfunction removeWave(index) {\n  waveArray[index - 2] = 0.0;\n  waveArray[index - 1] = 0.0;\n  waveArray[index + 1] = 0.0;\n  numWaves -= 1;\n}\n\nfunction decTime() {\n  for (var i = 0; i < numWaves; i = i + 1) {\n    var n = i * 4 + 2;\n    if (waveArray[n] != 0) {\n      waveArray[n] -= 0.4;\n    } else {\n      removeWave(n);\n    }\n  }\n}\n\nfunction init() {\n\n  var width = getWidth();\n  var waveCanvasHeight = width / 3;\n  var crossCanvasHeight = width / 8;\n\n  // Initialize wave array\n  waveArray = new Float32Array(64); // maximum of 16 active waves, each with (x position, y position, time, amplitude)\n  numWaves = 0; // number of active waves\n\n  // renderer for wave canvas\n  waveRenderer = new THREE.WebGLRenderer({\n    antialias: true\n  });\n  waveRenderer.setSize(width, waveCanvasHeight);\n  $('#container').append(waveRenderer.domElement);\n\n  // renderer for cross-section canvas\n  crossRenderer = new THREE.WebGLRenderer({\n    antialias: true\n  });\n  crossRenderer.setSize(width, crossCanvasHeight);\n  $('#cross-section').append(crossRenderer.domElement);\n\n  scene = new THREE.Scene(); // scene for waves\n  scene.background = new THREE.Color(0x0d8cc6);\n  crossScene = new THREE.Scene(); // scene for cross-section\n  bufferScene = new THREE.Scene(); // scene to store buffer texture\n\n\n  //\n  // Camera for all scenes\n  //\n\n  camera = new THREE.OrthographicCamera(width / -2, width / 2, width / 6, width / -6, -10000, 10000);\n  camera.zoom = width / resolution;\n  camera.updateProjectionMatrix();\n\n  //\n  // Set up buffer geometry and buffer texture\n  //\n\n  var renderTargetParams = {\n    minFilter: THREE.LinearFilter,\n    stencilBuffer: false,\n    depthBuffer: false\n  };\n\n  bufferTexture = new THREE.WebGLRenderTarget(width, waveCanvasHeight, renderTargetParams);\n\n  var bufferUniforms = THREE.UniformsUtils.merge([{\n    activeWaves: {\n      type: \"i\",\n      value: 1\n    }\n  }, {\n    waves: {\n      type: \"fv\",\n      value: waveArray\n    }\n  }, {\n    color: {\n      value: new THREE.Color(0x00ACFC)\n    }\n  }]);\n\n  var bufferShader = new THREE.ShaderMaterial({\n    uniforms: bufferUniforms,\n    vertexShader: vertexShaderCPP,\n    fragmentShader: fragmentShaderCPP\n  });\n  bufferShader.transparent = true; // so alpha value is used when adding colors\n\n  var bufferGeometry = new THREE.PlaneBufferGeometry(resolution, resolution / 3, resolution, resolution / 3);\n\n  var bufferPlane = new THREE.Mesh(bufferGeometry, bufferShader);\n  bufferScene.add(bufferPlane);\n\n  //\n  // Wave object, displaying the buffer texture\n  //\n\n  var waveMaterial = new THREE.MeshPhongMaterial({\n    map: bufferTexture\n  });\n  var waveGeometry = new THREE.PlaneGeometry(resolution, resolution / 3, 4);\n  var waveObject = new THREE.Mesh(waveGeometry, waveMaterial);\n  scene.add(waveObject);\n\n  //\n  // Cross-section object, which uses a fragment shader to display a section of the buffer texture\n  //\n\n  var crossUniforms = {\n    bufferTexture: {\n      type: \"t\",\n      value: bufferTexture\n    },\n    size: {\n      type: \"v2\",\n      value: new THREE.Vector2(getWidth(), getWidth() / 8)\n    }\n  };\n\n  crossShader = new THREE.ShaderMaterial({\n    uniforms: crossUniforms,\n    vertexShader: vertexShaderCPP,\n    fragmentShader: fragmentShaderCrossTextureCPP\n  });\n\n  crossPlane = new THREE.Mesh(waveGeometry, crossShader);\n  crossScene.add(crossPlane);\n\n  //\n  // Add lights to wave scene\n  //\n\n  var ambientLight = new THREE.AmbientLight(0x46a4d9, 2.0);\n  scene.add(ambientLight);\n\n  var directionalLight = new THREE.DirectionalLight(0xffffff, 5.0);\n  scene.add(directionalLight);\n\n  //\n  //  Handle click and resize events;\n  //\n\n  $(window).on('resize', onWindowResize);\n  $(waveRenderer.domElement).click(function (e) {\n    //Offset mouse Position\n    var posX = $(this).offset().left + $(this).width() / 2,\n        posY = $(this).offset().top + $(this).height() / 2;\n    onWindowClick(e.pageX - posX, e.pageY - posY);\n  });\n\n  animate();\n}\n\nfunction animate() {\n  // animateWave();\n  render();\n  decTime();\n  // if (goodFPS(getFPS())) { requestAnimationFrame( animate ); }\n  // else $('#container').remove();\n  requestAnimationFrame(animate);\n}\n\nfunction render() {\n  waveRenderer.render(bufferScene, camera, bufferTexture);\n  waveRenderer.render(scene, camera);\n  crossRenderer.render(bufferScene, camera, bufferTexture);\n  crossRenderer.render(crossScene, camera);\n}\n\nfunction onWindowClick(x, y) {\n  $('#message').css('opacity', '0.0');\n  $('#overlay').css('opacity', '1.0');\n  var sf = $('#container').outerWidth() / resolution; // scale factor for mouse location\n  addWave([x / sf, -y / sf, resolution, 1]);\n}\n\nfunction getWidth() {\n  // console.log($('#container'.outerWidth))\n  return $('#container').outerWidth();\n}\n\nfunction getTop() {\n  return $('canvas ').top;\n  // return 0\n}\n\nfunction documentHeight() {\n  return getWidth() / 3 + getWidth() / 8 + getTop() + 5;\n}\n\nfunction onWindowResize() {\n  camera.updateProjectionMatrix();\n  updateShaderResolution();\n  waveRenderer.setSize(getWidth(), getWidth() / 3);\n  crossRenderer.setSize(getWidth(), getWidth() / 8);\n  document.body.style.height = documentHeight();\n}\n\nfunction updateShaderResolution() {\n  crossPlane.material.uniforms.size.value = new THREE.Vector2(getWidth(), getWidth() / 8);\n}\n\n// function getFPS() {\n//   let newTime = new Date; // get current time\n//   let fps = 1000 / (newTime - animTime); // conversion from millisecond to fps\n//   animTime = newTime;\n//   return fps;\n// }\n\n// function goodFPS(fps) {\n//   fpsCounter += 1;\n//   if (fpsCounter > 1) { // allow animation to cycle once (for loading) before determining fps\n//     return (fps > 10); // 10 fps\n//   } else return true;\n// }\n\n//# sourceURL=webpack:///./client/graphics/InteractiveGraphics/WavesCrossSection/script.js?");

/***/ })

}]);