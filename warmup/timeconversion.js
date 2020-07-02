let time = "07:05:45PM";



function timeConversion(s) {

    //Split hour, minutes and seconds
    let hour = time.split(':')[0];
    let min = time.split(':')[1];
    let sec = time.split(':')[2].substring(0,2);
    let hourOfDay = time.split(':')[2].substring(2,4);

    // Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock
    if (hourOfDay === 'PM' && hour < 12) hour = parseInt(hour) + 12;

    // Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock
    if (hourOfDay === 'AM' && hour === '12') hour = '00';

    return hour + ':' + min + ':' + sec;



}


console.log(timeConversion(time));