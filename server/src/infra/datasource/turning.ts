import { sqlite } from "../../deps.ts";
import { TurningModel } from "../../domain/model/turning.ts";
import { TurningRepository } from "../../domain/repository/turning.ts";

export class TurningDataSource implements TurningRepository {
  constructor(private db: sqlite.DB) {}

  public fetchAll() {
    return this.db
      .query<[string, string]>("SELECT id, name FROM turnings")
      .map((row) => new TurningModel(row[0], row[1]));
  }
}
