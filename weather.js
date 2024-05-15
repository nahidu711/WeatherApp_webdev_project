const apikey="2ce76df8d0471ceb760145d2c67dec48";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkwether(cname){
    console.log(cname);
    let respons= await fetch(apiurl +cname+ `&appid=${apikey}`);
    if(respons.status==404 || respons.status==400){
     document.querySelector(".invalid").style.display="block";
     document.querySelector(".wether").style.display="none";
    }


    else{
      let data= await respons.json();
    console.log(data);
    document.querySelector(".invalid").style.display="none";
    document.querySelector(".wether").style.display="block";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

   if(data.weather[0].main=="Clear" || data.weather[0].main=="Clouds" || data.weather[0].main=="Drizzle"
    || data.weather[0].main=="Mist" || data.weather[0].main=="Rain" || data.weather[0].main=="Snow"  || data.weather[0].main=="Haze") 
    
  {
  
    document.querySelector(".weatherIcon").src="images/"+data.weather[0].main+".png";
  }
  
  else
  {

  } 

    }
    

  //document.querySelector(".wether").style.display="block";
}

const mybutton=document.getElementById("mybutton");
let dcname="Dhaka";
checkwether(dcname);
mybutton.onclick= function(){
   
            let cityname=document.getElementById("cityname").value;
            console.log(cityname);
            checkwether(cityname);



}