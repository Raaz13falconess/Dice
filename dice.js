var x  = Math.floor(Math.random() * 6) + 1;
var randImage1 = "images/roll" + x + ".webp";
 document.getElementById('img1').src = randImage1;  
 var y  = Math.floor(Math.random() * 6) + 1;
 var randImage2 = "images/roll" + y + ".webp";
  document.getElementById('img2').src = randImage2;  
 
  if(x>y) 
  {
      document.getElementById("result").innerHTML = "Player 1 Wins";
  }
  else if( y> x)
  {
    document.getElementById("result").innerHTML = "Player 2 Wins";
  }
  else 
  {
    document.getElementById("result").innerHTML = "Hey! It's a Draw";
  }
