var city=document.querySelector("#city")
var btn=document.querySelector("#btn")
var temp=document.querySelector("#temp-value")
var icon=document.querySelector("#temp-icon")
// var cityName=document.querySelector("#location")
var weather=document.querySelector("#weather")
var locationCity=document.querySelector("#location-city")
var locationCountry=document.querySelector("#location-country")

btn.addEventListener("click",()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=f8b166e3abd20b0ade3f35926e52571b`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        temp.innerHTML=(data.main.temp-273.15).toFixed(2);
        locationCity.innerHTML=data.name;
        locationCountry.innerHTML=data.sys.country;
        weather.innerHTML=data.weather[0].description;
        var id=data.weather[0].id
        console.log(data.weather[0].id);
        if(id<250){
            icon.src='./icons/storm.svg'
        }
        else if(id<350){
            icon.src='./icons/drizzle.svg'
        }
        else if(id<550){
            icon.src='./icons/rain.svg'
        }
        else if(id<650){
            icon.src='./icons/snow.svg'
        }
        else if(id<800){
            icon.src='./icons/atmosphere.svg'
        }
        else if(id==800){
            icon.src='./icons/sun.svg'
        }
        else if(id>800){
            icon.src='./icons/clouds.svg'
        }
        console.log(data);
    })

})
