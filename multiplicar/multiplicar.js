// requireds
const fs = require('fs');
const colors = require('colors')

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} de la base no es un número`)
            return
        }
        if (!Number(limite)) {
            reject(`El valor ${limite} del límite no es un número`)
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} de la base no es un número`)
            return
        }
        if (!Number(limite)) {
            reject(`El valor ${limite} del límiete no es un número`)
            return
        }

        console.log('======================'.green);
        console.log(`===   Tabla de ${ base }   ===`.green);
        console.log('======================'.green);
        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }
        resolve(data);
        // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        //     if (err)
        //         reject(err);
        //     else
        //         resolve(`tabla-${base}.txt`)
        // });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}