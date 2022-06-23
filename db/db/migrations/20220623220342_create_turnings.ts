import { nessie } from "../../deps.ts";

export default class extends nessie.AbstractMigration<nessie.ClientSQLite> {
  /** Runs on migrate */
  async up(info: nessie.Info): Promise<void> {
    await this.client.query(`
      CREATE TABLE IF NOT EXISTS 
        turnings
        (
          id VARCHAR PRIMARY KEY,
          name VARCHAR NOT NULL,
          created_at timestamp NOT NULL DEFAULT current_timestamp,
          updated_at timestamp NOT NULL DEFAULT current_timestamp
        );
    `);
  }

  /** Runs on rollback */
  async down(info: nessie.Info): Promise<void> {
    await this.client.query(`DROP TABLE IF EXISTS turnings`);
  }
}
