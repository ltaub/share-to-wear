/* FACEBOOK LOGIN*/
// var express = require('express');
// var app = express();

// var provider = new firebase.auth.FacebookAuthProvider();
// firebase.auth().signInWithPopup(provider).then(function(result){
//   var token = result.credential.accessToken;
//   var user = result.user;
// }).catch(function(error){
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   var email = error.email;
//   var credential = error.credential;
// });

function statusChangeCallback(response){
  console.log('statusChangeCallBack');
  console.log(response);
  if(response.status === 'connected'){
    console.log('you are conected!');
    var str = 'You are logged in! Start Browsing!';
    var result = str.link("landing1.html");
    document.getElementById('proceed').innerHTML = result;

  //   function writeUserData(userId, name, email, imageUrl) {
  // firebase.database().ref('users/' + userId).set({
  //   username: name,
  //   email: email,
  //   profile_picture : imageUrl
  // });
  // }


  } else if(response.status === 'not_authorized'){
    console.log('logged into fb not app');
  }
}

function checkLoginState(){
  FB.getLoginStatus(function(response){
    statusChangeCallback(response);
  });
}

//Declaring FB so we can call FB.getLoginStatus
window.fbAsyncInit = function() {
  FB.init({
    appId      : '254018811685965',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
  FB.getLoginStatus(function(response){
    statusChangeCallback(response);
  });
};

function logout(){
  FB.logout(function(response){
    console.log('logged out!');
  })
}

// FB.getLoginStatus(function(response){
//   statusChangeCallback(response);
// });

//Loads the SDK
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
