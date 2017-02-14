if (window.HS === undefined) {window.HS = {} }

(() => {

  class RightComponent extends React.Component {

    constructor() {
      super();
      this.state = {
        data: [],
        search: HS.SharedData.searchSubmitted()
      }
    }

    componentDidMount() {

      var cb = () => {

        this.setState({
          data: HS.SharedData.currentSearch,
          search: HS.SharedData.searchSubmitted()
        });
      }

      HS.SharedData.registerCallbacks(cb);
    }

    render() {

      var content;

      if (this.state.search === true) {
        content = <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      }
      else {
        content = <ul>{this.state.data.map((card) => {
          if (card.name === null || undefined) {
            return;
          }
          return <li>{card.name}</li>;
        })}</ul>
      }

      return <div className="content">{content}</div>;
    }

  }

  HS.RightComponent = RightComponent;
})()
