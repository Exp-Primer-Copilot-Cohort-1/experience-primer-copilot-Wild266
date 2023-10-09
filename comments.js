// Create web server
// Run: node comments.js
// Test: curl http://localhost:3000/comments

// Import http module
var http = require('http');

// Import url module
var url = require('url');

// Import querystring module
var querystring = require('querystring');

// List of comments
var comments = [];

// Create web server
http.createServer(function (request, response) {
    // Get the path from the request
    var path = url.parse(request.url).pathname;

    // Get the query string from the request
    var query = url.parse(request.url).query;

    // Get the query string as a JSON object
    var qs = querystring.parse(query);

    // If the path is /comments
    if (path == '/comments') {
        // If the request method is GET
        if (request.method == 'GET') {
            // Set the response header
            response.writeHead(200, { 'Content-Type': 'text/plain' });

            // Write the comments to the response
            response.write(JSON.stringify(comments));

            // End the response
            response.end();
        }

        // If the request method is POST
        if (request.method == 'POST') {
            // Set the response header
            response.writeHead(200, { 'Content-Type': 'text/plain' });

            // Get the comment from the query string
            var comment = qs['comment'];

            // Add the comment to the list of comments
            comments.push(comment);

            // Write the comments to the response
            response.write(JSON.stringify(comments));

            // End the response
            response.end();
        }
    }
}).listen(3000);

// Log the URL
console.log('Server running at http://localhost:3000/comments');