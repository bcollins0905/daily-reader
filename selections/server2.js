var express = require('express');
var axios = require("axios");
var app = express();


app.use('/', express.static(__dirname));
app.listen(3000, function() { console.log('listening')})

// app.get('/articles', function(response, body){	 

//   var parsedRes = response.articles


//     // axios.get('https://newsapi.org/v2/top-headlines?' + 'sources=the-new-york-times &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8').then(function(response, body){

    
//         console.log("Response: ", response)
//         console.log("Body: ", body)
        
//     // for (var i = 0; i < parsedRes.length; i++) {
//     //   parsedRes[i]
//     //   console.log(parsedRes[i].title)
//     //   document.getElementById('display').text(parsedRes[i].title)

//     //   console.log("parsed res : " + parsedRes[i].title)
//     //     }
      
// .fail(function(error) {
//         if (error) {
//             console.log(error)
//               }
//         })    
//     })




