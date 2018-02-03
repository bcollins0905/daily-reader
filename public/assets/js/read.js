// app.get('/bookcontent', function(req, res){
//   console.log("Fetching book ID: "+req.query.id + " Page number:"+ req.query.pagenumber )
//   var pagesize = 6000;
//
//   var options = {
//     url: "https://www.gutenberg.org/files/"+req.query.id+"/"+req.query.id+"-0.txt",
//
//

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
