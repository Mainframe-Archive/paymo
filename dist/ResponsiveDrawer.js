"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _AccessTime = _interopRequireDefault(require("@material-ui/icons/AccessTime"));

var _MonetizationOn = _interopRequireDefault(require("@material-ui/icons/MonetizationOn"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _RemoveCircleOutline = _interopRequireDefault(require("@material-ui/icons/RemoveCircleOutline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    },
    drawer: _defineProperty({}, theme.breakpoints.up('sm'), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: _defineProperty({
      marginLeft: drawerWidth
    }, theme.breakpoints.up('sm'), {
      width: "calc(100% - ".concat(drawerWidth, "px)")
    }),
    menuButton: _defineProperty({
      marginRight: 20
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    }
  };
};

var ResponsiveDrawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResponsiveDrawer, _React$Component);

  function ResponsiveDrawer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResponsiveDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResponsiveDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      mobileOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDrawerToggle", function () {
      _this.setState(function (state) {
        return {
          mobileOpen: !state.mobileOpen
        };
      });
    });

    return _this;
  }

  _createClass(ResponsiveDrawer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;

      var drawer = _react.default.createElement("div", null, _react.default.createElement("div", {
        className: classes.toolbar
      }), _react.default.createElement(_Divider.default, null), _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, {
        button: true,
        key: "Activity"
      }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_AccessTime.default, null)), _react.default.createElement(_ListItemText.default, null, "Activity")), _react.default.createElement(_ListItem.default, {
        button: true,
        key: "Cash Card"
      }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_MonetizationOn.default, null)), _react.default.createElement(_ListItemText.default, null, "Cash Card")), _react.default.createElement(_ListItem.default, {
        button: true,
        key: "Settings"
      }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_AccountCircle.default, null)), _react.default.createElement(_ListItemText.default, null, "Settings")), _react.default.createElement(_ListItem.default, {
        button: true,
        key: "Sign Out"
      }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_RemoveCircleOutline.default, null)), _react.default.createElement(_ListItemText.default, null, "Sign Out"))));

      return _react.default.createElement("div", {
        className: classes.root
      }, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_AppBar.default, {
        position: "fixed",
        className: classes.appBar
      }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerToggle,
        className: classes.menuButton
      }, _react.default.createElement(_Menu.default, null)), _react.default.createElement(_Typography.default, {
        variant: "h6",
        color: "inherit",
        noWrap: true
      }, "Paymo"))), _react.default.createElement("nav", {
        className: classes.drawer
      }, _react.default.createElement(_Hidden.default, {
        smUp: true,
        implementation: "css"
      }, _react.default.createElement(_Drawer.default, {
        container: this.props.container,
        variant: "temporary",
        anchor: theme.direction === 'rtl' ? 'right' : 'left',
        open: this.state.mobileOpen,
        onClose: this.handleDrawerToggle,
        classes: {
          paper: classes.drawerPaper
        },
        ModalProps: {
          keepMounted: true // Better open performance on mobile.

        }
      }, drawer)), _react.default.createElement(_Hidden.default, {
        xsDown: true,
        implementation: "css"
      }, _react.default.createElement(_Drawer.default, {
        classes: {
          paper: classes.drawerPaper
        },
        variant: "permanent",
        open: true
      }, drawer))), _react.default.createElement("main", {
        className: classes.content
      }, _react.default.createElement("div", {
        className: classes.toolbar
      }), _react.default.createElement(_Typography.default, {
        paragraph: true
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), _react.default.createElement(_Typography.default, {
        paragraph: true
      }, "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.")));
    }
  }]);

  return ResponsiveDrawer;
}(_react.default.Component);

ResponsiveDrawer.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: _propTypes.default.object,
  theme: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ResponsiveDrawer);

exports.default = _default;
//# sourceMappingURL=ResponsiveDrawer.js.map