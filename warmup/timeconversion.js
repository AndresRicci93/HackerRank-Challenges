let time = "07:05:45PM";



function timeConversion(s) {

    
    let hour = time.split(':')[0];
    let min = time.split(':')[1];
    let sec = time.split(':')[2].substring(0,2);
    let hourOfDay = time.split(':')[2].substring(2,4);

   

    if (hourOfDay === 'PM' && hour < 12) hour = parseInt(hour) + 12;

    

    if (hourOfDay === 'AM' && hour === '12') hour = '00';

    return hour + ':' + min + ':' + sec;



}


console.log(timeConversion(time));