import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
export class storageInventario {

    @Expose({ name: 'Id_Bodega' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Id_Bodega  es obligatoria`}}})
    id_bodega: number;

    @Expose({ name: 'Id_Producto' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Id_Producto es obligatoria`}}})
    id_producto: number;

    @Expose({ name: 'Cantidad_Inventario' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Cantidad_Inventario es obligatoria`}}})
    cantidad: number;

    @Expose({ name: 'created_by' })
    @Transform(({ value }) => { if(value) return value ; else 0})
    created_by: number;

    @Expose({ name: 'update_by' })
    @Transform(({ value }) => { if(value) return value ; else 0})
    update_by: number;

    @Expose({ name: 'created_at' })
    @Transform(({ value }) => { if(value) return value ; else "faker"})
    created_at: string;

    @Expose({ name: 'updated_at' })
    @Transform(({ value }) => { if(value) return value ; else "faker"})
    updated_at: string;

    @Expose({ name: 'deleted_at' })
    @Transform(({ value }) => { if(value) return value ; else "faker"})
    deleted_at: string;

    constructor(data:Partial<storageInventario>) {
        Object.assign(this, data);
        this.id_bodega = 0;
        this.id_producto = 0;
        this.cantidad = 0;
    }
}