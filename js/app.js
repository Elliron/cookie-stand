'use strict';

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
var salmonTable = document.getElementById('salmon-table');
var storeForm = document.getElementById('newStoreLoc');
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
    this.hourlySales.push(calcSalesRound);
    this.dailyTotal += calcSalesRound;
  }
};

//Add Store Form

storeForm.addEventListener('submit',
  function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var min = event.target.min.value;
    var max = event.target.max.value;
    var avg = event.target.avg.value;

    var newStore = new Store(name, min, max, avg);
    newStore.calculateHourlySales();
    salmonTable.innerHTML = '';
    renderAll();
  }
);

//prototype methods
Store.prototype.renderRow = function () {
  // this.calculateHourlySales();
  var trElement = document.createElement('tr');
  salmonTable.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
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

// function renderFooter() {
function calculateStoreTotals() {
  var totalOfTotals = 0;
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'All Totals';
  trElement.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    var totalHourTotals = 0;
    for (var j = 0; j < allStores.length; j++) {
      totalHourTotals += allStores[j].hourlySales[i];
      totalOfTotals += allStores[j].hourlySales[i];
    }
    thElement = document.createElement('th');
    thElement.textContent = totalHourTotals;
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = totalOfTotals;
  trElement.appendChild(thElement);
  salmonTable.appendChild(trElement);
}



//instantiations
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);
for (var i = 0; i < allStores.length; i++) {
  allStores[i].calculateHourlySales();
}

//render
function renderAll() {
  renderHeader();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].renderRow();
    console.log(allStores[i]);
  }
  calculateStoreTotals();
}

renderAll();
