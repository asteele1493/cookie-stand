'use strict';

// operating hours array
let op_hours = [`6 am`, `7 am `, `8 am`, `9 am`, `10 am`, `11 am`, `12 pm`, `1 pm`, `2 pm`, `3 pm`, `4 pm`, `5 pm`, `6 pm`, `7 pm`];

//stores array; uncomment when constructors are in place?
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

//DOM Sales data for Seattle
let list = document.getElementById('sea');
let p = document.createElement('p');
p.innerText = "Seattle";
list.appendChild(p);

let salesList = document.getElementById('seaSales');
  for (let i = 0; i < this.dailySales.length; i++) {
    let li = document.createElement('li');
    li.textContent = this.dailySales[i];
    salesList.appendChild(li);
  }

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
let list1 = document.getElementById('tok');
let p1 = document.createElement('p');
p1.innerText = "Tokyo";
list1.appendChild(p1);


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

let list2 = document.getElementById('dub');
let p2 = document.createElement('p');
p2.innerText = "Dubai";
list2.appendChild(p2);

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
  
let list3 = document.getElementById('par');
let p3 = document.createElement('p');
p3.innerText = "Paris";
list3.appendChild(p3);

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

let list4 = document.getElementById('lim');
let p4 = document.createElement('p');
p4.innerText = "Lima";
list4.appendChild(p4);


//Constructor ideas
// function Store(name, min_cust, max_cust, avg_cookie, randomCustNumber, dailyCookieSales, hourlySales, dailySales) {
//   this.name = name;
//   this.min_cust = min_cust;
//   this.max_cust = max_cust;
//   this.avg_cookie = avg_cookie;
//   this.randomCustNumber = randomCustNumber;
//   this.dailyCookieSales = dailyCookieSales;
//   this.hourlySales = hourlySales; 
//   this.dailySales = dailySales;
//   allStores.push(this);
// }

