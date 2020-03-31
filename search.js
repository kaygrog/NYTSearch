// Pseudocode
// 1. Create variable to hold query URL
// 2. Update the query URL with the search phrase
// 3. Create ajax call and pass in query URL and "GET" method
// 4. Create .then function and pass in ajax response
// 5. Console log the abstract from the ajax response

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=KeGskohuzkW74NHKCcYAKAOqyGG89WXw&limit=3";

$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      console.log(response);
    })