import {genCollection} from '../helpers/db.js'
import {con} from '../DB/connection.js'
import { Collection } from 'mongodb';


//Realizar un EndPolnt que permita listar todas las bodegas ordenadas alfabéticamente.
    const getBodegas = async (req, res, next) => {
        try {
            //console.log("hola deade el getBpdegas");
            //let db = await con();
            //console.log("hola deade el getBpdegas 2");
            //let bodegas = db.collection('bodegas');
            //let clineteRegistrado = await bodegas.find().toArray();
            //console.log("hola deade el getBpdegas 3");
            let coleccion = await genCollection("bodegas")
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
        let consult2 = await coleccion.find().sort( { nombre: 1 } )

           let data = await coleccion.aggregate(consulting).toArray()
            res.send(data); 
        } catch (error) {
            res.status(500).json(error);
        }
    };

/**
 * 
 * Realizar un EndPoint que permita listar todos los productos en orden
descendente por el campo "Total".
• El campo "Total" es la cantidad de unidades que la empresa tiene
de este producto, considerando la unión de todas las bodegas, es
decir que el dato como tal no existe en la base de datos,sino se debe
calcular. Si la Bodega A tiene 1O unidades, la Bodega B tiene 5
unidades y la Bodega C tiene 3 unidades. Total= 18. 
 * Realizar un EndPoint que permita listar todos los productos en orden
descendente por el campo "Total".
• El campo "Total" es la cantidad de unidades que la empresa tiene
de este producto, considerando la unión de todas las bodegas, es
decir que el dato como tal no existe en la base de datos,sino se debe
calcular. Si la Bodega A tiene 1O unidades, la Bodega B tiene 5
unidades y la Bodega C tiene 3 unidades. Total= 18. 
 *  
 */
    const getProductosTotal = async (req, res, next) => {
        try {
            //console.log("hola deade el getBpdegas");
            //let db = await con();
            //console.log("hola deade el getBpdegas 2");
            //let bodegas = db.collection('bodegas');
            //let clineteRegistrado = await bodegas.find().toArray();
            //console.log("hola deade el getBpdegas 3");
            let coleccion = await genCollection("productos")
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

           let data = await coleccion.aggregate(consulting).toArray()
            res.send(data); 
        } catch (error) {
            res.status(500).json(error);
        }
    };







    const postBodegas = async (req, res, next) => {
    
        
            // let {nombre, responsable, estado, creador} = req.body
            // let session
            // try {
            //     const nuevaSesion = await counter.getNewId("bodegas")
            //     const { newId, session: newSession } = nuevaSesion;
            //     session = newSession;
            //     const bodegasCollection = await collectionGen("bodegas");
            //     const result = await bodegasCollection.insertOne(
            //         {
            //             _id: newId,
            //             nombre: nombre,
            //             id_responsable: responsable,
            //             estado: estado,
            //             created_by: creador,
            //             update_by: null,
            //             created_at: new Date(),
            //             updated_at: null,
            //             deleted_at: null
            //         },
            //     );
            //     await session.commitTransaction();
            //     return result;
            // } catch (error) {
            //     throw error;
            // } finally {
            //     if (session) {
            //         session.endSession();
            //     }
            // }
        };


export {
    getBodegas,
    postBodegas
}