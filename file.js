const fs = require('fs');

function printFileContent(error, data) {
    if (error) {
        console.log('Arquivo não encontrado!', error);
        return;
    }
    console.log(data);
}

fs.readFile('.gitignored', 'utf8', printFileContent);
console.log('Última instrução');