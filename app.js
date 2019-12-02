var app = require('./config/server');

// var noticiasPag = require('./app/routes/noticia')(app);
// var homePag     = require('./app/routes/home')(app);
// var formPag     = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000,function(req,res){
    console.log("Servidor rodando com express");
});