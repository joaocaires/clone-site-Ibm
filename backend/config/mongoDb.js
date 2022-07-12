const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/projetoIbm_stats', { useNewUrlParser: true })
    .catch(e => {
        const msg = 'Não foi possivel conectar com o mongoDb'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })