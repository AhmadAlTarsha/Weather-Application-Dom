//using Dom To Call body to Holds HTML element
const body =document.querySelector("body")
// first i need to know how i can get my position after search I found this function to git the location
// navigator.geolocation.getCurrentPosition(success,error);
//this fun take tow parameter both of them is callBack fun 
// this fun return an object (coords) contains a lot of proparety i think i need (latitude,longitude)
// finally to git the weather from API i need to compare the lat and long that i have from the geolocation fun
// and return the object from API that match my coord to git the right one 
//-------
//ok i think i can solve it In two ways: Either by tracking the user's location and making it a dynamic process by
//using navigator.geolocation.watchPosition;
//or I get the user's current location and when his done when he out and want use the website agin
//call the function agin to git his position
const button=document.createElement("button")
body.append(button)
button.innerText="get my location"
const userLocation=()=>{
const success=(location)=>{
    console.log(location);
}
const err=(err)=>{
    console.log(err);
}
navigator.geolocation.getCurrentPosition(success,err);

}

button.addEventListener("click",userLocation)
const weatherApi=async()=>{
   const res= await fetch("https://api.openweathermap.org/data/2.5/weather?lat=31.962552&lon=35.9043006&appid=20df6ed2d3d499f39b1ec55b2f5a7406&units=metric").then((res)=>{
    console.log(res);
   }).catch(err=>{
    console.log(err);
   }).json()
return res
}
weatherApi()
