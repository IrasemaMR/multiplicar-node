const argv = require('./config/yargs').argv
const colors = require('colors')

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(err => console.log(err))
        console.log('Listar');
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err))
        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
}

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err))

// console.log(process.argv);

// let argv2 = process.argv

// console.log(argv);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1]

//console.log(base);no