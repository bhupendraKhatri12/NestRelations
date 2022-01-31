"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var brand_entity_1 = require("src/brand/entities/brand.entity");
var category_entity_1 = require("src/category/entities/category.entity");
var typeorm_1 = require("typeorm");
var tag_entity_1 = require("../../tags/entities/tag.entity");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Product.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "skuNumber");
    __decorate([
        typeorm_1.ManyToOne(function () { return brand_entity_1["default"]; }, function (brand) { return brand.id; })
    ], Product.prototype, "Brandid");
    __decorate([
        typeorm_1.ManyToMany(function () { return tag_entity_1["default"]; }),
        typeorm_1.JoinTable()
    ], Product.prototype, "tags");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "countryOfOrigin");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "stateOfOrigin");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "description");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "userid");
    __decorate([
        typeorm_1.ManyToOne(function () { return category_entity_1["default"]; }, function (category) { return category.id; })
    ], Product.prototype, "categoryid");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "abv");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "createdAt");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "updatedAt");
    Product = __decorate([
        typeorm_1.Entity("Product")
    ], Product);
    return Product;
}());
exports["default"] = Product;
