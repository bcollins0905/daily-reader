var time_in_minutes = 30;
  var current_time = Date.parse(new Date());
  var deadline = new Date(current_time + time_in_minutes*60*1000);
  var timeUp
 
 // var isPaused = false;
 
 var audio = new Audio("ding.wav");
  
  $( "#start" ).click(function() {
  
  setTimeout(timeUp, 1000 * 1800);
  
  function time_remaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
   var seconds = Math.floor( (t/1000) % 60 );
   var minutes = Math.floor( (t/1000/60) % 60 );
   var hours = Math.floor( (t/(1000*60*60)) % 24 );
   var days = Math.floor( t/(1000*60*60*24) );
   return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
 }
 function run_minutes(id,endtime){
   var clock = document.getElementById(id);
   function update_clock(){
     var t = time_remaining(endtime);
     clock.innerHTML = t.minutes;
     if(t.total<=0){ clearInterval(timeinterval); }
   }
   update_clock(); // run function once at first to avoid delay
   var timeinterval = setInterval(update_clock,1000);
 }
 
 function run_seconds(id,endtime){
   var clock = document.getElementById(id);
   function update_clock(){
     var t = time_remaining(endtime);
     clock.innerHTML = t.seconds;
     if(t.total<=0){ clearInterval(timeinterval); }
   }
   update_clock(); // run function once at first to avoid delay
   var timeinterval = setInterval(update_clock,1000);
   
 
   }
 
 
 run_minutes('minutes', deadline);
 run_seconds('seconds', deadline);
 
 
 
 
 function timeUp() {
  var t = time_remaining(endtime);
     clock.innerHTML = t.seconds;
     if(t.total<=0){ clearInterval(timeinterval); }
   }
   update_clock(); // run function once at first to avoid delay
   var timeinterval = setInterval(update_clock,1000);
   
 
   }
 
 
 run_minutes('minutes', deadline);
 run_seconds('seconds', deadline);
 
 
 
 
 function timeUp() {
   // in the element with an id of time-left add an h2 saying Time's Up!
   // console log done
   console.log("done");
   $("#time-left").append("<h2>Time's Up!</h2>");
   console.log("time is up");
   //  The following line will play the audio file we linked to above:
   audio.play();
   }

   // in the element with an id of time-left add an h2 saying Time's Up!
   // console log done
