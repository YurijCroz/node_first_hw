// task 1 >>>>>>>>>
const fs = require("fs");
const db = require('./models/index.js');

console.log(db);
db.forEach(file => {
    console.log(fs.readFileSync(`./models/${file}`, {
        encoding: "utf-8"
    }))
});
// <<<<<<<<<<<<

// task 2 >>>>>>>>>>

const bcrypt = require('bcrypt');
const users = require('./seed-users');

function hashed (us) {
    const hashUsers = us.map(user => (
        bcrypt.hashSync(user.passwordHash, 10)
    ));
    return hashUsers
}

const hashUsers = hashed(users);

console.log(hashUsers);

// <<<<<<<<<<<<<<<<<

// task 3 >>>>>>>>>
const path = require('path');
const indexPath = path.join(__dirname, './client/public/index.html');

const http = require('http');
const server = http.createServer(requestListener);
server.listen(3000);

function requestListener(req, res){
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(fs.readFileSync(indexPath));
    }
}
// <<<<<<<<<<<<