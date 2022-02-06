import { MigrationInterface, QueryRunner } from "typeorm";

export class Postrefactor1643887014137 implements MigrationInterface {
    name = 'Postrefactor1643887014137'

    public async up(queryRunner: QueryRunner): Promise<void> {
     
        await queryRunner.query(`ALTER TABLE "Product" RENAME COLUMN "name" TO "title"`);
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      
        await queryRunner.query(`ALTER TABLE "Product" RENAME COLUMN "title" TO "name"`);
       
    }

}
