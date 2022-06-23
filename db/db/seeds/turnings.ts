import { nessie } from "../../deps.ts";

export default class extends nessie.AbstractSeed<nessie.ClientSQLite> {
  /** Runs on seed */
  async run(info: nessie.Info): Promise<void> {
    this.turning();
    this.threads();
  }

  private async turning() {
    this.runQueries([
      `INSERT INTO turnings (id,name) VALUES ('056a8ef7-835a-4446-9242-6b4fdce6b9b9','Regular')`,
      `INSERT INTO turnings (id,name) VALUES ('66e57df6-5b7d-4ca2-9adb-54bcaf4d33cf','DropD')`,
      `INSERT INTO turnings (id,name) VALUES ('9394b4bf-d0ff-4b4c-8a2b-517ad673f229','DADGAD')`,
    ]);
  }

  private async threads() {
    this.runQueries([
      `INSERT INTO threads (id,turning_id) VALUES ('62b917c7-e7c7-4f67-9213-33864577fe9b','056a8ef7-835a-4446-9242-6b4fdce6b9b9')`,
    ]);
  }

  private async runQueries(queries: string[]) {
    for (let query of queries) {
      this.client.query(query);
    }
  }
}
