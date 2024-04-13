//using ES module 
import express from 'express';

const app = express();

function getTimeStamp(){
    const currentDate = new Date();
    return currentDate;
}

console.log(getTimeStamp());

