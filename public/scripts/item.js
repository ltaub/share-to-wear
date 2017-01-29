
// import React from 'react';
// import ReactDOM from 'react-dom';

var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
  var url = window.location.href;
  var start = url.indexOf("?")+4;
  var end = url.length + 1;
  var id = url.slice(start, end);
  console.log(id);
  var dresses = snapshot.val().dresses;
  var propValue;
  var item;
   for(var propName in dresses) {
     propValue = dresses[propName];
     if(propValue.name_dress == id){
       console.log(propValue);
       item = propValue;
     }
   }
   document.getElementById("itemName").innerHTML = item.description;
   document.getElementById("price").innerHTML = "$"+item.rentPrice;
   document.getElementById("size").innerHTML = item.size;
}, function (error) {
   console.log("Error: " + error.code);
});



// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );
