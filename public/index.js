'use strict';

//list of bats
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const bars = [{
  'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'name': 'freemousse-bar',
  'pricePerHour': 50,
  'pricePerPerson': 20
}, {
  'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'name': 'solera',
  'pricePerHour': 100,
  'pricePerPerson': 40
}, {
  'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'name': 'la-poudriere',
  'pricePerHour': 250,
  'pricePerPerson': 80
}];

//list of current booking events
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful from step 4
const events = [{
  'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'booker': 'esilv-bde',
  'barId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'time': 4,
  'persons': 8,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'privateaser': 0
  }
}, {
  'id': '65203b0a-a864-4dea-81e2-e389515752a8',
  'booker': 'societe-generale',
  'barId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'time': 8,
  'persons': 30,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'privateaser': 0
  }
}, {
  'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'booker': 'otacos',
  'barId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'time': 5,
  'persons': 80,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'privateaser': 0
  }
}];

//list of actors for payment
//useful from step 5
const actors = [{
  'eventId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'payment': [{
    'who': 'booker',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'bar',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'privateaser',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'eventId': '65203b0a-a864-4dea-81e2-e389515752a8',
  'payment': [{
    'who': 'booker',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'bar',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'privateaser',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'eventId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'payment': [{
    'who': 'booker',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'bar',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'privateaser',
    'type': 'credit',
    'amount': 0
  }]
}];

// console.log(bars);
// console.log(events);
// console.log(actors);

//⌚ Step 1 - Euro-People
var booking_price1=[];
for (var i = 0 ; i<events.length ; i++){
  var booking_price_id = events[i].barId;
  for (var j = 0 ; j<bars.length ; j++){
    if (booking_price_id == bars[j].id){
      let obj = new Object();
      obj["id"] = events[i].id;
      obj["price"] = events[i].time * bars[j].pricePerHour + events[i].persons * bars[j].pricePerPerson;
      booking_price1.push(obj);
    }
  }
}
console.log(booking_price1);

//🍺 Step 2 - Send more, pay less
var booking_price2=[];
for (var i = 0 ; i<events.length ; i++){
  var booking_price_id = events[i].barId;
  for (var j = 0 ; j<bars.length ; j++){
    if (booking_price_id == bars[j].id){
      let obj = new Object();
      var decreases = 1 ;
      obj["id"] = events[i].id;
      if ( events[i].persons>=10){
        decreases=0.9;
        if(events[i].persons>=20){
          decreases=0.7;
          if(events[i].persons>=60){
            decreases=0.5;
          }
        }
      }
      obj["price"] = events[i].time * bars[j].pricePerHour + events[i].persons * bars[j].pricePerPerson;
      obj["price"]=obj["price"]*decreases;
      booking_price2.push(obj);
    }
  }
}
console.log(booking_price2);

//💰 Step 3 - Give me all your money
var booking_price3=[];
for (var i = 0 ; i<events.length ; i++){
  var booking_price_id = events[i].barId;
  for (var j = 0 ; j<bars.length ; j++){
    if (booking_price_id == bars[j].id){
      let obj = new Object();
      var decreases = 1 ;
      obj["id"] = events[i].id;
      if ( events[i].persons>=10){
        decreases=0.9;
        if(events[i].persons>=20){
          decreases=0.7;
          if(events[i].persons>=60){
            decreases=0.5;
          }
        }
      }
      obj["price"] = events[i].time * bars[j].pricePerHour + events[i].persons * bars[j].pricePerPerson;
      obj["price"]=obj["price"]*decreases;
      var commission = obj["price"] * 0.3;
      var insurance = commission*0.5;
      var treasury = 1;
      var privateaser = commission-insurance-treasury;
      var obj_commission = new Object();
      obj_commission["insurance"] = insurance;
      obj_commission["treasury"] = treasury;
      obj_commission["privateaser"] = privateaser;
      obj["commission"] = obj_commission
      booking_price3.push(obj);
    }
  }
}
console.log(booking_price3);

//💸 Step 4 - The famous deductible
var booking_price4=[];
for (var i = 0 ; i<events.length ; i++){
  var booking_price_id = events[i].barId;
  for (var j = 0 ; j<bars.length ; j++){
    if (booking_price_id == bars[j].id){
      let obj = new Object();
      var decreases = 1 ;
      obj["id"] = events[i].id;
      if ( events[i].persons>=10){
        decreases=0.9;
        if(events[i].persons>=20){
          decreases=0.7;
          if(events[i].persons>=60){
            decreases=0.5;
          }
        }
      }
      obj["price"] = events[i].time * bars[j].pricePerHour + events[i].persons * bars[j].pricePerPerson;
      
      var obj_options = new Object();
      obj_options["deductibleReduction"]=events[i].options.deductibleReduction;
      obj["options"]=obj_options;
      if(events[i].options.deductibleReduction==true){
        obj["price"]=obj["price"]+events[i].persons;
      }
      obj["price"]=obj["price"]*decreases;
      booking_price4.push(obj);
    }
  }
}
console.log(booking_price4);


