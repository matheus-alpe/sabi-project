/**
 * @param { import('@slack/bolt/').App } app 
 */
module.exports = function messageListener(app) {
    app.message(/ola|oi|hi/, async ({ message, say }) => {
        console.log(message.channel)
        await say(`Oláa, <@${message.user}>! ${message.channel}`);
    });
}