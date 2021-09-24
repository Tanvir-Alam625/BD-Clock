const hours =document.getElementById('hours');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');
const pe = document.getElementById('pe');
const dates = document.getElementById('datshow');
const month = document.getElementById('month');
const year = document.getElementById('year');
const days = document.getElementById('day');
// console.log(hours);
// console.log(minute);
// console.log(second);
// console.log(progress);
// converion in variables
const dayConver = ['Saturday','Sunday', 'Monday','Tuesday',  'Wednesday' , 'Thrusday', 'Friday'];





function showCurrentTime(){
    let date = new Date();
    let yr = date.getFullYear();
    let mnth = date.getMonth();
    let dt = date.getDate();
    let hrs = date.getHours();
    let mnt = date.getMinutes();
    let sec = date.getSeconds();
   



   year.textContent = yr;
   month.textContent = (mnth <10 ? '0' + (mnth +1) : (mnth + 1)) + '  /';
   dates.textContent =  (dt <10 ? '0' + dt : dt) + '  /';
  
    
    if(hrs== 0){
        hours.textContent = hrs = 12
    }
    else if(hrs < 10){
        hours.textContent = hrs = '0'+ hrs
    }
    else if(hrs > 12){
        hours.textContent = hrs = hrs -12
        pe.textContent = 'PM'

    }else if(hrs<12){
        pe.textContent = 'AM'

    }
    // hours.textContent = hrs >12 ? hrs - 12 : hrs;
    
    minute.textContent = mnt <10 ? '0' + mnt : mnt;
    second.textContent = sec <10 ? '0' + sec : sec ;
    progress.style.width = sec / 60 * 100 + '%'


}
function daySetUp(){
     
    switch(new Date().getDay()){
        case 0:
            days.textContent = "Sunday,";
            break;
        case 1:
            days.textContent = "Monday,";
            break;
        case 2:
            days.textContent = "Tuesday,";
            break;
        case 3:
            days.textContent = "Wednesday,";
            break;
        case 4:
            days.textContent = "Thursday,";
            break;
        case 5:
            days.textContent = "Friday,";
            break;
        case  6:
            days.textContent = "Saturday,";
    }
}
setInterval(showCurrentTime,  -1000)
//days
setInterval(daySetUp,  -1000)

