function handleResponse(response) {
  console.log(response.items);
  var image = "";
  _.each(response.items, function(book) {
    image_div = $("<div />");
    image_div.attr("class", "all-books");
    image = $("<img />");
    image_div.append(image);
    image.attr("src", book.volumeInfo.imageLinks.thumbnail);
    image.data("title", book.volumeInfo.title);
    $("#bookshelf").append(image_div);
    if(book.volumeInfo.averageRating >= 4) {
      image.addClass("hot");
     }

  });

  // var hot_books = _.filter(response.items, function(book) {
  //   return book.volumeInfo.averageRating >= 4;
  // });

  // _.each(hot_books, function(hotbook){
  //   image = $("<img />");
  //   image.attr("src", hotbook.volumeInfo.imageLinks.thumbnail);
  //   image.addClass("hot");
  // });


};









