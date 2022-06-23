import { nessie } from "../../deps.ts";

export default class extends nessie.AbstractMigration<nessie.ClientSQLite> {
  /** Runs on migrate */
  async up(info: nessie.Info): Promise<void> {
    await this.client.query(``);
  }

  /** Runs on rollback */
  async down(info: nessie.Info): Promise<void> {
    await this.client.query(``);
  }
}
