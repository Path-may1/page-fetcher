const request = require('request');
request('http://www.example.edu', (error, response, body) => {
if (error) {
console.log('error:', error); // Print the error if one occurred
}  
if (response){
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 }
 if (body){
 console.log('body:', body); // Print the HTML for the Google homepage.
 }
});