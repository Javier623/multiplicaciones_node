const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Lista una tabla de multiplicar en consola', opts)
    .command('crear', 'Crea un archivo con una base y un límite', opts)
    .help()
    .argv;

module.exports = {
    argv
}