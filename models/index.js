
const fs = require("fs");
const path = require("path");

const contentDir = fs.readdirSync('./models');

const db = contentDir.filter(file => 
    file.endsWith('.js') &&
    file !== path.basename(__filename) &&
    !file.startsWith('.')
);
module.exports = db;