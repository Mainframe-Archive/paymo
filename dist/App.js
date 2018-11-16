"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _logo = _interopRequireDefault(require("./logo2.svg"));

require("./App.css");

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _NavBar = _interopRequireDefault(require("./NavBar/NavBar"));

var _styles = require("@material-ui/core/styles");

var _ResponsiveDrawer = _interopRequireDefault(require("./Drawer/ResponsiveDrawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var theme = (0, _styles.createMuiTheme)({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#0bb634',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f44336',
      contrastText: '#000'
    }
  }
});

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_styles.MuiThemeProvider, {
        theme: theme
      }, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_ResponsiveDrawer.default, null), _react.default.createElement("div", {
        className: "App"
      }, _react.default.createElement("header", {
        className: "App-header"
      }, _react.default.createElement("img", {
        src: _logo.default,
        className: "App-logo",
        alt: "logo"
      }), _react.default.createElement("p", null, "Welcome to the future of money transfer!"), "\uD83E\uDD8A", _react.default.createElement("a", {
        className: "App-link",
        href: "https://metamask.io",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Install Metamask"))));
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map