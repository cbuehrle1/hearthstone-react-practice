"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.HS === undefined) {
  window.HS = {};
}

(function () {
  var HeaderComponent = function (_React$Component) {
    _inherits(HeaderComponent, _React$Component);

    function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);

      return _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).apply(this, arguments));
    }

    _createClass(HeaderComponent, [{
      key: "runSearch",
      value: function runSearch(evt) {
        evt.preventDefault();
        var query = this.searchQuery.value.capitalize();
        HS.SharedData.getClassCards(query);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(
          "div",
          { className: "search-header" },
          React.createElement(
            "p",
            null,
            "Hearthstone Class Card Search"
          ),
          React.createElement(
            "form",
            { onSubmit: function onSubmit(evt) {
                _this2.runSearch(evt);
              } },
            React.createElement("input", { ref: function ref(input) {
                _this2.searchQuery = input;
              }, placeholder: "Search By Hero Class" }),
            React.createElement(
              "button",
              null,
              "Search"
            )
          )
        );
      }
    }]);

    return HeaderComponent;
  }(React.Component);

  HS.HeaderComponent = HeaderComponent;
})();
//# sourceMappingURL=HeaderComponent.js.map
