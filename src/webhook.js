const router = require('express').Router();
const mongo = require('src/db');
const message = require('src/service/message');

router.post('/',
    async (req, res) => {

      const data = req.body;

      const result = await message.autoSend();

      console.log(`Fetch wiki and sent to slack with : ${result}`);

      // Save typeform data into mongodb
      const db = mongo.getInstance();
        db.collection("foobar").insertOne(data, (err,out) => {
            if (err) throw err;
            console.log("Insert success!")
        });

      res.sendStatus(200);
    },
);

module.exports = router;