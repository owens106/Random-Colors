var divs = document.getElementsByClassName('one')
function getRandomColor(){ //from stack overflow, doesnt change saturation, hue, or brightness
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];//gives unique color ID #XXXXXX in string format
    }
    return color;    
}

function setRandomColor() { //grabs the box and sets the background color of it to random
   // var divs = document.getElementsByClassName('one')
    for(var i=0; i<divs.length;i++){
        divs[i].style.backgroundColor= getRandomColor()
    }
  }

  function resetColor(){//changes box color to black
    for(var i=0; i<divs.length;i++){
        divs[i].style.backgroundColor= '#000000'
    }
  }
  