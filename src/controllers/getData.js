import {genCollection} from '../helpers/db.js'
import {con} from '../DB/connection.js'

    const getBodegas = async (req, res, next) => {
        try {
            //console.log("hola deade el getBpdegas");
            //let db = await con();
            //console.log("hola deade el getBpdegas 2");
            //let bodegas = db.collection('bodegas');
            //let clineteRegistrado = await bodegas.find().toArray();
            //console.log("hola deade el getBpdegas 3");
            let consulta = await genCollection("bodegas")
            let consulting  = [
                {
                    $project: {
                        _id: 0,
                        ID: "$_id",
                        Bodega_Nombre: "$nombre",
                        Responsable_ID: "$id_responsable",
                        Estado: "$estado",
                        Creado_Por: "$created_by",
                        Actualizado_Por: "$update_by",
                        Fecha_Creacion: "$created_at",
                        Fecha_Actualizacion: "$updated_at",
                        Fecha_Eliminacion: "$deleted_at"
                    }
                },
                {
                    $sort: {
                        Bodega_Nombre: 1
                    }
                }
            ]
           // const result = collection.aggregate(pipeline).toArray();] 

           let bodegas = await consulta.aggregate(consulting).toArray()
            res.send(bodegas); 
        } catch (error) {
            res.status(500).json(error);
        }
    };




export {
    getBodegas
}