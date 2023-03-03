function changeLikeColor() {
    console.log("salutr");
    var button = document.getElementById("like-button");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
    } else {
        button.classList.add("clicked");
        
    }
  }