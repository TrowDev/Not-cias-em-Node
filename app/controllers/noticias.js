module.exports.noticias = (app, req, res) => {
    var con = app.config.db();
    var noticiaModels = new app.app.models.NoticiasDAO(con);
    noticiaModels.passCon(con);
    noticiaModels.getNoticias((error, result) => {
        res.render('noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = (app, req, res) => {
    console.log(req);
    //
    var con = app.config.db();
    var noticiaModels = new app.app.models.NoticiasDAO(con);
    //
    var idNoticia = req.query;//['id'];
    //
    noticiaModels.passCon(con);
    noticiaModels.getNoticia(idNoticia,(error, result) => {
        res.render('noticias/noticia', { noticia: result });
    });
}