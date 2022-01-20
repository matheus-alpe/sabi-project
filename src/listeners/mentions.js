module.exports = function mentionsListner(app) {
    app.event('app_home_opened', ({ event, say }) => {  
        console.log('Eventou `app_home_opened` executou');
    });
    
    app.event('app_mention', async ({ event, client, context }) => {
        console.log('Eventou `app_mention` executou');
    });
}