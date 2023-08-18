import { crearinventario, actualizarInventario } from '../services/inventory.js';
import {genCollection} from '../helpers/db.js'

// Endpoint para trasladar productos entre bodegas
const transferProducts = async (req, res) => {
    const { bodegaOrigen, bodegaDestino, productoId, cantidad } = req.body;
    try {
        const inventarios = await genCollection("inventarios")
        // Obtener información de bodega de origen
        const bodegaOrigenInfo = await inventarios.findOne({ "id_bodega": bodegaOrigen, "id_producto": productoId });
        if (!bodegaOrigenInfo) {return res.status(403).json({status: 403, message: "La bodega de origen no tiene este producto"});}
       // if (bodegaOrigenInfo.cantidad < cantidad) {return res.status(403).json({ message: "Cantidad insuficiente en la bodega de origen." });}
       console.log(bodegaOrigenInfo.cantidad); 
       if (bodegaOrigenInfo.cantidad > cantidad) {
            let data = await actualizarInventario(bodegaOrigen,productoId, -cantidad)
            const bodegaDestinoinfo = await inventarios.findOne({ "id_bodega": bodegaDestino, "id_producto": productoId });
            if(!bodegaDestinoinfo){
                const newProductDest = await crearinventario( bodegaDestino, productoId, cantidad )
                console.log({ "data": data});
                const id = newProductDest.insertedId;
                res.status(200).json({ message: `Se ha actualizado 1 inventario y creado un inventario nuevo ${id}` })
            }else{
                const updateProductDest = await actualizarInventario(bodegaDestino, productoId, cantidad)
                res.status(201).json({ message: "Se han actualizado los inventarios con exito" })
            }
        }else{
           // return res.status(403).json({ message: "Cantidad insuficiente en la bodega de origen." });}
            res.status(500).json({ message: `La cantidad existente (${bodegaOrigenInfo}) en la bodega de salida es menor a la que desea mover (${cantidad})` })

        }
       
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en la conexión a la base de datos." });
    }
};


export {
    transferProducts
}