function newsGetter() {
    
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=associated-press &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)

    $("#news").click(function() {

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
        for (var i = 0; i < parsedRes.length; i++) {
                            parsedRes[i]
                            
              $("#article_info").prepend(
                  `<div class="row"> 
                      <div class="col-md-4"><div id="titles"> ${parsedRes[i].title} </div> </div>
                      <div class="col-md-4"><div id="article_description">  ${parsedRes[i].description} </div> </div>
                      <div class="col-md-4"> <a href="${parsedRes[i].url}" target="_blank"> <img src=${parsedRes[i].urlToImage}></img></a></div>
                    </div>`
                        ) 
                    }
                 })
              })
          }

  newsGetter()



function businessGetter() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=the-economist &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)

    $("#business").click(function() {

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
        for (var i = 0; i < parsedRes.length; i++) {
                            parsedRes[i]
                            
              $("#article_info").prepend(
                  `<div class="row"> 
                      <div class="col-md-4"><div id="titles"> ${parsedRes[i].title} </div> </div>
                      <div class="col-md-4"><div id="article_description">  ${parsedRes[i].description} </div> </div>
                      <div class="col-md-4"> <a href="${parsedRes[i].url}" target="_blank"> <img src=${parsedRes[i].urlToImage}></img></a></div>
                    </div>`
                        ) 
                    }
                 })
              })
          }


businessGetter()



function sportsGetter() {
    
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=bleacher-report &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)

    $("#sports").click(function() {

$.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
        for (var i = 0; i < parsedRes.length; i++) {
                            parsedRes[i]
                            
              $("#article_info").prepend(
                  `<div class="row"> 
                      <div class="col-md-4"><div id="titles"> ${parsedRes[i].title} </div> </div>
                      <div class="col-md-4"><div id="article_description">  ${parsedRes[i].description} </div> </div>
                      <div class="col-md-4"> <a href="${parsedRes[i].url}" target="_blank"> <img src=${parsedRes[i].urlToImage}></img></a></div>
                    </div>`
                        ) 
                    }
                 })
              })
          }


sportsGetter()





function entertainmentGetter() {
 

    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=mtv-news &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)
 
    $("#entertainment").click(function() {
    

 $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
        for (var i = 0; i < parsedRes.length; i++) {
                            parsedRes[i]
                            
              $("#article_info").prepend(
                  `<div class="row"> 
                      <div class="col-md-4"><div id="titles"> ${parsedRes[i].title} </div> </div>
                      <div class="col-md-4"><div id="article_description">  ${parsedRes[i].description} </div> </div>
                      <div class="col-md-4"> <a href="${parsedRes[i].url}" target="_blank"> <img src=${parsedRes[i].urlToImage}></img></a></div>
                    </div>`
                        ) 
                    }
                 })
              })
          }
entertainmentGetter()


function healthGetter() {

    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=medical-news-today &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)
 
$("#health").click(function() {
    

 $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
        for (var i = 0; i < parsedRes.length; i++) {
                            parsedRes[i]
                            
              $("#article_info").prepend(
                  `<div class="row"> 
                      <div class="col-md-4"><div id="titles"> ${parsedRes[i].title} </div> </div>
                      <div class="col-md-4"><div id="article_description">  ${parsedRes[i].description} </div> </div>
                      <div class="col-md-4"> <a href="${parsedRes[i].url}" target="_blank"> <img src=${parsedRes[i].urlToImage}></img></a></div>
                    </div>`
                        ) 
                    }
                 })
              })
          }

          healthGetter()



function techGetter() {

    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=wired &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)
 
    $("#tech").click(function() {
    

$.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
        for (var i = 0; i < parsedRes.length; i++) {
                            parsedRes[i]
                            
              $("#article_info").prepend(
                  `<div class="row"> 
                      <div class="col-md-4"><div id="titles"> ${parsedRes[i].title} </div> </div>
                      <div class="col-md-4"><div id="article_description">  ${parsedRes[i].description} </div> </div>
                      <div class="col-md-4"> <a href="${parsedRes[i].url}" target="_blank"> <img src=${parsedRes[i].urlToImage}></img></a></div>
                    </div>`
                        ) 
                    }
                 })
              })
          }

techGetter()



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
   // in the element with an id of time-left add an h2 saying Time's Up!
   // console log done
   console.log("done");
   $("#time-left").append("<h2>Time's Up!</h2>");
   console.log("time is up");
   //  The following line will play the audio file we linked to above:
   audio.play();
   }
   
 
   })
 