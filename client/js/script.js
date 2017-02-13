if (window.HS === undefined) { window.HS = {} }

(() => {

  var mountNode = document.querySelector("#react-root");

  class AppComponent extends React.Component {

    render() {
      return <div><HS.HeaderComponent /><HS.RightComponent /></div>;
    }

  }

  ReactDOM.render(<AppComponent />, mountNode)

})()
