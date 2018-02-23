let express = require('express');
import Marketo from 'node-marketo-rest';



let app = express();















let PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
   console.log(`App is listening at port ${PORT}.`);
 });