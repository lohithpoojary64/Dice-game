   document.querySelector("h1").style.color = "white";
   var randomNumber1 = Math.floor( (Math.random()*6) + 1);
  randomImage = "dice" + randomNumber1 + ".png";
  randomImageSource = "images/" + randomImage;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src",randomImageSource);
  var randomNumber2 =Math.floor( (Math.random()*6) + 1);
  randomNumber2 = Math.floor(randomNumber2);
  randomImage2 = "dice" + randomNumber2 + ".png";
  randomImageSource1 = "images/" + randomImage2;
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src",randomImageSource1);


  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 wins";
  }else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 wins";
  }else{
    document.querySelector("h1").innerHTML = "Draw";
  }
