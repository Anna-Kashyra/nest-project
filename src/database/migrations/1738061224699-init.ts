import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1738061224699 implements MigrationInterface {
  name = 'Init1738061224699';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
  }
}
