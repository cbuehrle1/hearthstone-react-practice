if (window.HS === undefined) {window.HS = {} }

(() => {

  class RightComponent extends React.Component {

    constructor() {
      super();
      this.state = {
        data: [],
        search: HS.SharedData.searchSubmitted(),
        droppedTarget: []
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

    dragStartFunction(evt) {
      var input = evt.target.innerText
      var output = HS.SharedData.setDataForDrag(input);
      evt.dataTransfer.setData("text/plain", output);
    }

    dragOverFunction(evt) {
      evt.preventDefault();
      evt.dataTransfer.dropEffect = "move"
    }

    dropFunction(evt) {
      evt.preventDefault();
      var data = evt.dataTransfer.getData("text")
      var output = JSON.parse(data);
      console.log(output);
      this.setState({
        droppedTarget: output
      });

    }

    render() {

      var content;
      var dropArea;

      if (this.state.search === true) {
        content = <img src="http://v6.player.abacast.net/assets/images/loading.gif" />
      }
      else {

        if (this.state.droppedTarget.length > 0) {
          dropArea = <ul>{this.state.droppedTarget.map((target) => {
            return target;
          })}
          </ul>
        }

        content = <ul>{this.state.data.map((card, index) => {
          if (card.name === null || undefined) {
            return;
          }
          return <li key={index} id={index} draggable="true" onDragStart={(evt) => { this.dragStartFunction(evt); }}><p>{card.name}</p></li>;
        })}</ul>
      }

      return <div className="content"><div className="draggables">{content}</div>
      <div className="droppable" onDragOver={(evt) => { this.dragOverFunction(evt); }} onDrop={(evt) => { this.dropFunction(evt); }}><h2>Drop Me Here</h2>{dropArea}</div></div>;

    }

  }

  HS.RightComponent = RightComponent;
})()
