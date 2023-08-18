import { genCollection, getNewId } from '../helpers/db.js'


async function crearinventario(idBodega, idProducto, cantidad){
    try {
        const nuevoId = await getNewId("inventarios")
       // console.log({"newId: contetn": nuevoId});
        const schemaInventario = {
            "_id": nuevoId,
            "id_bodega": idBodega,
            "id_producto": idProducto,
            "cantidad": cantidad,
        }
        const post = await genCollection('inventarios')
        const newBodega = await post.insertOne(schemaInventario);
        return newBodega 
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied);
        res.status(400).json({
            message: error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied
        });
    }
}

async function actualizarInventario2(idBodega, idProducto, cantidad){
    try {
        const post = await genCollection('inventarios')
        const updateInventory = await post.updateOne(
                { "id_bodega": idBodega, "id_producto":idProducto },
                { $inc:
                    {
                      "cantidad": cantidad
                    } 
                })
        return updateInventory 
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied);
        res.status(400).json({
            message: error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied
        });
    }
}

async function actualizarInventario(idBodega, idProducto, cantidad){
    try {
        const post = await genCollection('inventarios')
        const updateInventory = await post.updateOne(
            { "id_bodega": idBodega, "id_producto": idProducto },
            {
                $inc: {
                    "cantidad": cantidad
                }
            }
        );

        return updateInventory; // Retorna el resultado de updateOne
    } catch (error) {
        // Manejo de errores
        console.log(error);
        throw error; // Lanza el error para que sea manejado en la función principal
    }
}




export {
    crearinventario,
    actualizarInventario
}
