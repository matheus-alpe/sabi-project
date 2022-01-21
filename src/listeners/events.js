const { getTasksFromSection } = require('../asana');

/**
 * @param { import('@slack/bolt/').App } app 
 */
module.exports = function eventsListner(app) {
    app.event('app_home_opened', ({ event, say }) => {  
        console.log('Eventou `app_home_opened` executou');
    });
    
    app.event('app_mention', async ({ event, client, context, say }) => {
        const quantity = await getTasksFromSection();
        say(`Tem ${quantity} ${quantity === 1 ? 'task' : 'tasks'} em Doing. :eyes:`);
        console.log('Eventou `app_mention` executou');
    });
}