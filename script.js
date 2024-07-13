function updatetime(){
const currentyear = new Date().getFullYear();
const newyear=new Date(`January 1 ${currentyear+1} 00:00:00`);

const currentdate=new Date();
let diff=newyear-currentdate;

let days=Math.floor(diff/1000/60/60/24);
let hours=Math.floor((diff/1000/60/60)%24);
let minutes=Math.floor((diff/1000/60)%60);
let seconds=Math.floor((diff/1000)%60);

document.querySelector(".days").innerHTML=days<10?"0"+days:days;
document.querySelector(".hours").innerHTML=hours<10?"0"+hours:hours;
document.querySelector(".minutes").innerHTML=minutes<10?"0"+minutes:minutes;
document.querySelector(".seconds").innerHTML=seconds<10?"0"+seconds:seconds;

}
setInterval(updatetime,1000);