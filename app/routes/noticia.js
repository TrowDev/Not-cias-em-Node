module.exports = (app) => {
    app.get("/noticia", (req, res) => {
        var con = app.config.db();
        var noticiaModels = new app.app.models.NoticiasDAO(con);
        noticiaModels.passCon(con);
        noticiaModels.getNoticia((error, result) => {
            res.render('noticias/noticia',{noticia:result});
        });
    });
}