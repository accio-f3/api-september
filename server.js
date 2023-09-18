// require syntax is importing express from node_modules
const express = require('express');
const bodyParser = require('body-parser');
// express is a function that create a server when called
const server = express();

// so this piece of code will allow me to use request.body

function middleware(request,response,next){
    const user = 'seller';
    if(user==='customer'){
        response.send('not allowed');
    }
    else{
        next();
    }
}
// server.use(middleware);
// server.use(bodyParser.json());

const PORT = 8888;

function handleEmptyRoute(request, response) {
    response.send('you are allowed for adding products');
}

function handleSumRoute(request,response){
    // console.log(request.query);
    // response.send(request);
    // response.send(`Sum of first 30 numbers is ${calculateSum(30)}`);
    // response.send(`Sum of first ${request.query.number} numbers is ${calculateSum(request.query.number)}`);
    console.log(request.headers);
    response.send(`Sum of first ${request.headers.test} numbers is ${calculateSum(request.headers.test)}`);
}

function handleBody(request,response){
    console.log(request.body);
    console.log('test');
    // request.body
    response.send('testing request.body');
}

server.get('/',handleEmptyRoute);
server.post('/sum',handleSumRoute);
server.post('/body',handleBody);

server.listen(PORT);

// http://localhost:8888/

// server.method('/route',fnthathandles router)

function calculateSum(count) {
    var sum = 0;
    for (var i = 0; i <= count; i++) {
        sum += i;
    }
    return sum;
}


// const height = document.getElementById('height');

// var myHeaders = new Headers();
// myHeaders.append("age", age);
// myHeaders.append("weight", weight);
// myHeaders.append("height", height.value);

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("http://localhost:8888/sum", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


// how you can make basic server
// router handler
// middleware

