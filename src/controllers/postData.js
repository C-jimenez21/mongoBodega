import { genCollection, getNewId } from '../helpers/db.js'
// Realizar un EndPolnt que permita crear una bodegas.(agregar en los comentarios de la función los datos de entrada).

const postNewBodega = async (req, res) => {
    try {
        const {nombre, id_responsable, estado } = req.body;
        const nuevoId = await getNewId("bodegas")
        console.log({"newId: contetn": nuevoId});
        const schemaBoodega = {
            "_id": nuevoId,
            "nombre": nombre,
            "id_responsable": id_responsable,
            "estado": estado
        }

        const post = await genCollection('bodegas')
        const newBodega = await post.insertOne(schemaBoodega);
        res.status(201).json({status: 201, message: "Bodega creada con exito"});
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied);
        res.status(400).json({
            message: error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied
        });
    }
    
};


export {
    postNewBodega
}