import { TurningRepository } from "../../domain/repository/turning.ts";

export class ListTurningUsecase {
  constructor(private turningRepository: TurningRepository) {}

  public listTurning() {
    return this.turningRepository.fetchAll();
  }
}
