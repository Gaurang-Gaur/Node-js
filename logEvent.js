const fs=require("fs");
const fsPromises=require('fs').promises;
const {format}=require("date-fns");
const {v4:uuid} =require('uuid');
// import fs from "fs";
// import fsPromise from "fs/promises";

// The 'fs' module in Node.js has two APIs: a callback-based API and a promise-based API. The .promises property provides access to the promise-based API, which returns promises for asynchronous operations, making it easier to work with modern asynchronous JavaScript code using async/await.

const path=require('path');

const logEvents= async (message)=>{

    const dateTime=`${format(new Date(),'yyyymmdd \t hh:mm:ss')}`;

    const logItem=`${dateTime} \t ${uuid()} \t ${message}`;
    console.log(logItem);

    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname,'logs','eventlog.txt'),logItem);
            // /logs/eventlog.txt is path name
    }
    catch(err){
        console.log(err);
    }

}

module.exports =logEvents;

