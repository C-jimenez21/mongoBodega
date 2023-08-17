import {Type, Transform, Expose} from 'class-transformer' 
import { IsDefined} from 'class-validator'
export class Bodega{
    @Expose({ name: "id" })
    ID:number

    @Expose({name:"nombre"}) 
    @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parameter NOMBRE"}},{toClassOnly:true})
    NOMBRE:string

    @Expose({name:"id_responsable"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parameter ID_RESPONSE"}},{toClassOnly:true})
    ID_RESPONSABLE:number

    @Expose({name:"estado"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parameter ESTADO"}},{toClassOnly:true})
    ESTADO:Number


    
    @Expose({ name: 'ID_Automovil_id' })
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro ID_Automovil_id es obligatorio y debe ser un numero entero (int).`}}})
    automovil: number;
    constructor(data: Partial<Bodega>){
        this.ID = 0;
        this.NOMBRE = "";
        this.ID_RESPONSABLE = 0;
        this.ESTADO =0 ;
    }
}