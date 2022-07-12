const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/1 * * * *', async function(){
        const usersCount = await app.db('users').count('id').first()

        const { Stat } = app.api.stat

        const lastStat = await Stat.findOne({}, {}, { sort: { 'createAt' : -1 } })

        const stat = new Stat({
            users: usersCount.count,
            createAt: new Date()
        })

        const changeUsers = !lastStat || stat.users !== lastStat.users

        if(changeUsers){
            stat.save().then(() => console.log('[Stat] Estatisticas Atualizadas!!'))
        }
    })
}