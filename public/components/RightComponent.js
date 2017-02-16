"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.HS === undefined) {
  window.HS = {};
}

(function () {
  var RightComponent = function (_React$Component) {
    _inherits(RightComponent, _React$Component);

    function RightComponent() {
      _classCallCheck(this, RightComponent);

      var _this = _possibleConstructorReturn(this, (RightComponent.__proto__ || Object.getPrototypeOf(RightComponent)).call(this));

      _this.state = {
        data: [],
        search: HS.SharedData.searchSubmitted(),
        droppedTarget: []
      };
      return _this;
    }

    _createClass(RightComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var cb = function cb() {

          _this2.setState({
            data: HS.SharedData.currentSearch,
            search: HS.SharedData.searchSubmitted()
          });
        };

        HS.SharedData.registerCallbacks(cb);
      }
    }, {
      key: "dragStartFunction",
      value: function dragStartFunction(evt) {
        var input = evt.target.innerText;
        var output = HS.SharedData.setDataForDrag(input);
        evt.dataTransfer.setData("text/plain", output);
      }
    }, {
      key: "dragOverFunction",
      value: function dragOverFunction(evt) {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
      }
    }, {
      key: "dropFunction",
      value: function dropFunction(evt) {
        evt.preventDefault();
        var data = evt.dataTransfer.getData("text");
        var output = JSON.parse(data);
        console.log(output);
        this.setState({
          droppedTarget: output
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var content;
        var dropArea;

        if (this.state.search === true) {
          content = React.createElement("img", { src: "http://v6.player.abacast.net/assets/images/loading.gif" });
        } else {

          if (this.state.droppedTarget.length > 0) {
            dropArea = React.createElement(
              "ul",
              null,
              this.state.droppedTarget.map(function (target) {
                return target;
              })
            );
          }

          content = React.createElement(
            "ul",
            null,
            this.state.data.map(function (card, index) {
              if (card.name === null || undefined) {
                return;
              }
              return React.createElement(
                "li",
                { key: index, id: index, draggable: "true", onDragStart: function onDragStart(evt) {
                    _this3.dragStartFunction(evt);
                  } },
                React.createElement(
                  "p",
                  null,
                  card.name
                )
              );
            })
          );
        }

        return React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "div",
            { className: "draggables" },
            content
          ),
          React.createElement(
            "div",
            { className: "droppable", onDragOver: function onDragOver(evt) {
                _this3.dragOverFunction(evt);
              }, onDrop: function onDrop(evt) {
                _this3.dropFunction(evt);
              } },
            React.createElement(
              "h2",
              null,
              "Drop Me Here"
            ),
            dropArea
          )
        );
      }
    }]);

    return RightComponent;
  }(React.Component);

  HS.RightComponent = RightComponent;
})();
//# sourceMappingURL=RightComponent.js.map
