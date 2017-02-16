if (window.HS === undefined) { window.HS = {}; }

(() => {

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  var searchRunning = false;

  window.HS.SharedData = {

    currentSearch: [],

    dropTargets: [],

    callbacks: [],

    getClassCards: function (classQuery) {

      searchRunning = true
      this.currentSearch = []
      this.runCallbacks();

      $.ajax({
        url: "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/" + classQuery,
        type: "GET",
        beforeSend: function (xhr) {
          xhr.setRequestHeader("X-Mashape-Key", "lfLi0pd5ComshP5lbLvR2GHC5uP6p1b7AOujsnP5aI9GJrDgG1");
          xhr.setRequestHeader("Accept", "application/json");
        }
      })
      .fail((err) => {

        console.log(err);
        searchRunning = false;
        this.currentSearch = [ { name: "No Results Found" } ];
        this.runCallbacks();

      })
      .done((data) => {

        searchRunning = false;
        this.currentSearch = this.findDuplicates(data);
        this.runCallbacks();

      })

    },

    registerCallbacks: function (cb) {
      this.callbacks.push(cb)
    },

    runCallbacks: function () {

      this.callbacks.forEach((cb) => {
        cb();
      });

    },

    searchSubmitted: function () {
      return searchRunning;
    },

    findDuplicates: function(data) {

      var prevResult;
      var pushToMe = [];

      data.forEach((card) => {

        if (card.name !== prevResult && card.type !== "Hero") {
          pushToMe.push(card);
        }

        prevResult = card.name;

      });

      return pushToMe;
    },

    setDataForDrag: function(item) {

      this.dropTargets.push(item);
      var output = JSON.stringify(this.dropTargets);
      return output;

    }

  }

})()
