import { genCollection, getNewId } from '../helpers/db.js'
import { crearinventario, actualizarInventario } from '../services/inventory.js';
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


/*Realizar un EndPoint que permita insertar un productos y a su vez asigne
una cantidad inicial del mismo en la tabla inventarios en una de las bodegas
por default.*/

const postNewProduct = async (req, res) => {
    try {
        const {nombre, created_by, estado } = req.body;
        const nuevoId = await getNewId("productos")
        console.log({"newId: contetn": nuevoId});
        const schemaProducto = {
            "_id": nuevoId,
            "nombre": nombre,
            "created_by": created_by,
            "estado": estado,
        }
        const post = await genCollection('productos')
        const newBodega = await post.insertOne(schemaProducto);
        const newInventory = await crearinventario(5, schemaProducto._id, 100)
        //(newInventory) ? console.log("creado inventario default") : console.log("algo fue mal con el inventarii");
        res.status(201).json({status: 201, message: "producto creado con exito"});
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied
        });
    }
    
};




const insertinventoryIf = async (req, res) => {
    try {
        const { id_bodega, id_producto, cantidad } = req.body;
        const condition = await genCollection("inventarios")
        const conditionreal = await condition.findOne({"id_bodega": id_bodega, "id_producto": id_producto})
        if(conditionreal) {
                const updateResult = await actualizarInventario(id_bodega, id_producto, cantidad);
                if (updateResult.modifiedCount > 0) {
                    res.status(201).json({status: 201,message: `inventario con la combinación bodega:${id_bodega}, producto: ${id_producto} se actualizó con éxito`
                    });
                } else {
                    res.status(201).json({status: 201,message: `Ocurrio un error en la actualizacion del inventario con la combinación bodega:${id_bodega}, producto: ${id_producto}`})   
                }
        }else{
            const newInventory = await crearinventario(id_bodega, id_producto, cantidad)
                res.status(201).json({status: 201, message: `inventario con la combinacion bodega:${id_bodega}, producto: ${id_producto} se creo con exito, tiene ${cantidad} unidades`});
        }
    } catch (error) {
        console.log(error.errInfo);
        res.status(400).json({
            message: error.errInfo
        });
    }
    
};





export {
    postNewBodega,
    postNewProduct,insertinventoryIf
}