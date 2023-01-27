module.exports = async function (context, req) {
let axios = require('axios');


context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const keyword = (req.query.keyword || (req.body && req.body.keyword));
    const url = (req.query.url || (req.body && req.body.url));
    const payload = (req.query.payload || (req.body && req.body.payload));
    
    const responseMessage = function() {
        if (name) {
            return "Murtadha Says " + name + "!";
        }
        else if (keyword) {
            return `Murtadha Says   ${keyword}!`;
        }
        else if (url) {
            return "You sent the url " + url + "!";
        }
        else if (payload) {
            return "You sent the payload " + payload + "!";
        }
        else {
            return "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
        }
    }();

    // Make a HTTP request to the API
    const response = await axios.get('http://45.55.32.24:8080/api-docs/')
    const data = response.data;
    const message = data.message;


    
    

    
    context.res = {
        status: 200, /* Defaults to 200 */
        body: responseMessage,
        headers: {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'

        },

    };
    
}