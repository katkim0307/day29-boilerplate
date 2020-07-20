const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 4000;

app.listen(port, () => {
    console.log(`Server Started on Part ${port}`);
})