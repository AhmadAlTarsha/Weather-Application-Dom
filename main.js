
/* first i need to know how i can get my position after search I found this function to git the location
navigator.geolocation.getCurrentPosition(success,error);
this fun take tow parameter both of them is callBack fun 
this fun return an object (coords) contains a lot of proparety i think i need (latitude,longitude)
finally to git the weather from API i need to compare the lat and long that i have from the geolocation fun
and return the object from API that match my coord to git the right one
 ok i think i can solve it In two ways: Either by tracking the user's location and making it a dynamic process by
 using navigator.geolocation.watchPosition;
 or I get the user's current location and when his done when he out and want use the website agin
/ call the function agin to git his position*/

// i need to store lat and long from the function to use it in the weather api to make the process dynamic  


//!--------------------------------------------Start design the website-------------------------------------------//

//using Dom To Call body to Holds HTML element
 const body =document.querySelector("body")


// //!------------------------------------------- create welcome screen

// // this div contain all element of welcome screen
// const welcomeScreenContainer=document.createElement("div")
// welcomeScreenContainer.id="w-s-c"
// body.append(welcomeScreenContainer)

// // create logo  and start div inside the  welcomeScreenContainer
// const logoContainer=document.createElement("div")
// logoContainer.id="logo-c"

// // create img element inside the logoContainer to add website logo 

// const logo=document.createElement("img")
// logo.id="logo"
// logo.src="./assets/images/website-logo.png"
// logoContainer.append(logo)

// //create section to hold information about the website

// const startContainer=document.createElement("section")
// startContainer.id="start-c"
// // website name
// const websiteName=document.createElement("h1")
// websiteName.innerText="Weather Wise Hub"
// websiteName.id="webSiteName"

// //website Description

// const websiteDescription=document.createElement("h3")
// websiteDescription.id="websiteDescription"
// websiteDescription.innerText="Weather App"

// //create button to start the website
// const startButton=document.createElement('button')
// startButton.innerText="start"
// startButton.id="start-btn"

// // append all website info to the start container(section tag)
// startContainer.append(websiteName,websiteDescription,startButton)
// welcomeScreenContainer.append(logoContainer,startContainer)


// //!----EventListener functions
// document.querySelector("#start-btn").addEventListener("click",()=>{
// //welcomeScreenContainer.style.display="none"
// })


// //!------------------------------------------- create main screen

// create div to holds all main screen HTML element
const mainScreenContainer=document.createElement("div")
mainScreenContainer.id="m-s-c"
body.append(mainScreenContainer)

//create current location and weather information section

const currentLocationContainer=document.createElement("section")

currentLocationContainer.id="currentLocationSection"
mainScreenContainer.append(currentLocationContainer)

//weather icon
const imgContainer=document.createElement("div")
imgContainer.id="img-container"
currentLocationContainer.append(imgContainer)
const weatherIcon=document.createElement("img")
weatherIcon.src=`https://openweathermap.org/img/w/10d.png`
weatherIcon.id="weatherIcon"
imgContainer.append(weatherIcon)

//temperature
const temperature=document.createElement("h1")
temperature.innerText=`7${String.fromCharCode(176)}C`
temperature.id="temperature"
currentLocationContainer.append(temperature)

//user location 
const currentLocation=document.createElement("h1")
currentLocation.innerText=`JORDAN`
currentLocation.id="currentLocation"
currentLocationContainer.append(currentLocation)

//user city
const currentCity=document.createElement("h3")
currentCity.innerText=`Amman`
currentCity.id="currentCity"
currentLocationContainer.append(currentCity)

// weather humidity and wind speed this div holds tow section  ( wind speed and Humidity)

const humAndWindContainer=document.createElement("div")
humAndWindContainer.id="H-W-C"
currentLocationContainer.append(humAndWindContainer)

//humidity section


const humiditySection=document.createElement("section")

humiditySection.id="humidity"
humAndWindContainer.append(humiditySection)

const humidityVal=document.createElement("h1")
humidityVal.innerText=`48%`
humidityVal.id="humidityVal"
humiditySection.append(humidityVal)

const humidityWord=document.createElement("h3")
humidityWord.innerText=`Humidity`
humidityWord.id="humidityWord"
humiditySection.append(humidityWord)


// wind section

const windSection=document.createElement("section")

windSection.id="wind"
humAndWindContainer.append(windSection)

const windVal=document.createElement("h1")
windVal.innerText=`48%`
windVal.id="windVal"
windSection.append(windVal)

const windWord=document.createElement("h3")
windWord.innerText=`wind speed`
windWord.id="windWord"
windSection.append(windWord)


















// let lat;
// let long;


// const button=document.createElement("button")
// body.append(button)
// button.innerText="get my location"
// const userLocation=()=>{
// const success=(location)=>{
//     lat=location?.coords?.latitude
//     long=location?.coords?.longitude
//    console.log(location.coords);
// }

// const err=(err)=>{
//     console.log(err);
// }
// navigator.geolocation.getCurrentPosition(success,err);

// }
// userLocation()


// const  currentWeather=async()=>{
//     try {
//            const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=20df6ed2d3d499f39b1ec55b2f5a7406&units=metric`)
// const data = await res.json() 
// console.log(data);
//     } catch (error) {
//        console.log(error); 
//     }


// }
//   button.addEventListener("click",currentWeather)
  
 //currentWeather()
// const ress=async()=>{
//     const res= await fetch("https://api.openweathermap.org/data/2.5/weather?lat=31.962552&lon=35.9043006&appid=20df6ed2d3d499f39b1ec55b2f5a7406&units=metric").then(res=>res.json()).then((currentWeather)=>{
//         console.log(currentWeather.main.temp);
//     }).catch((err)=>{console.log(err);})
    

// }
// ress()

