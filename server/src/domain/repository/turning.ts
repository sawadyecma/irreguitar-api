import { TurningModel } from "../model/turning.ts";

export interface TurningRepository {
  fetchAll: () => TurningModel[];
}
