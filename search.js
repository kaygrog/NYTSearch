// Pseudocode
// 1. Create variable to hold query URL
// 2. Update the query URL with the search phrase
// 3. Create ajax call and pass in query URL and "GET" method
// 4. Create .then function and pass in ajax response
// 5. Console log the abstract from the ajax response
var topArticles = $('#top-articles')



$('#search').on('click', function() {
    var searchTerm = $('#search-term').val()
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=KeGskohuzkW74NHKCcYAKAOqyGG89WXw&limit=3";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(hotsauce) {
            // Grab headline and authors from response
            // Insert into "top-articles" div
            var responseArray = hotsauce.response.docs;
            for (var i=0; i < 4; i++) {
                topArticles.html(responseArray[i]);
            }

            console.log(responseArray[0].abstract);
            

            
        })
})

    