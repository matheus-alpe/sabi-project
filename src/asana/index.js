require('dotenv').config();

const { Client } = require('asana');

const config = {
    poolId: '30994714493547',
    mainSectionId: '1140999922812186',
    doingSectionId: '1140999922606648'
}

const client = Client.create().useAccessToken(process.env.ASANA_PERSONAL_TOKEN);

async function getTasksFromSection() {
    try {
        const { data } = await client.tasks.getTasksForSection(config.doingSectionId, { completed_since: 'now' });
        const tasks = data.map(async (task) => await client.tasks.findById(task.gid));
        const result = await Promise.all(tasks);
        return result;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getTasksFromSection
}