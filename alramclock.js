//creating an array to keep list of alarms set by user
let alarmList = [] 

//initializing alarm ringtone
let alarmRingtone = new Audio('alarm_sound.mp3');

//Reference for input values
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

//function to show current time 
function getCurrentTime() {
  const today = new Date();

  let hrs = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let AmPm = "AM";

  //setting time to 12 hr format
  if (hrs >= 12) {
    AmPm = "PM";
  }
  if(hrs > 12){
    hrs = hrs - 12;
  }

  //appending zeroes for values less than 10
  hrs = checkTime(hrs);
  min = checkTime(min);
  sec = checkTime(sec);

  //set current time in the div
  document.getElementById('currTime').innerHTML = hrs + ":" + min + ":" + sec + " " + AmPm;

  //to ring alarm
  alarmList.forEach((alarm) => {
      if (`${alarm}`=== `${hrs}:${min}:${sec} ${AmPm}`) {
        alarmRingtone.play();
        alarmRingtone.loop = true;
        // timeout function to show alert when alarm goes off
        setTimeout(function(){
              alarmRingtone.pause();
              alert("The alarm went Off!")
        }, 30 *1000);
      }
  });
  //to keep the current time updating
  setTimeout(getCurrentTime, 1000);
}

//function to append zeroes before single digit of hour/min/sec
function checkTime(value) {
  if (value < 10)
    value = "0" + value;
  return value;
}

//function to add alarms in alarms list
function setAlarm() {
  let h = hour.value;
  let m = minute.value;
  let s = second.value;
  let AmPm = document.getElementById("ampm").value;

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  
  alarmList.push(h + ":" + m + ":" + s +" "+ AmPm)
  createAlarmList();
}

//create alarm list 
function createAlarmList() {
  
  document.getElementById("alarmsList").innerHTML = '';
  for (var i in alarmList) {

    //adding delete button for each alarm
    let button = document.createElement("input");
    button.type="button";
    button.value="Delete";
    button.id="deleteButton";
    
    //removing the deleted alarm from alarm list
    button.onclick=function(event){
      document.getElementById("alarmsList").removeChild(event.target.parentElement);
      alarmList = alarmList.filter(function (a) {
        return a !== event.target.parentElement.innerText;
      });
    }

    //adding list item for each alarm
    let list = document.createElement("li");
    list.innerHTML = '<li class="list-group-item">'+ alarmList[i] +'</li>';
    document.getElementById("alarmsList").appendChild(list).appendChild(button); 
  }
}