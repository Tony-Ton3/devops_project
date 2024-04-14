//using ES module 
import express from 'express';

const app = express();

import { config } from 'dotenv';

//if PORT is not defined in the environment, use 3000
const PORT = process.env.PORT || 3000;

function getTimeStamp(){
    return new Date;
}

app.get('/', (req, res) => {
  res.send(JSON.stringify({ message: 'My name is Tony', timestamp: getTimeStamp()}));

  // res.json({ message: 'My name is Tony', timestamp: getTimeStamp()});
});

//listen to port for incoming requests, this essentially starts the server
app.listen(PORT, () => {
  console.log(`Runninng on port ${PORT}`);
});


