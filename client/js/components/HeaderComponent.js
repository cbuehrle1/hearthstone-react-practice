if (window.HS === undefined) { window.HS = {} }

(() => {

  class HeaderComponent extends React.Component {

    runSearch() {
      var query = this.searchQuery.value.capitalize();
      HS.SharedData.getClassCards(query);
    }

    render() {
      return <div className="search-header"><p>Hearthstone Class Card Search</p>
      <form><input ref={(input) => {this.searchQuery = input}} onSubmit={() => { this.runSearch(); }} placeholder="Search By Hero Class"/>
      </form></div>
    }

  }


  HS.HeaderComponent = HeaderComponent
})()
