//


function hoursANdMinutes(number){
    let hours = 0;             
    let minutes = 0;
    let hourLabel = " hour"
    minutesLabel = " minutes"
   
    //caculations of minutes and hours
    while (number > 60){    
      number-=60;
      hours++;
    }
    minutes = number; 

    //add suffixes based on the number
    if (hours >1  || hours == 0 ){ 
        hourLabel += "s"
    }

    return hours+ hourLabel +", "+ minutes + minutesLabel;

}
hoursANdMinutes(0);







