var topics = ["Spiderman", "Black Panther", "Superman", "Batman", "Hulk"];




$("#button").on("click", function() {

  var superhero = $(this).attr("data-super");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  superhero + "&api_key=QNvIp0k6HQGGpz9SckyLMeqaAXtx6sZj&limit=10";

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var imageUrl = response.data.image_original_url;
    var superImage = $("<img>");
      superImage.attr("src", imageUrl);
      superImage.attr("alt", "superhero image");
      $("#gifs-view").append(superImage);
    });
});



function renderButtons() {

  $("#button-view").empty();
  for (var i = 0; i < topics.length; i++) {
    var newbutton = $("<button>");
    newbutton.addClass("btn btn-md btn-danger btn-block");
    newbutton.attr("data-name", topics[i]);
    newbutton.append(topics[i]);
    $("#button-view").append(a);
  }
};
