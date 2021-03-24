const dbCon = require("../Configuracion/Config");

function listaEstatus(req,res,next){
    dbCon.any('SELECT * FROM status_assistance')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Estatus de asistencia"
        })
    })
}


module.exports= {
    listaEstatus: listaEstatus
}