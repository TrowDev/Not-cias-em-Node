function NoticiasDAO(con) {
    this._conn = con;
}

NoticiasDAO.prototype.passCon = (con) => {
    this._conn = con;
}

NoticiasDAO.prototype.getNoticias = (callback) => {
    this._conn.query("SELECT * FROM noticias ORDER BY data DESC;", callback);
}

NoticiasDAO.prototype.getNoticia = (idNoticia,callback) => {
    console.log(idNoticia.id);
    this._conn.query("SELECT * FROM noticias WHERE id="+idNoticia.id, callback);
}

NoticiasDAO.prototype.salvarNoticia = (noticia, callback) => {
    this._conn.query("INSERT INTO noticias SET ? ;", noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = (callback)=>{
    this._conn.query("SELECT * FROM noticias ORDER BY data DESC LIMIT 5;",callback);
}

module.exports = () => {
    console.log('Exportando módulo de notícias...');
    return NoticiasDAO;
}