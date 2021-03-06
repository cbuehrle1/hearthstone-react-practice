"use strict";

if (window.HS === undefined) {
  window.HS = {};
}

(function () {

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  var searchRunning = false;

  window.HS.SharedData = {

    currentSearch: [],

    dropTargets: [],

    callbacks: [],

    getClassCards: function getClassCards(classQuery) {
      var _this = this;

      searchRunning = true;
      this.currentSearch = [];
      this.runCallbacks();

      $.ajax({
        url: "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/" + classQuery,
        type: "GET",
        beforeSend: function beforeSend(xhr) {
          xhr.setRequestHeader("X-Mashape-Key", "lfLi0pd5ComshP5lbLvR2GHC5uP6p1b7AOujsnP5aI9GJrDgG1");
          xhr.setRequestHeader("Accept", "application/json");
        }
      }).fail(function (err) {

        console.log(err);
        searchRunning = false;
        _this.currentSearch = [{ name: "No Results Found" }];
        _this.runCallbacks();
      }).done(function (data) {

        searchRunning = false;
        _this.currentSearch = _this.findDuplicates(data);
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
    },

    searchSubmitted: function searchSubmitted() {
      return searchRunning;
    },

    findDuplicates: function findDuplicates(data) {

      var prevResult;
      var pushToMe = [];

      data.forEach(function (card) {

        if (card.name !== prevResult && card.type !== "Hero") {
          pushToMe.push(card);
        }

        prevResult = card.name;
      });

      return pushToMe;
    },

    setDataForDrag: function setDataForDrag(item) {

      var currentDragItem = item;

      this.dropTargets.push(item);
      var output = JSON.stringify(this.dropTargets);
      this.runCallbacks();

      return output;
    },

    removeItemFromCurrent: function removeItemFromCurrent(item) {
      var _this2 = this;

      var currentDragItem = item;

      this.currentSearch.forEach(function (card, index) {

        if (card.name === item) {
          _this2.currentSearch.splice(index, 1);
        }
      });

      this.runCallbacks();
    }
  };
})();
//# sourceMappingURL=SharedData.js.map
