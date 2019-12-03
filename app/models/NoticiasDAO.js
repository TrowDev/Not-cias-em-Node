function NoticiasDAO(con) {
    this._conn = con;
}

NoticiasDAO.prototype.passCon = (con) => {
    this._conn = con;
}

NoticiasDAO.prototype.getNoticias = (callback) => {
    this._conn.query("SELECT * FROM noticias;", callback);
}

NoticiasDAO.prototype.getNoticia = (callback) => {
    this._conn.query("SELECT * FROM noticias WHERE id=2;", callback);
}

NoticiasDAO.prototype.salvarNoticia = (noticia, callback) => {
    this._conn.query("INSERT INTO noticias SET ? ;", noticia, callback);
}

module.exports = () => {
    console.log('Exportando módulo de notícias...');
    return NoticiasDAO;
}