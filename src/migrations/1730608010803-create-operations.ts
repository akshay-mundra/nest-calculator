import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOperations1730608010803 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'operations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'operand1',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'operand2',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'operator',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'result',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('operations');
  }
}
