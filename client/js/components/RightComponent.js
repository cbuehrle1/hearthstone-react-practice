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
        content = <img src="http://v6.player.abacast.net/assets/images/loading.gif" />
      }
      else {

        content = <ul>{this.state.data.map((card, index) => {
          if (card.name === null || undefined) {
            return;
          }
          return <li key={index}><p>{card.name}</p></li>;
        })}</ul>
      }

      return <div className="content"><div className="draggables">{content}</div><div className="droppable"><h2>Drop Me Here</h2></div></div>;
    }

  }

  HS.RightComponent = RightComponent;
})()
