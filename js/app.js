'use strict';

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var mySeattle = document.getElementById('seattle');
var myTokyo = document.getElementById('tokyo');
var myParis = document.getElementById('paris');
var myDubai = document.getElementById('dubai');
var myLima = document.getElementById('lima');

// console.log(mySeattle);

//1st object - get it to work

var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,
  //successfully get random number between min and max
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  //populate hourlySales array
  calculateHourlySales() {
    // console.log(this.getRandomNumber());
    for (var i = 0; i < hours.length; i++) {
      // var calcSales = this.getRandomNumber() * this.avg;
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },
  //render my list with total at the end
  render: function () {
    this.calculateHourlySales();
    // console.log(seattleStore);
    for (var i = 0; i < this.hourlySales.length; i++) {
      //proof I can get here
      // console.log('inside render method');
      var liElement = document.createElement('li');
      // liElement.textContent = this.hours;
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies`;
      mySeattle.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = ` ${this.dailyTotal} total`;
    mySeattle.appendChild(liElement);
  }
};

//2 object - get it to work

var tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  hourlySales: [],
  dailyTotal: 0,

  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },
  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      console.log('inside render method');
      var liElement = document.createElement('li');
      myTokyo.appendChild(liElement);
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies`;
    }
    liElement = document.createElement('li');
    liElement.textContent = ` ${this.dailyTotal} total`;
    myTokyo.appendChild(liElement);
  }
};

// //3rd object - get it to work
var parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  hourlySales: [],
  dailyTotal: 0,

  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },
  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      console.log('inside render method');
      var liElement = document.createElement('li');
      myParis.appendChild(liElement);
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies`;
    }
    liElement = document.createElement('li');
    liElement.textContent = ` ${this.dailyTotal} total`;
    myParis.appendChild(liElement);
  }
};

// //4th object
var dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },
  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      console.log('inside render method');
      var liElement = document.createElement('li');
      myDubai.appendChild(liElement);
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies`;
    }
    liElement = document.createElement('li');
    liElement.textContent = ` ${this.dailyTotal} total`;
    myDubai.appendChild(liElement);
  }
};

// //5th object - get it to work

var limaStore = {
  name: 'Lima',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },
  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      console.log('inside render method');
      var liElement = document.createElement('li');
      myLima.appendChild(liElement);
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies`;
    }
    liElement = document.createElement('li');
    liElement.textContent = ` ${this.dailyTotal} total`;
    myLima.appendChild(liElement);
  }
};


// do the thing
seattleStore.render();
tokyoStore.render();
parisStore.render();
dubaiStore.render();
limaStore.render();
