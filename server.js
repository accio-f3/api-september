// require syntax is importing express from node_modules
const express = require('express');
// express is a function that create a server when called
const server = express();

const PORT = 8888;

function handleEmptyRoute(request, response) {
    console.log('hello');
    response.send('hello world, this is my first API');
}

function handleSumRoute(request,response){
    // console.log(request.query.number);
    // response.send(request);
    response.send(`Sum of first ${request.query.number} numbers is ${calculateSum(request.query.number)}`);
}

server.get('/',handleEmptyRoute);
server.get('/sum',handleSumRoute);

server.listen(PORT);

// http://localhost:8888/

// server.method('/route',fnthathandles router)


function calculateSum(count) {
    var sum = 0;
    for (var i = 0; i < count; i++) {
        sum += i;
    }
    return sum;
}
