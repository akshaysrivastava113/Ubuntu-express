const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const app = express();

const PORT = 3000;
app.use(cors());
app.use(express.static(path.join(__dirname, 'frontend/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})