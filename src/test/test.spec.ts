import { CarDescriptionRepository } from "../services/repositories/car-description-repository";
import { CarDescriptionService } from "../services/car-description.service";
import { CarDescription } from "../services/repositories/domain/car-description";
var expect = require('expect.js');
var assert = require('assert');

describe('CarDescription System', function () {
  it('works', async function () {
    const carDescRepository = new CarDescriptionRepository();
    const carDescService = new CarDescriptionService(
      carDescRepository
    )

    const newCarDescription = {
      vin:'12345',
      make:'VochoMovil',
      model: 'Sedan',
      year: 1987 ,
      color: 'orange'
    } as CarDescription
    
    const created = await carDescService.create(newCarDescription)
    expect(created).to.equal(newCarDescription, ' the object returned is the same that was sent')
    
  })
})