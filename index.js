var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var output2 = document.getElementById("profit")
var mult = 'select a value';
var profit = 0;

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var start_value = slider.getAttribute("value");
var x = 0;
var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
slider.style.background = color;

slider.addEventListener("mousemove", function() {
    x = slider.value;
    color = 'linear-gradient(90deg, rgb(117, 252, 117) 5% , rgb(214, 214, 214)' + x + '%)';
    slider.style.background = color;
    profit = slider.value*mult;
    output2.innerHTML= profit    
    

});


function selectSpace(){
  var option = document.querySelector('#options');
  var space = option.selectedIndex;

  switch(space){
    case 0:
      console.log('select a value');
      mult='select a value'
      break;
    case 1:
     console.log('Space is Selected');
      mult = 5;
      break;
    case 2:
      console.log('garage is selected');
      mult = 6;
      break;
   case 3:
     console.log('other is selected');
     mult = 4;     
  }
  var rate = document.getElementById('rate')
  rate.innerHTML = mult
  
}

console.log(rate);