import {MigrationInterface, QueryRunner} from "typeorm";

export class Postrefactor1643887014137 implements MigrationInterface {
    name = 'Postrefactor1643887014137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Brand" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_a4a45d0f897767860c6c8209b96" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Tag" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" character varying NOT NULL, "userid" integer NOT NULL, CONSTRAINT "PK_00bd1ec314f664289873394731a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Product" ("id" SERIAL NOT NULL, "skuNumber" integer NOT NULL, "countryOfOrigin" character varying NOT NULL, "stateOfOrigin" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "userid" integer NOT NULL, "abv" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "brandidId" integer, "categoryidId" integer, CONSTRAINT "PK_9fc040db7872192bbc26c515710" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Category" ("id" SERIAL NOT NULL, CONSTRAINT "PK_c2727780c5b9b0c564c29a4977c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Image" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL, "updated" TIMESTAMP NOT NULL, "url" character varying NOT NULL, "publicid" character varying NOT NULL, CONSTRAINT "PK_ddecd6b02f6dd0d3d10a0a74717" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_tags_tag" ("productId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_8da52c0bc9255c6cb07af25ac73" PRIMARY KEY ("productId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_208235f4a5c925f11171252b76" ON "product_tags_tag" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0de90b04710a86601acdff88c2" ON "product_tags_tag" ("tagId") `);
        await queryRunner.query(`CREATE TABLE "category_tags_tag" ("categoryId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_6f36e7376e43305d9bbe8538752" PRIMARY KEY ("categoryId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8744a0a3d7cfe4c05ea8b37437" ON "category_tags_tag" ("categoryId") `);
        await queryRunner.query(`CREATE INDEX "IDX_73d55448198d6acc88f9c2fbad" ON "category_tags_tag" ("tagId") `);
        await queryRunner.query(`ALTER TABLE "Category" ADD "name" character varying`);
        await queryRunner.query(`ALTER TABLE "Tag" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Tag" ADD "createdAt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "createdAt" character varying`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "updatedAt" character varying`);
        await queryRunner.query(`ALTER TABLE "Image" ALTER COLUMN "created" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Image" ALTER COLUMN "updated" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Image" ALTER COLUMN "url" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Image" ALTER COLUMN "publicid" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ADD CONSTRAINT "FK_28d6e1f75763dfce373ea3f6b39" FOREIGN KEY ("brandidId") REFERENCES "Brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Product" ADD CONSTRAINT "FK_37450f9a494bf4ffd08c848ce62" FOREIGN KEY ("categoryidId") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_tags_tag" ADD CONSTRAINT "FK_208235f4a5c925f11171252b760" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_tags_tag" ADD CONSTRAINT "FK_0de90b04710a86601acdff88c21" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_tags_tag" ADD CONSTRAINT "FK_8744a0a3d7cfe4c05ea8b374372" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_tags_tag" ADD CONSTRAINT "FK_73d55448198d6acc88f9c2fbadc" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_tags_tag" DROP CONSTRAINT "FK_73d55448198d6acc88f9c2fbadc"`);
        await queryRunner.query(`ALTER TABLE "category_tags_tag" DROP CONSTRAINT "FK_8744a0a3d7cfe4c05ea8b374372"`);
        await queryRunner.query(`ALTER TABLE "product_tags_tag" DROP CONSTRAINT "FK_0de90b04710a86601acdff88c21"`);
        await queryRunner.query(`ALTER TABLE "product_tags_tag" DROP CONSTRAINT "FK_208235f4a5c925f11171252b760"`);
        await queryRunner.query(`ALTER TABLE "Product" DROP CONSTRAINT "FK_37450f9a494bf4ffd08c848ce62"`);
        await queryRunner.query(`ALTER TABLE "Product" DROP CONSTRAINT "FK_28d6e1f75763dfce373ea3f6b39"`);
        await queryRunner.query(`ALTER TABLE "Image" ALTER COLUMN "publicid" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Image" ALTER COLUMN "url" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Image" ALTER COLUMN "updated" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Image" ALTER COLUMN "created" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "updatedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "createdAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Tag" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Tag" ADD "createdAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" DROP COLUMN "name"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_73d55448198d6acc88f9c2fbad"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8744a0a3d7cfe4c05ea8b37437"`);
        await queryRunner.query(`DROP TABLE "category_tags_tag"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0de90b04710a86601acdff88c2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_208235f4a5c925f11171252b76"`);
        await queryRunner.query(`DROP TABLE "product_tags_tag"`);
        await queryRunner.query(`DROP TABLE "Image"`);
        await queryRunner.query(`DROP TABLE "Category"`);
        await queryRunner.query(`DROP TABLE "Product"`);
        await queryRunner.query(`DROP TABLE "Tag"`);
        await queryRunner.query(`DROP TABLE "Brand"`);
    }

}
