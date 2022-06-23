import { nessie } from "../../deps.ts";

export default class extends nessie.AbstractMigration<nessie.ClientSQLite> {
  /** Runs on migrate */
  async up(info: nessie.Info): Promise<void> {
    await this.client.query(`
      CREATE TABLE IF NOT EXISTS 
        threads
        (
          id VARCHAR PRIMARY KEY,
          turning_id INTEGER,
          created_at timestamp NOT NULL DEFAULT current_timestamp,
          updated_at timestamp NOT NULL DEFAULT current_timestamp,
          FOREIGN KEY(turning_id) REFERENCES turnings(id)
        );
    `);
  }

  /** Runs on rollback */
  async down(info: nessie.Info): Promise<void> {
    await this.client.query(`DROP TABLE IF EXISTS threads`);
  }
}
