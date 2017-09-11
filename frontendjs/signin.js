function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log(profile.getName());
  var name = profile.getName();
  document.getElementById("PRELOGIN").style.height = "0";
  document.getElementById("USERFRONTPAGE").style.height = "100%";
  document.getElementById("UsernameReplace").innerHTML = name;
  if (name == "Ed Chen") {
    document.getElementById("Subtitle2").innerHTML = "You need to work on this ._.";
  }
  if (name == "Nicholas Tang") {
    document.getElementById("Subtitle2").innerHTML = "Hello MetalButt how are u doing today ;-;";
  }
}
