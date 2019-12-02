module.exports = (app) => {
    app.get("/noticias", (req, res) => {
        var con = app.config.db();
        var noticiaModels = app.app.models.noticiaModels;

        noticiaModels.getNoticias(con,(error, result) => {
            res.render('noticias/noticias',{noticias:result});
        });
    });
}