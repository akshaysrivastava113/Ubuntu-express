const express = require("express");
const axios = require("axios");
const app = express();

const PORT = 3000;
let quote;
app.get('/', (req,res) => {

    // Define the data to be sent in the request params
    // const params = {
    //     grant_type: 'password',
    //     client_id: client_id,
    //     client_secret: client_secret,
    //     username: username,
    //     password: password
    //   };

    // Make a POST request with Axios
    axios.post(`https://api.kanye.rest/`)
    .then(response => {
    // Handle successful response
    console.log('Response:', response);
    quote = response.data.quote;
    res.json({"msg": quote});
    })
    .catch(error => {
    // Handle error
    console.error('Error:', error);
    });
});

app.get('/quote', (req,res) => {
    res.json({"msg": quote});
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})