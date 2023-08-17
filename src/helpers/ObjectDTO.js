import { storageProducto } from '../models/Producto.js'
import { storageInventario } from '../models/Inventario.js'
import { storageBodega } from '../models/Bodega.js'

export const objectDTO = {
    "bodegas": storageBodega,
    "inventarios": storageInventario,
    "productos": storageProducto
}
