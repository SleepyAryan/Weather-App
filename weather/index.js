var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var namep = document.querySelector('.namep');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var icon = document.querySelector('.img');
var precval = document.querySelector('.prec');
var speedval =document.querySelector('.speed');
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;

    // console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
button.addEventListener('click',function()
{
    // fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=064736e0570b6dd7d594abebc747e003')
    fetch('https://api.weatherbit.io/v2.0/current?city='+inputValue.value+'&key=723bb978d71547738fdd4cd7009ab04d&include=minutely')
.then(response => response.json())
//current location
//search
.then(data => {
    console.log(data);
    console.log(data['data']['0']['app_temp']);
    console.log(data['data']['0']['weather']['description'])
     console.log(data['data']['0']['city_name'])
     console.log(data['data']['0']['weather']['icon'])
     console.log(data['data']['0']['wind_spd'])
     console.log(data['data']['0']['precip'])
    var tempValue = data['data']['0']['app_temp'];
    var descValue = data['data']['0']['weather']['description'];
    var nameValue = data['data']['0']['city_name'];
    var speedvalue = data['data']['0']['wind_spd'];
    var precvalue = data['data']['0']['precip'];
    namep.innerHTML=nameValue;
    desc.innerHTML=descValue;
    temp.innerHTML=tempValue + "° Celsius";
    speedval.innerHTML="Wind Speed: "+speedvalue+" Miles Per Hour";
    precval.innerHTML="Rainfall: " + precvalue + "cm";
    // var img = document.createElement('imge');
    // img.src='https://www.weatherbit.io/static/img/icons/'+icon+'.png';
    // document.getElementsByClassName('imge').appendChild(img);
})

.catch(err => alert("error wrong city idiot"))

})
