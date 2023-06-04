function counter(){

    var skyImgLoop = document.getElementById("skyImgLoop");
    var cloudImgLoop = document.getElementById("cloudImgLoop");
    var dayTimeImgLoop = document.getElementById("dayTimeImgLoop");
    var counter = document.getElementById("counter");

let i = 0;
let count = -1 ;

do {
  loop(i);
  i++;
} while (i <= 24);

function loop(i){
  setTimeout(function(){
    count++;
    counter.innerHTML = "Time: " + count + ":00 h"
    switch(count){
        case 0: case 1: case 2: 
      dayTimeImgLoop.src = "images/time-night.png";
      skyImgLoop.src = "images/weather-starry.png";
      cloudImgLoop.src = "images/cloud-sunset-cloudy.png";
      break;

        case 3: case 4: case 5: 
      dayTimeImgLoop.src = "images/time-night.png";
      skyImgLoop.src = "images/weather-dark.png";
      cloudImgLoop.src = "images/cloud-sunset-cloudy.png";
      break;
     
        case 6: case 7: 
      dayTimeImgLoop.src = "images/time-day.png";
      skyImgLoop.src = "images/weather-grey.png";
      cloudImgLoop.src = "images/cloud-sunset-cloudy.png";
      break;

        case 8: case 9: 
      dayTimeImgLoop.src = "images/time-day.png";
      skyImgLoop.src = "images/weather-grey.png";
      cloudImgLoop.src = "images/cloud-day-cloudy.png";
      break;

        case 10: case 11: case 12: case 13:
      dayTimeImgLoop.src = "images/time-day.png";
      skyImgLoop.src = "images/weather-sunny.png";
      cloudImgLoop.src = "images/cloud-day-cloudy.png";
      break;

        case 14: case 15:
      dayTimeImgLoop.src = "images/time-day.png";
      skyImgLoop.src = "images/weather-grey.png";
      cloudImgLoop.src = "images/cloud-day-windy.png";
      break;

        case 16: case 17:
      dayTimeImgLoop.src = "images/time-day.png";
      skyImgLoop.src = "images/weather-grey.png";
      cloudImgLoop.src = "images/cloud-day-rainy.png";
      break;

        case 18:
      dayTimeImgLoop.src = "images/time-day.png";
      skyImgLoop.src = "images/weather-sunny.png";
      cloudImgLoop.src = "images/cloud-sunset-cloudy.png";
      break;

        case 19: 
      dayTimeImgLoop.src = "images/time-sunset.png";
      skyImgLoop.src = "images/weather-sunset.png";
      cloudImgLoop.src = "images/cloud-sunset-cloudy.png";
      break;

        case 20:
      dayTimeImgLoop.src = "images/time-sunset.png";
      skyImgLoop.src = "images/weather-sunset2.png";
      cloudImgLoop.src = "images/cloud-sunset-cloudy.png";
      break;

        case 21: case 22: case 23:
      dayTimeImgLoop.src = "images/time-night.png";
      skyImgLoop.src = "images/weather-starry.png";
      cloudImgLoop.src = "images/cloud-sunset-cloudy.png";
      break;

        case 24:
      dayTimeImgLoop.src = "images/time-night.png";
      skyImgLoop.src = "images/weather-northernlights.png";
      cloudImgLoop.src = "images/cloud-sunset-cloudy.png";
      break;
    }}, 1000 * i);
}
}
 
    var skyImg = document.getElementById("skyImg");
    var cloudImg = document.getElementById("cloudImg");
    var dayTimeImg = document.getElementById("dayTimeImg");
    const skyDayOptions = ['choose','Sunny', 'Grey'];
    const skySunsetOptions = ['choose','Sunset-1','Sunset-2'];
    const skyNightOptions = ['choose','Starry','Dark','Northern-Lights'];
    const cloudDayOptions = ['choose','Cloudy', 'Windy', 'Rainy','Clean'];
    const cloudSunsetOptions = ['choose','Sunset-Cloudy','Clean'];


function updateSelectOptions() {

  sky.innerHTML = "";
  cloud.innerHTML = "";
  if (dayTime.value == "day") {
    skyDayOptions.forEach(e => sky.innerHTML += `<option value=${e}>${e}</option>`)
    cloudDayOptions.forEach(e => cloud.innerHTML += `<option value=${e}>${e}</option>`)
    dayTimeImg.style.display = "block";
    dayTimeImg.src = "images/time-day.png";
    skyImg.style.display = "none";
    cloudImg.style.display = "none";
    cloud.style.display = "inline";

  } 
  
  else if (dayTime.value == "sunset"){
    skySunsetOptions.forEach(e => sky.innerHTML += `<option value=${e}>${e}</option>`)
    cloudSunsetOptions.forEach(e => cloud.innerHTML += `<option value=${e}>${e}</option>`)
    dayTimeImg.style.display = "block";
    dayTimeImg.src = "images/time-sunset.png";
    skyImg.style.display = "none";
    cloudImg.style.display = "none";
    cloud.style.display = "inline";
  } 

  else if (dayTime.value == "night"){
    skyNightOptions.forEach(e => sky.innerHTML += `<option value=${e}>${e}</option>`)
    dayTimeImg.style.display = "block";
    dayTimeImg.src = "images/time-night.png";
    skyImg.style.display = "none";
    cloudImg.style.display = "none";
    cloud.style.display = "none";
  }

  else if(dayTime.value === ""){
    dayTimeImg.style.display = "none";
    skyImg.style.display = "none";
    cloudImg.style.display = "none";

  }

}
dayTime.addEventListener('change', updateSelectOptions);
sky.addEventListener('change', updateSelectOptions2);
cloud.addEventListener('change', updateSelectOptions3);


var sky2 = document.getElementById("sky");

function updateSelectOptions2(){

    var choiceSky = sky2.value;

switch(choiceSky){
    case'Dark':
    skyImg.style.display = 'block';
    skyImg.src = "images/weather-dark.png";
    break;
    case'Grey':
    skyImg.style.display = 'block';
    skyImg.src = "images/weather-grey.png";  
    break;                 
    case'Northern-Lights':             
    skyImg.style.display = 'block';                 
    skyImg.src = "images/weather-northernlights.png";                
    break;                
    case'Starry':             
    skyImg.style.display = 'block';              
    skyImg.src = "images/weather-starry.png";              
    break;           
    case'Sunny':             
    skyImg.style.display = 'block';              
    skyImg.src = "images/weather-sunny.png";              
    break;               
    case'Sunset-1':                
    skyImg.style.display = 'block';             
    skyImg.src = "images/weather-sunset.png";              
    break;              
    case'Sunset-2':               
    skyImg.style.display = 'block';               
    skyImg.src = "images/weather-sunset2.png";                 
    break;                 
    default:           
    skyImg.style.display = 'none';          
}

}

var cloud2 = document.getElementById("cloud");

function updateSelectOptions3(){
    var choiceCloud = cloud2.value;

    switch(choiceCloud){
        case'Cloudy':
        cloudImg.src = "";
        cloudImg.style.display = 'block';
        cloudImg.src = "images/cloud-day-cloudy.png";
        break;
        case'Windy':
        cloudImg.src = "";
        cloudImg.style.display = 'block';
        cloudImg.src = "images/cloud-day-windy.png";
        break;
        case'Rainy':
        cloudImg.src = "";
        cloudImg.style.display = 'block';
        cloudImg.src = "images/cloud-day-rainy.png";
        break;
        case'Sunset-Cloudy':
        cloudImg.src = "";
        cloudImg.style.display = 'block';
        cloudImg.src = "images/cloud-sunset-cloudy.png";
        break;
        default:
        cloudImg.style.display = 'none';    
    }
}



