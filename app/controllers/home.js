module.exports.index = (app,req,res) =>{
    var con = app.config.db();
    var noticiaModels = new app.app.models.NoticiasDAO(con);
    noticiaModels.passCon(con);
    noticiaModels.get5UltimasNoticias((error,result)=>{
        res.render("home/index",{noticias:result});
    });
}