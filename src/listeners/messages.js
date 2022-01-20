module.exports = function messageListener(app) {

    app.message(/ola|oi|hi/, async ({ message, say }) => {
        await say(`Olá, <@${message.user}>!`);
    });
}