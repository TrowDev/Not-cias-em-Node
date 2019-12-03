module.exports = (app)=>{
    app.get("/admin",(req,res)=>{
        app.app.controllers.admin.form_add_noticia(app,req,res);
    });
    app.post("/noticias/salvar",(req,res)=>{
        app.app.controllers.admin.salvar_noticia(app,req,res);
    });
}