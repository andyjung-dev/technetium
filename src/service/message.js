// Service for fetching wikipedia info and sending data to slack
const axios = require('axios')
const cheerio = require("cheerio");
const h2p = require('html2plaintext');

const config = require('src/config');
const auth = {
    headers: { Authorization: `Bearer ${config.slackToken}` }
}

const message = {

    test: () => {
        console.log("slack called");
    },
    sendSlack: async (text) => {
        const body = {
            channel: "experimental",
            text
        }
        let response = await axios.post('https://slack.com/api/chat.postMessage',body,auth);

        return response.data.ok || false;
    },
    // Fetches wikipedia In The News (scraped by Cheerio via id tag and converts to plaintext)
    fetchWikipedia: async () => {
        let wikipedia = await axios.get("https://en.wikipedia.org/wiki/Main_Page");
        const $=cheerio.load(wikipedia.data);
        const text = h2p(
            $('#mp-itn').html()
        );
        return text;
    },
    // Combine above functions but also timestamp in case of failure
    autoSend: async () => {
        const text = await message.fetchWikipedia();
        const status = await message.sendSlack(text);
        if(status){
            return "OK"+Date.now().toString()
        }
        return "Failed"+Date.now().toString()
    }


}
module.exports = message;