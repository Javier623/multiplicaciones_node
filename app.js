const { argv } = require('./config/yargs');
const colors = require('colors/safe');
/* const argv = require('yargs').command('listar', 'Lista una tabla de multiplicar en consola', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    }).command('listar', 'Lista una tabla de multiplicar en consola', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    })
    .help()
    .argv; */

//Esto es una destructuracion
const { crearArchivo } = require('./Multiplicar/Multiplicar');
const { listar } = require('./Multiplicar/Multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ colors.green(archivo) }`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

/* let parametro = argv[2];
let base = parametro.split('=')[1];
// console.log(base);
 */