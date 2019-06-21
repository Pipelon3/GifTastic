// Stuff to make it work

$("#games").on("click", function() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + myGames + "&api_key=5KZDAjtUy2sVI1b6KIs3blyHtx4vUAK9&limit=10";
    let myGames=["Legend of zelda","Call of Duty","Kingdom Hearts"]
    
})

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
})

  // Pause Gifs on click

$(".gif").on("click", function() {    
  var state = $(this).attr("data-state");
  if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});