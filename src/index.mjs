//using ES module 
import express from 'express';
import dotenv from 'dotenv'; 

const app = express();
dotenv.config();

const curPort = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.status(200).send(
    JSON.stringify({ message: 'My name is Tony', timestamp: Date.now() }, null, 2)
  );
});

//listen to port for incoming requests, this essentially starts the server
app.listen(curPort, () => {
  console.log(`Runninng on port ${curPort}`);
});


