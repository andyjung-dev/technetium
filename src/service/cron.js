const cron = require('node-cron');
const message = require('src/service/message');
// const timezone = 'America/Los_Angeles';
// const timezone = "America/New_York";
const everyMin = '32 12 * * *';
// Every morning at 9am daily (offset by -1)
const everyMorning = '0 8 * * *';


const cronService = {

    init: async () => {
        cron.schedule(everyMorning, () => {
            console.log('Running a job now');
            const result = message.autoSend();
            console.log(result);
          }, {
            scheduled: true,
            timezone: "America/Los_Angeles"
          });

    },

    add: (cronString, task) => {

    }



}




  module.exports = cronService;