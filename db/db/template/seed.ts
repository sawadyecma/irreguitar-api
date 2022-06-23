import { nessie } from "../../deps.ts";

export default class extends nessie.AbstractSeed<nessie.ClientSQLite> {
  /** Runs on seed */
  async run(info: nessie.Info): Promise<void> {
    this.client.query(`INSERT`);
  }
}
