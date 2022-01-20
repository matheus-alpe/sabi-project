
require('dotenv').config();

const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    port: process.env.PORT || 3000,
});

require('./listeners')(app);

(async () => {
    await app.start();
    console.log('⚡️ Bolt app is running!');
})();
