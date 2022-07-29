'use strict'

// operating hours array
let op_hours = [`6 am`, `7 am `, `8 am`, `9 am`, `10 am`, `11 am`, `12 pm`, `1 pm`, `2 pm`, `3 pm`, `4 pm`, `5 pm`, `6 pm`, `7 pm`, `8 pm`];

//customer per hour generator
function cust_per_hour(min, max){
  return Math.random;
}

cust_per_hour.store = Math.random; 

//random number generator
function randomNum(min, max){
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}

// First location object

let Seattle = {
  name: 'Seattle',
  class: 'Store', 
  min_cust : 23,
  max_cust : 65,
  avg_cookie : 6.3,
  cust_per_hour.Seattle : randomNum,
  cookie_per_hour : function() {
    return 
  },
  hoursOfOperation : op_hours,
};

console.log(Seattle);
console.log(Seattle.cust_per_hour);

// Second location object

let Tokyo = {
  name: 'Tokyo',
  class: 'Store', 
  min_cust : 3,
  max_cust : 24,
  avg_cookie : 1.2,
  cust_per_hour.Tokyo : randomNum,
  hoursOfOperation : op_hours,
}; 

console.log(Tokyo);

// // Third location object

let Dubai = {
  name: 'Dubai',
  class: 'Store', 
  min_cust : 11,
  max_cust : 38,
  avg_cookie : 3.7,
  cust_per_hour.Dubai : randomNum,
  hoursOfOperation : op_hours,
}; 

console.log(Dubai);

// // Fourth location object

let Paris = {
  name: 'Paris',
  class: 'Store', 
  min_cust : 20,
  max_cust : 38,
  avg_cookie : 2.3,
  cust_per_hour.Paris : randomNum,
  hoursOfOperation : op_hours,
};

console.log(Paris);

// // Fifth location object

let Lima = {
  name: 'Lima',
  class: 'Store', 
  min_cust : 2,
  max_cust : 16,
  avg_cookie : 4.6,
  cust_per_hour.Lima : randomNum,
  hoursOfOperation : op_hours
};

console.log(Lima);

//Writing this out for myself
// Step 01: Select parent element
// Step 02: Create element with document.createElement()
// Step 03: Fill it with text with element.innerText property
// Step 04: append/appendChild

//let li = document.createElement('li');
//li.innerText = "";
//FileList.appendChild(li);
