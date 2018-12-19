const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multipicar', opts)
    .command('crear', 'Crea una archivo con la tabla de multipicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}