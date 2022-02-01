"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var typeorm_1 = require("@nestjs/typeorm");
var product_module_1 = require("./product/product.module");
var tags_module_1 = require("./tags/tags.module");
var brand_module_1 = require("./brand/brand.module");
var image_module_1 = require("./image/image.module");
var category_module_1 = require("./category/category.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5433,
                    username: 'postgres',
                    password: 'qwerty',
                    migrations: ["./migration/*.js"],
                    cli: {
                        migrationsDir: "src/migration"
                    },
                    database: 'todo',
                    // migrationsTableName: "",
                    entities: ["dist/**/*.entity{.ts,.js}"]
                }), product_module_1.ProductModule, tags_module_1.TagsModule, brand_module_1.BrandModule, image_module_1.ImageModule, category_module_1.CategoryModule],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
