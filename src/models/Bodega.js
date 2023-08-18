var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class storageBodega {
    constructor(data) {
        Object.assign(this, data);
        this.nombre = "Faker";
        this.id_responsable = 0;
        this.estado = 0;
    }
}
__decorate([
    Expose({ name: '_id' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", Number)
], storageBodega.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'Bodega_Nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Bodega_Nombre es obligatorio` }; } }),
    __metadata("design:type", String)
], storageBodega.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'Id_Responsable_Bodega' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Id_Responsable_Bodega es obligatoria` }; } }),
    __metadata("design:type", Number)
], storageBodega.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: 'Estado_Bodega' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Estado_Bodega es obligatoria` }; } }),
    __metadata("design:type", Number)
], storageBodega.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", Number)
], storageBodega.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", Number)
], storageBodega.prototype, "update_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], storageBodega.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], storageBodega.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], storageBodega.prototype, "deleted_at", void 0);
