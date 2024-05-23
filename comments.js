// Create web server
// 1. Require express
// 2. Create a new express app
// 3. Create a new route for GET requests to /comments
// 4. Respond with a JSON object
// 5. Tell the app to listen on port 3000

var express = require("express");
var app = express();

app.get("/comments", function(req, res) {
    var comments = [
        {username: "Todd", comment: "lolololol"},
        {username: "Skyler", comment: "I would like"}
    ];

    res.json(comments);
});
