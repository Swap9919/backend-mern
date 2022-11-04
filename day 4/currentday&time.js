
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", " Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is:" + daylist[day] + ".");
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var prepand = (hours >=12)? "PM" : "AM" ;
hours = (hours >=12)? hours-12 : hours ;
if (hours===0 && prepand ==="PM")
{
  if(minutes===0 && seconds ===0)
    {
      hours=12;
      prepand='noon';
    } else {
      hours=12;
      prepand='AM';
    }
}
if(hours===0 && prepand==="AM")
  {
    if(minutes===0 && seconds ===0)
      {
        hours=12;
        prepand="Midnight"
      } else {
        hours=12;
        prepand = 'AM' ;
      }
  }
console.log("Current Time :" + hours + prepand + " : " + minutes + " : " + seconds);
