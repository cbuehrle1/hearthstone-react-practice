"use strict";

if (window.HS === undefined) {
  window.HS = {};
}

(function () {

  window.HS.SharedData = {

    currentSearch: [],

    callbacks: [],

    getClassCards: function getClassCards() {
      var _this = this;

      $.ajax({
        url: "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Paladin",
        typr: "GET",
        beforeSend: function beforeSend(xhr) {
          xhr.setRequestHeader("X-Mashape-Key", "lfLi0pd5ComshP5lbLvR2GHC5uP6p1b7AOujsnP5aI9GJrDgG1");
          xhr.setRequestHeader("Accept", "application/json");
        }
      }).done(function (data) {
        _this.currentSearch = data;
        _this.runCallbacks();
      });
    },

    registerCallbacks: function registerCallbacks(cb) {
      this.callbacks.push(cb);
    },

    runCallbacks: function runCallbacks() {

      this.callbacks.forEach(function (cb) {
        cb();
      });
    }

  };
})();
//# sourceMappingURL=SharedData.js.map
