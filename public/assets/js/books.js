function FillPage(book_id, page_number){
  // get book listing
  $.get(
    "/fake/GetBookList",
    {"Access-Control-Allow-Headers":'*'},

    function(data) {

      data.forEach(function(entry) {
        console.log(entry);
        var content = '<div class="boxed"> <a href="/read?bookid='+ entry.book_id +'&title='+entry.title+'&page=0"> <img src="' + entry.picture + '">  <div class="overlay"><div class="text">'+entry.title+'</div></div> </a> </div>';
        $("#books").append(content);

      });

    });

};

FillPage();
