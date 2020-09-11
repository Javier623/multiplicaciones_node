// requires
const fs = require('fs');
// const colors = require('colors');

//en caso de que no exista un limite tomara el valor de 10
let listar = (base, limite = 10) => {
    for (let index = 1; index <= limite; index++) {
        console.log(`${ base } * ${ index } = ${ base * index }`)
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${ base } no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite ${ limite } no es un número`);
            return;
        }

        let data = new Uint8Array(Buffer.from(''));
        for (let i = 1; i <= limite; i++) {
            // console.log(`${ base } * ${ i } = ${ base * i }`);
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`Tablas/TablaMultiplicar${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`TablaMultiplicar${ base }.txt`);
            }
        });
    })
}

module.exports = {
    crearArchivo,
    listar
}