module.exports = (app)=>{
    app.get("/admin",(req,res)=>{
        res.render('admin/form_add_noticia');
    });
    app.post("/noticias/salvar",(req,res)=>{
        var noticia = req.body;
        console.log(noticia);
        req.assert('titulo','Título é obrigatório!').notEmpty();
        req.assert('resumo','Resumo é obrigatório!').notEmpty();
        req.assert('resumo','Resumo deve conter no mínimo 10 e no máximo 100 caracteres!').len(10,100);
        req.assert('autor','Autor é obrigatório!').notEmpty();
        req.assert('data','Data é obrigatório!').notEmpty();
        req.assert('noticia','Notícia é obrigatório!').notEmpty();        

        var erros = req.validationErrors();

        if(erros){
            res.render('admin/form_add_noticia',{validacao:erros});
            return;
        }

        var con = app.config.db();
        var noticiaModels = new app.app.models.NoticiasDAO(con);
        noticiaModels.passCon(con);
        noticiaModels.salvarNoticia(noticia,(error, result) => {
            res.redirect('/noticias');
        });
    });
}