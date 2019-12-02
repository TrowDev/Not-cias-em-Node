module.exports = (app) => {
    app.get("/noticia", (req, res) => {
        var con = app.config.db();
        var noticiaModels = app.app.models.noticiaModels;
        
        noticiaModels.getNoticia(con,(error, result) => {
            res.render('noticias/noticia',{noticia:result});
        });
    });
}