var topics = ["Spiderman", "Black Panther", "Superman", "Batman", "Hulk"];


$("#button").on("click", function() {

  // Storing our giphy API URL for a random cat image
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var imageUrl = response.data.image_original_url;
    var catImage = $("<img>");
      catImage.attr("src", imageUrl);
      catImage.attr("alt", "cat image");
      $("#images").prepend(catImage);
    });
});



function renderButtons() {

  $("#button-view").empty();
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("btn btn-md btn-danger btn-block");
    a.attr("data-name", topics[i]);
    a.append(topics[i]);
    $("#button-view").append(a);
  }
};


$("#button").on("click", function (event) {
  event.preventDefault();
  var superhero = $("#nameInput").val().trim();
  topics.push(superhero);
  renderButtons();
});