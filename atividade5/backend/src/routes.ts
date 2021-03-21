import Router from "express";
import { createVehicleController } from "./useCases/createVehicle";
import { deleteVehicleController } from "./useCases/deleteVehicle";

const router = Router();

router.post("/veiculos", (request, response) =>
    createVehicleController.handle(request, response));

router.delete("/veiculos/:id", (req, res) =>
    deleteVehicleController.handle(req, res));

export { router };