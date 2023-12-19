//using Dom To Call body to Holds HTML element
const body =document.querySelector("body")
// first i need to know how i can get my position after search I found this function to git the location
// navigator.geolocation.getCurrentPosition(success,error);
//this fun take tow parameter both of them is callBack fun 
// this fun return an object (coords) contains a lot of proparety i think i need (latitude,longitude)
// finally to git the weather from API i need to compare the lat and long that i have from the geolocation fun
// and return the object from API that match my coord to git the right one 

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

