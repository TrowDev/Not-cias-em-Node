module.exports = (app) => {
    app.get("/noticias", (req, res) => {
        var con = app.config.db();
        var noticiaModels = new app.app.models.NoticiasDAO(con);
        noticiaModels.passCon(con);
        noticiaModels.getNoticias((error, result) => {
            res.render('noticias/noticias',{noticias:result});
        });
    });
}