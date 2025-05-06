import {  MongoClient } from "mongodb";
const client=new MongoClient('mongodb://localhost:27017/');
let db;

const Connection=async()=>{
    try{
           await client.connect();
              console.log("Connected to MongoDB");
              db=client.db('Food-Items');
              return db;
    }
    catch(err){
        console.log(err);
    }
}

export default Connection;