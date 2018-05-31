var divs = document.getElementsByTagName('div')
var smile=document.getElementsByName('smile')
var colorBtn=document.getElementById('color')
var resetBtn=document.getElementById('reset')
function getRandomColor(){ //from stack overflow, doesnt change saturation, hue, or brightness
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];//gives unique color ID #XXXXXX in string format
    }
    return color;    
}
var time
function setRandomColor() { //grabs the box and sets the background color of it to random
   // var divs = document.getElementsByClassName('one')
    for(var i=0; i<divs.length;i++){
        divs[i].style.backgroundColor= getRandomColor()
    }
  }
  function repeat(){
        colorBtn.disabled=true
        setRandomColor()

        console.log(time)
        
       
        time = setInterval(setRandomColor,1500)
       
  }
  function smiley(){
    resetColor()
    for(var i=0; i<smile.length;i++){
      smile[i].style.backgroundColor= 'yellow'
    }
  }
  

  function resetColor(){//changes box color to black
    colorBtn.disabled=false
    window.clearInterval(time)
    for(var i=0; i<divs.length;i++){
        divs[i].style.backgroundColor= '#000000'
    }
  }
  