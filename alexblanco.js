const cors = require('cors');
const express = require('express');
const app = express();


app.use(express.json());

app.use(cors())

port = 3000;
app.listen(port, () => {
    console.log('Server listening on the port::'+ port)
});

