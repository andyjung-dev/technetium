// File to run quick tests for db connection, api calls, etc


// var MongoClient = require('mongodb').MongoClient;
// const mongoUrl = "mongodb://root:rootpassword@localhost:27017";

// MongoClient.connect(mongoUrl, {}, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("foobar");

//     var myobj = { name: "Company Inc", day: "Highway 37" };

//     dbo.collection("foobar").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });

const htmlToText = require('html-to-text');
const axios = require('axios');

var 
const request = require("request");


const wikiUrl = "https://en.wikipedia.org/wiki/Main_Page";

const token = "";
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const slackUrl = "https://slack.com/api/chat.postMessage"


async function test(){

    let response = await axios.get(wikiUrl);

    // const body = {
    //     channel: "experimental",
    //     text
    // };
    // let another = await axios.post(slackUrl, body, config);

}
test().catch(e=>console.log(e));

