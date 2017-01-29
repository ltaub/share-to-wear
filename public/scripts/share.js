var ref = firebase.database().ref();

var user = "Shaw"
var userID = 522207;
console.log('share.js');
ref.on("value", function(snapshot) {
   var users = snapshot.val().users;
   var dresses = snapshot.val().dresses;
   var propValue;
   var dressValue;
   for(var dressName in dresses) {
    dressValue = dresses[dressName];
    if(dressValue.bannerwebID == userID){
      console.log(dressValue);
      var div = document.getElementById('append_data');
      var new_div = document.createElement('div');
      var att1 = document.createAttribute('class');
      att1.value = 'col-sm-4 col-lg-4 col-md-4';
      new_div.setAttributeNode(att1);
      new_div.innerHTML = '<div class="thumbnail">\
              <img src="../img/dress_example.jpg" alt="">\
              <div class="caption">\
                  <h4 class = "description">'+dressValue.description+'\
                  <br>\
                  <h4 class="pull-right">$'+dressValue.rentPrice+'</h4>\
                  </h4>\
                  <h4>'+dressValue.size+'</h4>\
                  <br>\
                  <h4> Rented X times</h4>\
              </div>\
          </div>'
      div.appendChild(new_div);
    };
  };
}, function (error) {
   console.log("Error: " + error.code);
});
