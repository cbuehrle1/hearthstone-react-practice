if (window.HS === undefined) { window.HS = {}; }

(() => {


  window.HS.SharedData = {

    currentSearch: [],

    callbacks: [],

    getClassCards: function () {
      $.ajax({
        url: "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Paladin",
        typr: "GET",
        beforeSend: function (xhr) {
          xhr.setRequestHeader("X-Mashape-Key", "lfLi0pd5ComshP5lbLvR2GHC5uP6p1b7AOujsnP5aI9GJrDgG1");
          xhr.setRequestHeader("Accept", "application/json");
        }
      })
      .done((data) => {
        this.currentSearch = data;
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

    }

  }

})()
