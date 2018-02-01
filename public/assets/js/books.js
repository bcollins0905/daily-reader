function FillPage(book_id, page_number){
  // get book listing
  $.get(
    "/fake/GetBookList",
    {"Access-Control-Allow-Headers":'*'},

    function(data) {

      data.forEach(function(entry) {
        console.log(entry);
        var content = '<div class="boxed"> <img src="' + entry.picture + '"><div class="overlay"><div class="text">'+entry.title+'</div></div></div>';
        $("#books").append(content);
      });
    }
  );
};

FillPage();