
const fs = require("fs");

const contentDir = fs.readdirSync('./models');

const db = contentDir.filter(file => 
    file.endsWith('.js') &&
    file !== 'index.js' &&
    file[0] !== '.'
);
module.exports = db;