import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefractor1643630475003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.query(`ALTER TABLE "Product" RENAME COLUMN "name" TO "title" `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Product" RENAME COLUMN "title" TO "name"`); // reverts things made in "up" method

    }

}
