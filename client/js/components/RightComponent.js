if (window.HS === undefined) {window.HS = {} }

(() => {

  class RightComponent extends React.Component {

    constructor() {
      super();
      this.state = {
        data: []
      }
    }

    componentDidMount() {

      var cb = () => {
        this.setState({
          data: HS.SharedData.currentSearch
        });
      }

      HS.SharedData.registerCallbacks(cb);
      HS.SharedData.getClassCards();
    }

    render() {

      var content;

      if (this.state.data.length === 0) {
        content = <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      }
      else {
        content = <p>callback is complete</p>
        console.log(this.state.data)
      }

      return <div className="content">{content}</div>;
    }

  }

  HS.RightComponent = RightComponent;
})()
