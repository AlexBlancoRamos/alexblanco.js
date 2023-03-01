const cors = require('cors');
const express = require('express');
const app = express();
let admin = require("firebase-admin");
const {getFirestore} = require("firebase-admin/firestore");

admin = require("firebase-admin");

let serviceAccount = require("./exalexblancoramos-firebase-adminsdk-25akm-2d237b2711.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();


app.use(express.json());

app.use(cors())

port = 3000;
app.listen(port, () => {
    console.log('Server listening on the port::'+ port)
});

app.get('/jugadors',async (req, res) => {

    const cityRef = db.collection('mundial').doc('final');
    const doc = await cityRef.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        console.log('Document data:', doc.data());
    }
    res.json(doc.data());

});



