let express = require('express');
let Marketo = require('node-marketo-rest');
let marketoCredentials = require('../config');

let ID = marketoCredentials.clientID;
let secret = marketoCredentials.clientSecret;

let app = express();










console.log(secret, ID)




let PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
   console.log(`App is listening at port ${PORT}.`);
 });