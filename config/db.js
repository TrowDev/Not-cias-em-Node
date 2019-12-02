var mysql   = require('mysql');

var conn    = ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    console.log('O autoload carregou o módulo de conexão ao bd.');
    return conn;
}