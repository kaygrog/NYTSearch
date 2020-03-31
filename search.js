// Pseudocode
// 1. Create variable to hold query URL
// 2. Update the query URL with the search phrase
// 3. Create ajax call and pass in query URL and "GET" method
// 4. Create .then function and pass in ajax response
// 5. Console log the abstract from the ajax response
var topArticles = $('#top-articles')

$('#search-btn').on("click", function(event) {
    console.log("Button clicked");
    event.preventDefault();
    var searchTerm = $('#search-term').val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=KeGskohuzkW74NHKCcYAKAOqyGG89WXw";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(hotsauce) {
            console.log(hotsauce.response.docs);

            // Grab headline and authors from response
            // Insert into "top-articles" div
            var responseArray = hotsauce.response.docs;
            for (var i=0; i < 4; i++) {
                var headline = JSON.stringify(responseArray[i].abstract);

                topArticles.append(headline);
            }

            console.log(responseArray[0].abstract);
            

            
        })
})