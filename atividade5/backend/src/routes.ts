import Router from "express";
import { createVehicleController } from "./useCases/createVehicle";

const router = Router();

router.post("/veiculos", (request, response) =>
    createVehicleController.handle(request, response));

export { router };