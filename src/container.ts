import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { CarDescriptionService } from "./services/car-description.service";
import { CarDescriptionRepository } from "./services/repositories/car-description-repository";

export default (app: Application) => {

  const container = createContainer({
    injectionMode: "CLASSIC",
  });

  container.register({
    carDescriptionService: asClass(CarDescriptionService).scoped() ,
    carDescriptionRepository: asClass(CarDescriptionRepository).scoped()

  })

  app.use(scopePerRequest(container));
};
