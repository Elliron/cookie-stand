'use strict';

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
var salmonTable = document.getElementById('salmon-table');

// Constructor Functions

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailyTotal = 0;
  allStores.push(this);
}

//random number generator
Store.prototype.getRandomNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

//populate hourlySales array
Store.prototype.calculateHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
    this.hourlySales[i] = calcSalesRound;
    this.dailyTotal += calcSalesRound;
  }
};

//prototype methods
Store.prototype.renderRow = function () {
  this.calculateHourlySales();
  var trElement = document.createElement('tr');
  salmonTable.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);
  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
};

function renderHeader() {
  var tHead = document.createElement('thead');
  salmonTable.appendChild(tHead);
  var trElement = document.createElement('tr');
  tHead.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = ('');
  trElement.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = (hours[i]);
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = ('Total');
  trElement.appendChild(thElement);
}



//instantiations
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);


//render
renderHeader();
seattle.renderRow();
tokyo.renderRow();
dubai.renderRow();
paris.renderRow();
lima.renderRow();