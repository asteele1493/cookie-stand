'use strict';

// operating hours array
let op_hours = [`6 am`, `7 am `, `8 am`, `9 am`, `10 am`, `11 am`, `12 pm`, `1 pm`, `2 pm`, `3 pm`, `4 pm`, `5 pm`, `6 pm`, `7 pm`];

// stores array; uncomment when constructors are in place?
//let stores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];


//customer per hour generator
function custPerHour(min, max){
  return Math.random;
}

//random number generator
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

//cookie sales per hour generator?
// move to inside object. Cannot access randomCustNumber before initialization.
function hourlySales(){
  for (let i = 0; i < op_hours.length; i++){
    console.log(op_hours);
    let getRandomCust = getRandomNumber(this.min_cust, this.max_cust);
    let cookieSales = Math.ceil((this.randomCustNumber*this.avg_cookie));
    hourlySales.push(cookieSales);
    console.log(hourlySales);
  }
}

//daily sales by store function?
function dailySales(){
  for (let j = 0; j < op_hours.length; j++){
    let sum = 0;
    sum += this.cookieSales[i].dailySales;
    console.log (dailySales());
  }
  console.log(sum);
}

//custPerHour.store = Math.random

// First location object

let Seattle = {
  name: 'Seattle',
  min_cust : 23,
  max_cust : 65,
  avg_cookie : 6.3,
  randomCustNumber : function(){
    return getRandomNumber(this.min_cust, this.max_cust);
  }, 
  dailyCookieSales : [],
  hourlySales : function(){
    for (let i = 0; i < op_hours.length; i++){
      console.log(op_hours);
      let cookieSales = Math.ceil((this.randomCustNumber()*this.avg_cookie));
      this.dailyCookieSales.push(cookieSales);
    }
  },
  dailySales : function(){
    let sum = 0;
    for (let j = 0; j < op_hours.length; j++){
      sum += this.dailyCookieSales[j];
    }
    return sum;
  }
  };

Seattle.hourlySales();
console.log(Seattle);
console.log(Seattle.randomCustNumber());
console.log(Seattle.dailySales());
console.log(Seattle.dailyCookieSales);

let parentElement = document.getElementById('salesData');
let article = document.createElement('sales1');
article.innerText = Seattle.dailyCookieSales;
article.appendChild('sales1');

// Second location object

let Tokyo = {
  name: 'Tokyo',
  min_cust : 3,
  max_cust : 24,
  avg_cookie : 1.2,
  randomCustNumber : function(){
    return getRandomNumber(this.min_cust, this.max_cust);
  },
  dailyCookieSales : [],
  hourlySales : function(){
    for (let i = 0; i < op_hours.length; i++){
      console.log(op_hours);
      let cookieSales = Math.ceil((this.randomCustNumber()*this.avg_cookie));
      this.dailyCookieSales.push(cookieSales);
    }
  },
  dailySales : function(){
    let sum = 0;
    for (let j = 0; j < op_hours.length; j++){
      sum += this.dailyCookieSales[j];
    }
    return sum;
  }
}; 

Tokyo.hourlySales();
console.log(Tokyo);
console.log(Tokyo.randomCustNumber());
console.log(Tokyo.dailySales());
console.log(Tokyo.dailyCookieSales);


// // Third location object

let Dubai = {
  name: 'Dubai',
  min_cust : 11,
  max_cust : 38,
  avg_cookie : 3.7,
  randomCustNumber : function(){
    return getRandomNumber(this.min_cust, this.max_cust);
  },
  dailyCookieSales : [],
  hourlySales : function(){
    for (let i = 0; i < op_hours.length; i++){
      console.log(op_hours);
      let cookieSales = Math.ceil((this.randomCustNumber()*this.avg_cookie));
      this.dailyCookieSales.push(cookieSales);
    }
  },
  dailySales : function(){
    let sum = 0;
    for (let j = 0; j < op_hours.length; j++){
      sum += this.dailyCookieSales[j];
    }
    return sum;
  }
  };

  Dubai.hourlySales();
  console.log(Dubai);
  console.log(Dubai.randomCustNumber());
  console.log(Dubai.dailySales());
  console.log(Dubai.dailyCookieSales);


// // Fourth location object

let Paris = {
  name: 'Paris',
  min_cust : 20,
  max_cust : 38,
  avg_cookie : 2.3,
  randomCustNumber : function(){
    return getRandomNumber(this.min_cust, this.max_cust);
  },
  dailyCookieSales : [],
  hourlySales : function(){
    for (let i = 0; i < op_hours.length; i++){
      console.log(op_hours);
      let cookieSales = Math.ceil((this.randomCustNumber()*this.avg_cookie));
      this.dailyCookieSales.push(cookieSales);
    }
  },
  dailySales : function(){
    let sum = 0;
    for (let j = 0; j < op_hours.length; j++){
      sum += this.dailyCookieSales[j];
    }
    return sum;
  }
  };

  Paris.hourlySales();
  console.log(Paris);
  console.log(Paris.randomCustNumber());
  console.log(Paris.dailySales());
  console.log(Paris.dailyCookieSales);


// // Fifth location object

let Lima = {
  name: 'Lima',
  min_cust : 2,
  max_cust : 16,
  avg_cookie : 4.6,
  randomCustNumber : function(){
    return getRandomNumber(this.min_cust, this.max_cust);
  },
  dailyCookieSales : [],
  hourlySales : function(){
    for (let i = 0; i < op_hours.length; i++){
      console.log(op_hours);
      let cookieSales = Math.ceil((this.randomCustNumber()*this.avg_cookie));
      this.dailyCookieSales.push(cookieSales);
    }
  },
  dailySales : function(){
    let sum = 0;
    for (let j = 0; j < op_hours.length; j++){
      sum += this.dailyCookieSales[j];
    }
    return sum;
  }
  };

  Lima.hourlySales();
  console.log(Lima);
  console.log(Lima.randomCustNumber());
  console.log(Lima.dailySales());
  console.log(Lima.dailyCookieSales);

//Constructor ideas
function Store (name, min_cust, max_cust, avg_cookie) {
  this.name = name;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookie = avg_cookie;
}

//Method ideas for constructor?
Store.prototype.randomCustNumber = function(){
  return getRandomNumber(this.min_cust, this.max_cust);
}

Store.prototype.hourlySales = function(){
  for (let i = 0; i < op_hours.length; i++){
    console.log(op_hours);
    let cookieSales = Math.ceil((this.randomCustNumber()*this.avg_cookie));
    this.dailyCookieSales.push(cookieSales);
  }
}

Store.prototype.dailySales = function(){
  let sum = 0;
  for (let j = 0; j < op_hours.length; j++){
    sum += this.dailyCookieSales[j];
  }
  return sum;
}

//Writing this out for myself
// Step 01: Select parent element
// Step 02: Create element with document.createElement()
// Step 03: Fill it with text with element.innerText property
// Step 04: append/appendChild

//let li = document.createElement('li');
//li.innerText = "";
//FileList.appendChild(li);
