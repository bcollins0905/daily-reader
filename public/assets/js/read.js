// app.get('/bookcontent', function(req, res){
//   console.log("Fetching book ID: "+req.query.id + " Page number:"+ req.query.pagenumber )
//   var pagesize = 6000;
//
//   var options = {
//     url: "https://www.gutenberg.org/files/"+req.query.id+"/"+req.query.id+"-0.txt",
//
//

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


function GetContent(book_id, page_number){
  // get book listing
  $.get(
    "/bookcontent?id="+book_id+"&pagenumber="+page_number,
    function(data) {
        $("#book_content").text(data);
    });

};

var url_string = window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("bookid");
var title = url.searchParams.get("title");

var page = url.searchParams.get("page");

var n= Number(page);

$("#book_title").append(title);

$("#previous").click(function(){
  n = n -1;
  localStorage.setItem('page', JSON.stringify(n));
  GetContent(id, n);
});

$("#next").click(function(){
  n = n +1;
  localStorage.setItem('page', JSON.stringify(n));
  GetContent(id, n);
});


localStorage.setItem('bookid', JSON.stringify(id));
localStorage.setItem('title', JSON.stringify(title));
localStorage.setItem('page', JSON.stringify(n));

GetContent(id, n);



function increaseFontSizeBy100px() {
        document.getElementById('a').style.fontSize = "100px";
    }
    function increaseFontSizeBy1px() {
        var id = document.getElementById('b');
        var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize++;
        document.getElementById('b').style.fontSize = currentSize.toString();
    }
