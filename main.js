var display = document.querySelector(".display");
clock();
var chat = document.querySelector("h2");
 
function clock(){
  
  var date = new Date();
  var hour = date.getHours();
 
    var min = date.getMinutes();
  var sec = date.getSeconds();
  
  hour = formatTime(hour);
  min = formatTime(min);
  sec = formatTime(sec);
var time = hour +":"+min+":"+sec;
    display.textContent =  time;
  setInterval(clock,1000);

  
}
function formatTime(value) {
  // body..
  if (value<10) {
    value ="0"+value;
  }
  return value;
}
dateshow();
function dateshow() {
  // body...
  var datelist = new Date();
  var day = datelist.getDay();
    var date = datelist.getDate();
  
  var year = datelist.getFullYear();
  var month = datelist.getMonth();
month = month+1 ;

switch (day) {
  case 0 :
    day = "Sun"
    break ;
    case 1:
      day = "Mon"
      // code
      break;
      case 2:
    day = "Thu"
    break
    ;
    case 3:
      day = "Wed"
      // code
      break;
      case 4 :
      day = "Tue"
      break
    ;
    case 5:
      "Fri"
      // code
      break;
    
    case 6:
      "Sat"
      // code
      break;
    ;
   
}
const para = document.createElement("sub");
para.innerText = day;
   var datecalander = date  +" / " + month +" /" + year;
   chat.textContent = datecalander;
  setInterval(dateshow,3600000);
};