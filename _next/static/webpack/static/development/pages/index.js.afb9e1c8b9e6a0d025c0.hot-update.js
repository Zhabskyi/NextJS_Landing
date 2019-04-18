webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/bottomSection/bottomSection.jsx":
/*!****************************************************!*\
  !*** ./components/bottomSection/bottomSection.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bottomSection_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottomSection.scss */ "./components/bottomSection/bottomSection.scss");
/* harmony import */ var _bottomSection_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bottomSection_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _quotes_quotes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../quotes/quotes */ "./components/quotes/quotes.jsx");
/* harmony import */ var _sectionSlides_slide_slide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sectionSlides/slide/slide */ "./components/sectionSlides/slide/slide.jsx");
/* harmony import */ var _sectionSlides_slideControls_slideBubblesControls_slideBubblesControls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sectionSlides/slideControls/slideBubblesControls/slideBubblesControls */ "./components/sectionSlides/slideControls/slideBubblesControls/slideBubblesControls.jsx");
/* harmony import */ var _sectionSlides_slideControls_slideArrowsControls_slideArrowsControls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sectionSlides/slideControls/slideArrowsControls/slideArrowsControls */ "./components/sectionSlides/slideControls/slideArrowsControls/slideArrowsControls.jsx");
/* harmony import */ var _hoc_sliderHOC__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hoc/sliderHOC */ "./components/hoc/sliderHOC.jsx");





var _jsxFileName = "/Users/zhabskyi/React/Landing/components/bottomSection/bottomSection.jsx";







 //After refactoring

var BottomSection =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BottomSection, _Component);

  function BottomSection() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BottomSection);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BottomSection).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BottomSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Active Index ".concat(this.props.activeIndex));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeIndex = _this$props.activeIndex,
          slides = _this$props.slides,
          onNext = _this$props.onNext,
          onPrev = _this$props.onPrev,
          onSetIndex = _this$props.onSetIndex;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: _bottomSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.customerSecion,
        onClickCapture: function onClickCapture() {
          return console.log('CLICK  CAPTURED');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _bottomSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _bottomSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container__left,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_quotes_quotes__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "lightGreen",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _bottomSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container__right,
        onClick: function onClick() {
          return console.log('CLICK BUBLING 2');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_sectionSlides_slideControls_slideArrowsControls_slideArrowsControls__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClickPrev: onPrev,
        onClickNext: onNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_bottomSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider, _bottomSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a["active_slide_".concat(activeIndex)]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _bottomSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider_wrapper,
        style: {
          'transform': "translateX(-".concat(activeIndex * (100 / slides.length), "%)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, slides.map(function (el) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_sectionSlides_slide_slide__WEBPACK_IMPORTED_MODULE_9__["default"], {
          isActive: el.index === activeIndex,
          key: el.id,
          index: el.index,
          comment: el.comment,
          name: el.name,
          company: el.company,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _bottomSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.bubbles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, slides.map(function (el) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_sectionSlides_slideControls_slideBubblesControls_slideBubblesControls__WEBPACK_IMPORTED_MODULE_10__["default"], {
          isActive: el.index === activeIndex,
          onClick: function onClick() {
            return onSetIndex(el.index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        });
      }))));
    }
  }]);

  return BottomSection;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var Slider = Object(_hoc_sliderHOC__WEBPACK_IMPORTED_MODULE_12__["sliderHOC"])(BottomSection);
/* harmony default export */ __webpack_exports__["default"] = (Slider); // USE TO BE
// class BottomSection extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			properties: data.properties,
//       property: data.properties[0]
// 		}
// 	}
// 	nextProperty = () => {
//     const newIndex = this.state.property.index+1;
// 		if ( newIndex >= this.state.properties.length) {
// 			this.setState({
// 				property: data.properties[0]
// 			})
// 		} else {
// 			this.setState({
// 				property: data.properties[newIndex]
// 			});
// 		}
//   }
//   prevProperty = () => {
// 		const newIndex = this.state.property.index-1;
// 		if ( newIndex < 0) {
// 			this.setState({
// 				property: data.properties[this.state.properties.length - 1]
// 			});
// 		} else {
// 			this.setState({
// 				property: data.properties[newIndex]
// 			});
// 		}
// 	}
// 	bubbleClickHandler = (index) => {
// 		this.setState({
// 			property: data.properties[index]
// 		})
// 	}
// 	render() {
// 		return (
// 			<section className={classes.customerSecion}>
// 				<div className={classes.container}>
// 					<div className={classes.container__left}>
// 						<Quotes color='lightGreen' size='big'/>
// 					</div>
// 					<div className={classes.container__right}>
// 						<SlideArrowsControls
// 							onClickPrev={this.prevProperty}
// 							onClickNext={this.nextProperty}/>
// 					</div>
// 							<div className={classnames(classes.slider, classes[`active_slide_${this.state.property.index}`])}>
// 								<div className={classes.slider_wrapper} style={{
// 												'transform': `translateX(-${this.state.property.index*(100/this.state.properties.length)}%)`
// 											}}>
// 									{this.state.properties.map(el => (
// 													<Slide
// 														active={this.state.property.index}
// 														quotesColor='white'
// 														key={el.id}
// 														index={el.index}
// 														comment={el.comment} 
// 														name={el.name}
// 														company={el.company} />
// 												))}
// 								</div>
// 						</div>
// 					<SlideBubblesControls
// 						active={this.state.property.index}
// 						bubbleClick={this.bubbleClickHandler}/>
// 			</div>
// 		</section>
// 		)
// 	}
// }
// export default BottomSection;

/***/ }),

/***/ "./components/bottomSection/sliderHOC.jsx":
false,

/***/ "./components/hoc/sliderHOC.jsx":
/*!**************************************!*\
  !*** ./components/hoc/sliderHOC.jsx ***!
  \**************************************/
/*! exports provided: sliderHOC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderHOC", function() { return sliderHOC; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "/Users/zhabskyi/React/Landing/components/hoc/sliderHOC.jsx";

function sliderHOC(SliderComponent) {
  return (
    /*#__PURE__*/
    function (_React$PureComponent) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_class2, _React$PureComponent);

      function _class2(props) {
        var _this;

        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class2);

        _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_class2).call(this, props));

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "nextProperty", function () {
          var newIndex = _this.state.activeIndex + 1;

          if (newIndex < _this.state.slides.length) {
            _this.setState({
              activeIndex: newIndex
            });
          } else {
            _this.setState({
              activeIndex: 0
            });
          }
        });

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "prevProperty", function () {
          var newIndex = _this.state.activeIndex - 1;

          if (newIndex >= 0) {
            _this.setState({
              activeIndex: newIndex
            });
          } else {
            _this.setState({
              activeIndex: _this.state.slides.length - 1
            });
          }
        });

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setIndex", function (index) {
          _this.setState({
            activeIndex: index
          });
        });

        _this.state = {
          slides: [],
          activeIndex: 0
        };
        return _this;
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps) {
            this.setState(function (state) {
              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
                slides: nextProps.slides,
                activeIndex: nextProps.activeIndex
              });
            });
          }
        }
      }, {
        key: "componentWillMount",
        value: function componentWillMount() {
          var _this2 = this;

          this.setState(function (state) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
              slides: _this2.props.slides,
              activeIndex: _this2.state.activeIndex
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state = this.state,
              slides = _this$state.slides,
              activeIndex = _this$state.activeIndex;
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SliderComponent, {
            slides: slides,
            activeIndex: activeIndex,
            onNext: this.nextProperty,
            onPrev: this.prevProperty,
            onSetIndex: this.setIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          });
        }
      }]);

      return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent)
  );
}

/***/ })

})
//# sourceMappingURL=index.js.afb9e1c8b9e6a0d025c0.hot-update.js.map