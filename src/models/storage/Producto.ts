import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
export class storageProducto {
    
    @Expose({ name: 'Nombre_Producto' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Nombre_Producto es obligatoria`}}})
    nombre: string;

    @Expose({ name: 'descripcion' })
    @Transform(({ value }) => { if(value) return value ; else "faker"})
    descripcion: string;

    @Expose({ name: 'Estado_producto' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Estado_producto es obligatoria`}}})
    estado: number;

    @Expose({ name: 'Created_by' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Created_by es obligatoria`}}})
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

    constructor(data:Partial<storageProducto>) {
        Object.assign(this, data);
        this.nombre = "Faker";
        this.estado = 0;
        this.created_by = 0;
    }
}