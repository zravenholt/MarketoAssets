let express = require('express');
let Marketo = require('node-marketo-rest');
let axios = require('axios');
let marketoCredentials = require('../config');

let app = express();


let marketo = new Marketo({
    endpoint: 'https://779-ZHH-801.mktorest.com/rest',
    identity: 'https://779-ZHH-801.mktorest.com/identity',
    clientId: marketoCredentials.clientID,
    clientSecret: marketoCredentials.clientSecret
  });

let restAPI = marketo._connection._options.endpoint;

app.post('/api/postContent', (req, res) => {

    marketo.getOAuthToken().then((data) => {
        console.log('this is marketo oAuth token', data.access_token);
        let landingPagesAPI = restAPI + '/asset/v1/landingPages.json';
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${data.access_token}`
            }
        }
        axios.get(landingPagesAPI, axiosConfig)
        .then((response) => {
            console.log('axios complete:', response.data);
        })
        .catch((err) => {
            console.log('Error caught in axios post: ', err);
        });
    });
});


//email template landing pages
// let emailData = {
//     folder: {
//         id: 'integer id of the folder',
//         type: 'Folder'
//     },
//     fromEmail: 'someone@somewhere.com',
//     fromName: 'From this person',
//     name: 'email name',
//     replyEmail: 'replyToHere@somewhere.com',
//     subject: 'subject line',
//     template: 'integer of parent template',

// };
// let emailPath = restAPI + '/asset/v1/emails.json';






let PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
   console.log(`App is listening at port ${PORT}.`);
 });
