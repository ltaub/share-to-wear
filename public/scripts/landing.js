

//Declaring FB so we can call FB.getLoginStatus
window.fbAsyncInit = function() {
  FB.init({
    appId      : '254018811685965',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
  FB.getLoginStatus(function(response){
    //statusChangeCallback(response);
    getUserInfo();
  });

 };

function logout(){
  FB.logout(function(response){
    console.log('logged out!');
    document.getElementById('userInfo').innerHTML = 'You have been logged out!';
    var stateObj = {state: 'logout'};
    history.pushState(stateObj, "", "logout.html"); //changes url
    location.reload();  //reloads page
  })
}

function getUserInfo(){
  console.log('called');
  FB.api("/me",function (response) {
    if (response && !response.error) {
      console.log(response);
      document.getElementById('userInfo').innerHTML = response.name;
    }
  });
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
