let express = require('express');
let Marketo = require('node-marketo-rest');
let marketoCredentials = require('../config');

let app = express();


let marketo = new Marketo({
    endpoint: 'https://779-ZHH-801.mktorest.com/rest',
    identity: 'https://779-ZHH-801.mktorest.com/identity',
    clientId: marketoCredentials.clientID,
    clientSecret: marketoCredentials.clientSecret
  });


let token = '';

marketo.getOAuthToken().then((data) => {
    token = data.access_token;
    console.log('this is marketo oAuth token', token);
})










let PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
   console.log(`App is listening at port ${PORT}.`);
 });