//!----------------------------A simplified explanation of the task in general------------------------------------//
/* first i need to know how i can get my position after search I found this function to git the location
navigator.geolocation.getCurrentPosition(success,error);
this fun take tow parameter both of them is callBack fun 
this fun return an object (coords) contains a lot of proparety i think i need (latitude,longitude)
finally to git the weather from API i need to put  the lat and long that i have from the geolocation fun
and in the body of url API  to git the right one

 ok i think i can solve it In two ways: Either by tracking the user's location and making it a dynamic process by
 using navigator.geolocation.watchPosition;
 or I get the user's current location and when his done when he out and want use the website agin
call the function agin to git his position
 i need to store lat and long from the function to use it in the weather api to make the process dynamic  */

//!-----------------------------------------------Global var and data from API----------------------------------//

// this variable to store the value from API
let lat;
let long;
let currentCity;

//this fun get current user location
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
        );
    });
}

// Usage
getCurrentLocation()
    .then((position) => {
        lat = position?.coords?.latitude;
        long = position?.coords?.longitude;
    })
    .catch((error) => {
        console.error("Error getting location: " + error.message);
    });


//!--------------------------------------------Start design the website-------------------------------------------//
//using Dom To Call body to Holds HTML element
const body = document.querySelector("body");


//!-------------------------------------------design search bar


// input felid to allow user git any city weather
const searchContainer=document.createElement("div")
searchContainer.id = "searchContainer";
body.append(searchContainer);

//create input field
const searchInput=document.createElement("input")
searchInput.id="searchInput"
searchInput.placeholder="another city"
searchContainer.append(searchInput)

// create button to submit search
const searchBtn=document.createElement("button")
searchBtn.innerText="Search"
searchBtn.id = "searchBtn";
searchContainer.append(searchBtn);
searchContainer.style.display="none"


// //!------------------------------------------- create welcome screen

// this div contain all element of welcome screen
const welcomeScreenContainer = document.createElement("div");
welcomeScreenContainer.id = "w-s-c";
body.append(welcomeScreenContainer);

// create logo  and start div inside the  welcomeScreenContainer
const logoContainer = document.createElement("div");
logoContainer.id = "logo-c";

// create img element inside the logoContainer to add website logo

const logo = document.createElement("img");
logo.id = "logo";
logo.src = "./assets/images/website-logo.png";
logoContainer.append(logo);

//create section to hold information about the website

const startContainer = document.createElement("section");
startContainer.id = "start-c";
// website name
const websiteName = document.createElement("h1");
websiteName.innerText = "Weather Wise Hub";
websiteName.id = "webSiteName";

//website Description

const websiteDescription = document.createElement("h3");
websiteDescription.id = "websiteDescription";
websiteDescription.innerText = "Weather App";

//create button to start the website
const startButton = document.createElement("button");
startButton.innerText = "start";
startButton.id = "start-btn";

// append all website info to the start container(section tag)
startContainer.append(websiteName, websiteDescription, startButton);
welcomeScreenContainer.append(logoContainer, startContainer);

// //!------------------------------------------- create main screen


//!-------------current weather&location card
const createMainScreen = (weather,forrest) => {
  
    
    // create div to holds all main screen HTML element
    const mainScreenContainer = document.createElement("div");
    mainScreenContainer.id = "m-s-c";
    body.append(mainScreenContainer);

    //create current location and weather information section

    const currentLocationContainer = document.createElement("section");

    currentLocationContainer.id = "currentLocationSection";
    mainScreenContainer.append(currentLocationContainer);


// input felid to allow user git any city weather
const searchContainer=document.createElement("div")
searchContainer.id = "searchContainer";
currentLocationContainer.append(searchContainer);



    //weather icon
    const imgContainer = document.createElement("div");
    imgContainer.id = "img-container";
    currentLocationContainer.append(imgContainer);
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    weatherIcon.id = "weatherIcon";
    imgContainer.append(weatherIcon);

    //temperature
    const temperature = document.createElement("h1");
    temperature.innerText = `${Math.round(weather.main.temp)}${String.fromCharCode(176)}C`;
    temperature.id = "temperature";
    currentLocationContainer.append(temperature);

    //user location
    const currentLocation = document.createElement("h1");
    currentLocation.innerText = `${weather.sys.country}`;
    currentLocation.id = "currentLocation";
    currentLocationContainer.append(currentLocation);

    //user city
    const currentCity = document.createElement("h3");
    currentCity.innerText = `${weather.name}`;
    currentCity.id = "currentCity";
    currentLocationContainer.append(currentCity);

    // weather humidity and wind speed this div holds tow section  ( wind speed and Humidity)

    const humAndWindContainer = document.createElement("div");
    humAndWindContainer.id = "H-W-C";
    currentLocationContainer.append(humAndWindContainer);

    //humidity section

    const humiditySection = document.createElement("section");

    humiditySection.id = "humidity";
    humAndWindContainer.append(humiditySection);

    const humidityVal = document.createElement("h1");
    humidityVal.innerText = `${weather.main.humidity
        }%`;
    humidityVal.id = "humidityVal";
    humiditySection.append(humidityVal);

    const humidityWord = document.createElement("h3");
    humidityWord.innerText = `Humidity`;
    humidityWord.id = "humidityWord";
    humiditySection.append(humidityWord);

    // wind section

    const windSection = document.createElement("section");

    windSection.id = "wind";
    humAndWindContainer.append(windSection);

    const windVal = document.createElement("h1");
    windVal.innerText = `${Math.round(weather.wind.speed)} km/h`;
    windVal.id = "windVal";
    windSection.append(windVal);

    const windWord = document.createElement("h3");
    windWord.innerText = `wind speed`;
    windWord.id = "windWord";
    windSection.append(windWord);


//!-------------forrest weather card

const forrestContainer = document.createElement("section");

forrestContainer.id = "forrestContainer";
mainScreenContainer.append(forrestContainer);

forrest?.forecast?.forecastday.forEach((ele,index)=>{

    const forrestInfo = document.createElement("div");
forrestInfo.id = "forrestInfo";
forrestContainer.append(forrestInfo);

const forrestDate = document.createElement("h4");
forrestDate.innerText = `${ele.date}`;
forrestDate.id = "forrestTemp";
forrestInfo.append(forrestDate);

const forrestIcon = document.createElement("img");
forrestIcon.src = `${ele?.day?.condition?.icon}`;
forrestIcon.id = "forrestIcon";
forrestInfo.append(forrestIcon);

const forrestText = document.createElement("h4");
forrestText.innerText = `${ele?.day?.condition?.text}`;
forrestText.id = "forrestText";
forrestInfo.append(forrestText);

const forrestTemp = document.createElement("h4");
forrestTemp.innerText = `Max ${Math.round(ele?.day?.maxtemp_c)
} °C / Min ${Math.round(ele?.day?.mintemp_c)
} °C ` ;
forrestTemp.id = "forrestTemp";
forrestInfo.append(forrestTemp);

})
};


//!------------------------------------error handel function


function showInvalidCityMessage() {
  
    document.querySelector("#searchContainer").style.display = "none";

   
    const devContainer = document.getElementById("dev-container");
    devContainer.classList.remove("hidden");

   
    const retryButton = document.getElementById("retry-button");
    retryButton.addEventListener("click", () => {
      location.reload()
    });
}




//!-------------------------------EventListener functions

document.querySelector("#start-btn").addEventListener("click", async () => {

    welcomeScreenContainer.style.display = "none";
    searchContainer.style.display="flex"

    //this fun to get weather data from Api accord the lat and long that i but it in the URL

    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=20df6ed2d3d499f39b1ec55b2f5a7406&units=metric`).then(res => res.json()).catch((err) => { console.log(err); }).catch(err => { console.log(err); })

    const forrest=await  fetch(`https://api.weatherapi.com/v1/forecast.json?key=1612951226954bf0ada164306232012&q=${weather.name}&days=4&aqi=no&alerts=no`).then(res=>res.json()).catch((err)=>{console.log(err);}).catch(err=>{console.log(err);})


    createMainScreen(weather,forrest);

});

document.querySelector("#searchInput").addEventListener("input",(e)=>{
   
    currentCity=e.target.value
})


document.querySelector("#searchBtn").addEventListener("click",async()=>{
    

       //this fun to get weather data from Api accord search bar 
//    document.querySelector("#m-s-c").style.display="none"
document.querySelector("#m-s-c").remove()

        const forrest = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=20df6ed2d3d499f39b1ec55b2f5a7406&units=metric`).then(res => res.json()).catch((err) => { console.log(err); }).catch(err => { console.log(err); })
        
        console.log(forrest.cod);
//error handel to 
if (forrest.cod==200) {
    const forrest2=await  fetch(`https://api.weatherapi.com/v1/forecast.json?key=1612951226954bf0ada164306232012&q=${forrest.name}&days=4&aqi=no&alerts=no`).then(res=>res.json(),
        ).catch((err)=>{console.log(err);}).catch(err=>{console.log(err);})
      
      // re render the function to get new data from api and show it

      
        createMainScreen(forrest,forrest2);
}else{
    showInvalidCityMessage();
}
        
       

})


