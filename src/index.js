
require('dotenv').config();

const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    customRoutes: [
        {
          path: '/health-check',
          method: ['GET'],
          handler: (req, res) => {
            app.client.chat.postMessage({
                channel: 'C02UPMAQPHC',
                text: 'Olá otaku fedido!'
            })
            res.writeHead(200);
            res.end('Health check information goes here!!!');
          },
        },
    ]
});

require('./slack')(app);

(async () => {
    const PORT = process.env.PORT || 3000;
    await app.start(PORT);
    console.log('⚡️ Bolt app is running!');
})();
