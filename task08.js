
function hoursANdMinutes(number){
    let hours = 0;             
    let minutes = 0;
    let hourLabel = " hour";
    minutesLabel = " minute";
   
    //caculations of minutes and hours
    while (number > 60){    
      number -= 60;
      hours++;
    }
    minutes = number; 

 
    if (hours > 1  || hours == 0 ){ 
        hourLabel += "s";
    }
    if (minutes > 1  || minutes == 0 ){ 
        minutesLabel += "s";
   }
    return hours+ hourLabel +", "+ minutes + minutesLabel;
}
hoursANdMinutes(61);







