import { BaseRepository } from "./base/BaseRepository";
import { CarDescription } from "./domain/car-description"

const _cars = require('../../data/CarDescriptionList.json')

export  class CarDescriptionRepository extends BaseRepository<CarDescription>{

  async create(item: CarDescription){
    
    let keys = Object.keys(item);
   
    let isNotCarDescription = keys.some(k=> item[k] === '' || item[k] === undefined)

    if (!isNotCarDescription) {
      _cars.push(item);
      return item ;
    }
    else {
      return null;
    }

  }

  async update(vin: string, item: CarDescription){

    const toUpdate = await this.findOne(vin)

    try {
      
      Object.assign(toUpdate, item);
      return toUpdate;

    }catch (error) {
      return item;
    }

  }

  async delete(vin: string) {

    const toDelete = await this.findOne(vin)
    const idx = _cars.indexOf(toDelete)
    if (idx === -1) return false
    _cars.splice(idx, 1)

    return true;

  }

  async findOne(vin:string) {
    
    const filtered = _cars.find((car:CarDescription) => {
      return car.vin === vin
    })
    
    return filtered
  }

  async getAll() {
    return _cars;
  }

  
   
}