# Technetium

A Quick and Dirty workflow engine


## How to run?

1. Make sure you have `docker/docker-compose` installed on your machine. 
2. Create the file `config.json` from `config-example.json` in the `src/` folder.
3. Run the command `docker-compose up -d` to have the service running in the background

## How does it work?
The application runs an `express` webserver with two endpoints: `GET /check` which returns an `HTTP 200 OK` if the service is running. Another endpoint `POST /` acts as a webhook and listens to posts. This will also return an `HTTP 200` since it is a webhook.

Upon the webhook being called, it uses the `message` library to accomplish two tasks: fetch information from `Wikipedia` via web scraping, converts it to plaintext (rather inefficiently) and sends it to Slack via the `chat.Postmessage` call. There is also a cronjob that accomplishes the following every 9am PST time.
Afterwards, the incoming data is saved to `mongodb`. Verification was skipped for time constraints, but for further improvements a check for existing data and shared secret authentication would prevent misuse of the webhook.


### Structure
```

├── docker-compose.yml
├── Dockerfile
├── package.json
├── README.md
└── src
    ├── app.js
    ├── config-example.json
    ├── config.json
    ├── db.js
    ├── main.js
    ├── service
    │   ├── cron.js
    │   └── message.js
    └── webhook.js
```
`config.json` Holds the configuration information (API keys, ports, etc) and should be created from `config-example.json`.  
The application requires a `mongodb` to run, by default one is included via  `docker-compose.yml`. 
All `.js` files in `/src` of course hold source code, but most of it uses popular `node.js` libraries such as `axios`, `express-router`, and more.




