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
export class storageInventario {
    constructor(data) {
        Object.assign(this, data);
        this.id_bodega = 0;
        this.id_producto = 0;
        this.cantidad = 0;
    }
}
__decorate([
    Expose({ name: 'Id_Bodega' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Id_Bodega  es obligatoria` }; } }),
    __metadata("design:type", Number)
], storageInventario.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: 'Id_Producto' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Id_Producto es obligatoria` }; } }),
    __metadata("design:type", Number)
], storageInventario.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: 'Cantidad_Inventario' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Cantidad_Inventario es obligatoria` }; } }),
    __metadata("design:type", Number)
], storageInventario.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", Number)
], storageInventario.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", Number)
], storageInventario.prototype, "update_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], storageInventario.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], storageInventario.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], storageInventario.prototype, "deleted_at", void 0);
