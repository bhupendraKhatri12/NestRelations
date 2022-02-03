"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var product_entity_1 = require("src/product/entities/product.entity");
var tag_entity_1 = require("src/tags/entities/tag.entity");
var typeorm_1 = require("typeorm");
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Category.prototype, "id");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Category.prototype, "name");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1["default"]; }, function (product) { return product.id; })
    ], Category.prototype, "productid");
    __decorate([
        typeorm_1.ManyToMany(function () { return tag_entity_1["default"]; }),
        typeorm_1.JoinTable()
    ], Category.prototype, "tags");
    Category = __decorate([
        typeorm_1.Entity("Category")
    ], Category);
    return Category;
}());
exports["default"] = Category;
