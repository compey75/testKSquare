import { CarDescriptionRepository } from "./repositories/car-description-repository";
import { CarDescription } from "./repositories/domain/car-description";

export class CarDescriptionService {
  constructor(
    private readonly carDescriptionRepository: CarDescriptionRepository
  ) {}

  public async create(item:CarDescription): Promise<CarDescription|null> {
    return await this.carDescriptionRepository.create(item);
  }
  public async update(vin:string, item:CarDescription): Promise<CarDescription[]> {
    return await this.carDescriptionRepository.update(vin,item);
  }
  public async delete(vin:string): Promise<boolean> {
    return await this.carDescriptionRepository.delete(vin);
  }

  public async find(item:CarDescription): Promise<CarDescription[]> {
    return await this.carDescriptionRepository.find(item);
  }

  public async findOne(vin :string): Promise<CarDescription | null> {
    return await this.carDescriptionRepository.findOne(vin);
  }

  public async getAll(): Promise<CarDescription [] > {
    return await this.carDescriptionRepository.getAll();
  }
}
