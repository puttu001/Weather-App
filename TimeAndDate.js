function updateDateAndTime(){
    let currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth()+1;
    var date = currentTime.getDate();
    var day = currentTime.getDay();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    date = (date < 10 ? "0" : "") + date;
    month = (month < 10 ? "0" : "") + month;


    var timeString = hours + ":" + minutes + ":" + seconds;
    var dayString = day;
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayString = daysOfWeek[day];
    var todayDate = date + "-" + month + "-" + year;

    var dateTimeString = timeString + "<br>" + dayString + "<br>" + todayDate;

    document.getElementById("time").innerHTML = dateTimeString;
}

setInterval(updateDateAndTime, 1000);

updateDateAndTime();