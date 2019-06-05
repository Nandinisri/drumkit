for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var hold = this.innerHTML;
    palySound(hold);
  });
}


document.addEventListener("keypress",function(e){
  console.log(e);
});

function palySound(param){
  switch (param) {
    case "w":
      var x = new Audio("crash.mp3");
      x.play();
      break;
    case "a":
      var x = new Audio("kick-bass.mp3");
      x.play();
      break;
    case "s":
      var x = new Audio("snare.mp3");
      x.play();
      break;
    case "d":
      var x = new Audio("tom-1.mp3");
      x.play();
      break;
    case "j":
      var x = new Audio("tom-2.mp3");
      x.play();
      break;
    case "k":
      var x = new Audio("tom-3.mp3");
      x.play();
      break;
    case "l":
      var x = new Audio("tom-4.mp3");
      x.play();
      break;
    default:
      console.log(hold);

  }
}
