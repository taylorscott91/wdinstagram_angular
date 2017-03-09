"use strict";

let hardcodedData = [
  {
  photo_url: "http://fillmurray.com/300/200",
  author: "author1",
  body: "body1"
  }, {
  photo_url: "http://fillmurray.com/300/200",
  author: "author2",
  body: "body2"
  }
]

angular
.module("wdinstagram", [
  "ui.router"
])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("EntriesIndexController", [
  EntriesIndexControllerFunction
])
.controller("EntriesShowController", [
  "$stateParams",
  EntriesShowControllerFunction
])

function RouterFunction($stateProvider){
  $stateProvider
  .state("entriesIndex", {
    url: "/entries",
    templateUrl: "/entries/index.html",
    controller: "EntriesIndexController",
    controllerAs: "indexVm"
  })
  .state("entryShow", {
    url: "entries/:id",
    templateUrl: "/entries/show.html",
    controller: "EntriesShowController",
    controllerAs: "showVm"
  })
}

function EntriesIndexControllerFunction(){
  var indexVm = this
  indexVm.entries = hardcodedData
  indexVm.newEntry = {}

  indexVm.create = function(){
    hardcodedData.push(indexVm.newEntry)
    indexVm.newEntry = {}
  }
}

function EntriesShowControllerFunction($stateParams){
  var showVm = this
  showVm.entry = hardcodedData[$stateParams.id]
  showVm.update = function(){
    hardcodedData[$stateParams.id] = showVm.entry
  }
}
