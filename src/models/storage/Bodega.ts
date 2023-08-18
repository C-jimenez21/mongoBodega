import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, IsInt} from 'class-validator';
export class storageBodega {

    @Expose({ name: '_id' })
    @Transform(({ value }) => { if(value) return value ; else 0})
    _id: number;

    @Expose({ name: 'Bodega_Nombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Bodega_Nombre es obligatorio`}}})    
    nombre: string;

    @Expose({ name: 'Id_Responsable_Bodega' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Id_Responsable_Bodega es obligatoria`}}})
    id_responsable: number;

    @Expose({ name: 'Estado_Bodega' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Estado_Bodega es obligatoria`}}})
    estado: number;

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

    constructor(data:Partial<storageBodega>) {
        Object.assign(this, data);
        this.nombre = "Faker";
        this.id_responsable = 0;
        this.estado = 0;
    }
}