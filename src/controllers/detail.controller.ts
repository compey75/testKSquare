import { GET, DELETE, PUT,POST, route } from "awilix-express";
import { Request, Response } from "express";
import {BaseController} from '../common/controllers/base.controller'
import { CarDescriptionService } from "../services/car-description.service";
import { CarDescription } from "../services/repositories/domain/car-description";


@route("/")
export class DetailController extends BaseController {

  constructor(
    private readonly carDescriptionService: CarDescriptionService ,

) {
    super();
}

  @route('car/detail/:id')
  @GET()
  public async getByID(req: Request, res: Response) {
    try {
      const vin = req.params.id;

      const result = await this.carDescriptionService.findOne(vin);

      if (result) {
          res.send(result);
      } else {
          res.send({});
      }
     } catch (error) {
         this.handleException(error, res);
     }
  }

  @route('car/detail')
  @GET()
  public async getAll(req: Request, res: Response) {
    const result = await this.carDescriptionService.getAll();

    if (result) {
        res.send(result);
    } else {
        res.send({});
    }
  }

  @route('car/detail/:id')
  @DELETE()
  public async deleteCar(req: Request, res: Response) {
    try {
      const vin = req.params.id;

      const result = await this.carDescriptionService.delete(vin);

          res.send(result);

     } catch (error) {
         this.handleException(error, res);
     }
  }

  @route('car/detail/:id')
  @PUT()
  public async updateCarByID(req: Request, res: Response) {
      try {
          const id = req.params.id;

          const result = await this.carDescriptionService.update(id, {
              make: req.body.make,
              model: req.body.model,
              year: req.body.year ,
              color:req.body.color
          } as CarDescription);

          res.send(result);
      } catch (error) {
          this.handleException(error, res);
      }
  }

  @route('car/detail')
  @POST()
    public async store(req: Request, res: Response) {
        try {
            const result= await this.carDescriptionService.create({
                vin: req.body.vin,
                make: req.body.make,
                model: req.body.model,
                year: req.body.year ,
                color:req.body.color
            } as CarDescription);

            if (result) {
              res.status(201)
              res.send(result);
            }
            else {
              res.status(400)
              res.send(null)
            }

        } catch (error) {
            this.handleException(error, res);
        }
    }
}
