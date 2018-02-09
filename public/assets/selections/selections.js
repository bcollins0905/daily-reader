jQuery(function ($) {

  var countdown;

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    countdown = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (--timer < 0) {
        alert('Congratulations! You read for 30 minutes!')
        clearInterval(countdown);
      }
    }, 1000);
  }

    $('.start-timer').on('click',function() {
      $('body').append("<div id='countdown-timer'></div>");
      var fiveMinutes = 60 * 30;
      var display = $('#countdown-timer');
      startTimer(fiveMinutes, display);
  });

    // Want this function to be toggling the timer countdown

  $('body').on('click', '#countdown-timer',function(){
    clearInterval(countdown);
    countdown = null;
  });

});


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
