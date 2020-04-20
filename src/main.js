
const path = require('path');
const rootPath = path.resolve(`${__dirname}/..`);
require('app-module-path').addPath(rootPath);



const cron = require('src/service/cron')
const app = require('./app');
const mongo = require('src/db');
const config = require('src/config.json');

// MongoDB
// const db = require('src/util/db.js');

let server;

const main = async () => {
  
  await mongo.init();

    // Cron job every 9am PST
    console.log('Starting cron job')
    await cron.init();


  server = app.listen(config.port, async () => {
    console.log(`Service started on port ${config.port}`);
  });

};

main()
    .catch((e) => {
      console.dir(e);
      process.exit(1);
    });
