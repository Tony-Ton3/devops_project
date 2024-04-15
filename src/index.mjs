//using ES module 
import express from 'express';
import { config } from 'dotenv';

const app = express();

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
app.listen(httpPort, () => {
  console.log(`Runninng on port ${httpPort}`);
});


