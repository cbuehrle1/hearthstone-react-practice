if (window.HS === undefined) { window.HS = {} }

(() => {

  class HeaderComponent extends React.Component {

    runSearch(evt) {
      evt.preventDefault();
      var query = this.searchQuery.value.capitalize();
      HS.SharedData.getClassCards(query);
    }

    render() {
      return <div className="search-header"><p>Hearthstone Class Card Search</p>
      <form onSubmit={(evt) => { this.runSearch(evt); }}><input ref={(input) => {this.searchQuery = input}} placeholder="Search By Hero Class"/>
      <button>Search</button>
      </form></div>
    }

  }

  HS.HeaderComponent = HeaderComponent
})()
