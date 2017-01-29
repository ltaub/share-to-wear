

var ref = firebase.database().ref();
ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   var dresses = snapshot.val().dresses;
   console.log(dresses);
   var propValue;
   for(var propName in dresses) {
     propValue = dresses[propName];
     var div = document.getElementById('append_data');
     var new_div = document.createElement('div');
     var att1 = document.createAttribute('class');
     att1.value = 'col-sm-4 col-lg-4 col-md-4'
     new_div.setAttributeNode(att1);
     new_div.innerHTML =   '<div class="thumbnail">\
           <img src="../img/dress_example.jpg" alt="">\
           <div class="caption">\
               <h4><a  href = "item.html?id='+propValue.name_dress+'" class = "description">'+propValue.description+'</a>\
               <br>\
               <h4 class="pull-right">$'+propValue.rentPrice+'</h4>\
               </h4>\
               <h4>'+propValue.size+'</h4>\
               <br>\
               <button type = "button" class = "btn btn-secondary btn-sm block-center closet" onclick = onclick="changeImage(&quot;'+propValue.name_dress+'&quot;)" >Add to your Closet!</button>\
           </div>\
       </div>'
       div.appendChild(new_div);
   };

}, function (error) {
   console.log("Error: " + error.code);
});

function add(dress){
  console.log(dress);
  // var buttons = document.getElementsByClassName('closet');
  // console.log(buttons);
}
