module.exports = (app)=>{
    app.get("/admin",(req,res)=>{
        res.render('admin/form_add_noticia');
    });
    app.post("/noticias/salvar",(req,res)=>{
        var noticia = req.body;
        var con = app.config.db();
        var noticiaModels = app.app.models.noticiaModels;

        noticiaModels.salvarNoticia(noticia,con,(error, result) => {
            res.redirect('/noticias');
        });
    });
}