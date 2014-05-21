// making javascript more OOP like

var books = [];

function handleResponse(response) {
  console.log(response.items);
  
  _.each(response.items, function(book) {
    books.push(new Book(book));
  });
};

// We'll call this the 'constructor'
function Book(book_info) {
  this.image_url = book_info.volumeInfo.imageLinks.thumbnail;
  this.title = book_info.volumeInfo.title;
  this.rating = book.volumeInfo.averageRating;
}

Book.prototype.add_to_bookshelf = function() {
  var image = $("<img />");
  image.attr("src", this.image_url);
  image.data("title", this.title);
  $("#bookshelf").append(image);
};

Book.prototype.add_hot_books_to_bookshelf = function() {
  var _this = this;
  var hot_books = _.filter(books, function(book) {
    return _this.rating >= 4;
  });

  return hot_books;
};

$(document).ready(function() {
  $('body').click(function() {
    new Book().add_hot_books_to_bookshelf();
  });
});
