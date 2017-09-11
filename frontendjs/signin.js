function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log(profile.getName());
  var name = profile.getName();
  $("#body").load("userpage.html");
  document.getElementById("UsernameReplace").innerHTML = name;
  if (name == "Ed Chen") {
    document.getElementById("Subtitle2").innerHTML = "You need to work on this ._.";
  }
  if (name == "Nicholas Tang") {
    document.getElementById("Subtitle2").innerHTML = "Hello MetalButt how are u doing today ;-;";
  }
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
