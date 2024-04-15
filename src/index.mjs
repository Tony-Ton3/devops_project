//using ES module 
import express from 'express';
import { config } from 'dotenv';

const app = express();

//if PORT is not defined in the environment, use 3000
const httpPort = 80;

function getTimeStamp(){
    return new Date;
}

app.get('/', (req, res) => {
  res.status(200).send(
    JSON.stringify({ message: 'My name is Tony', timestamp: getTimeStamp() })
  );
});


//listen to port for incoming requests, this essentially starts the server
app.listen(PORT, () => {
  console.log(`Runninng on port ${httpPort}`);
});


