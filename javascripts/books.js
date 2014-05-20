function handleResponse(response) {
  console.log(response.items);
  var image = "";
  _.each(response.items, function(a) {
    image = $("<img />");
    image.attr("src", a.volumeInfo.imageLinks.thumbnail);
    image.data("title", a.volumeInfo.title);
    $("#bookshelf").append(image);
    _.filter(response.items, function(book){
      if(book.volumeInfo.averageRating > 4) {
        image.addClass("hot");
      }
    });
  });


};
