// create a function to update the date and time
function updateDateTime() {

    // create a new `Date` object
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var AmPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+ minutes : minutes;

    // get the current date and time as a string
    const currentDateTime = hours + ':' + minutes + ':' + second + ' '+ AmPm;

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);


function setUserAlarm() {
    document.getElementById("setAlarm").submit();
    var Hours = document.getElementById("hour").value;
    var Minutes = document.getElementById("minute").value;
    var Seconds = document.getElementById("second").value;

    // get the current date and time as a string
    const alarmSet = Hours + ':' + Minutes + ':' + Seconds;

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#alarms').textContent = alarmSet;

}
