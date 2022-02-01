"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BrandModule = void 0;
var common_1 = require("@nestjs/common");
var brand_service_1 = require("./brand.service");
var brand_controller_1 = require("./brand.controller");
var brand_entity_1 = require("./entities/brand.entity");
var typeorm_1 = require("@nestjs/typeorm");
var BrandModule = /** @class */ (function () {
    function BrandModule() {
    }
    BrandModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([brand_entity_1["default"]])],
            controllers: [brand_controller_1.BrandController],
            providers: [brand_service_1.BrandService]
        })
    ], BrandModule);
    return BrandModule;
}());
exports.BrandModule = BrandModule;
