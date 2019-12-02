module.exports = ()=>{

    this.getNoticias = (con,callback)=>{
        con.query("SELECT * FROM noticias;", callback);
    }

    this.getNoticia = (con,callback)=>{
        con.query("SELECT * FROM noticias WHERE id=2;",callback);
    }

    this.salvarNoticia = (noticia,con,callback)=>{
        con.query("INSERT INTO noticias SET ? ;",noticia,callback);
    }

    return this;
}