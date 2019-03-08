const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const { saveJob, getSavedJobs } = require('../database/db.js');


app.use(bodyParser.json());
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route

app.get('/testing', (req, res) => {
    
    res.send({ express: 'hmmm' });
  });

  app.post('/testing',(req,res) => {
    
    console.log('req.bodyy: ', req.body);
    
    res.send('posted mhmm')
  })