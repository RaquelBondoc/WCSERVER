/*  Activity Name: firstexpress.js
    Author Name: Bondoc, Raquel Ann P.
    Section and Code: WD - 202 / 2083*/

const {response} = require("Express");
var express = require("Express");

var app = express();

app.get("/", function(request, response){
  response.send("Hello World! I am Raquel Ann P. Bondoc");
});

app.listen(3300, function(){ 
  console.log('Server running at http://localhost:3300');
}
);