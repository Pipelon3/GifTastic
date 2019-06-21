$("#games").on("click", function() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + myGames + "&api_key=5KZDAjtUy2sVI1b6KIs3blyHtx4vUAK9&limit=10";
    let myGames=["Legend of zelda","Call of Duty"]
    
})

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
