const { config } = require('dotenv');
config();

const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

app.event('app_home_opened', ({ event, say }) => {  
    console.log('Eventou `app_home_opened` executou');
});

app.event('app_mention', async ({ event, client, context }) => {
    console.log('Eventou `app_mention` executou');
});

app.message(/ola|oi|hi/, async ({ message, say }) => {
    await say(`Olá, <@${message.user}>!`);
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();
