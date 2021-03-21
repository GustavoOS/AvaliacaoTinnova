import Router from "express";
import { createVehicleController } from "./useCases/createVehicle";
import { deleteVehicleController } from "./useCases/deleteVehicle";
import { seeVehicleController } from "./useCases/SeeVehicle";

const router = Router();

router.post("/veiculos", (request, response) =>
    createVehicleController.handle(request, response));

router.delete("/veiculos/:id", (req, res) =>
    deleteVehicleController.handle(req, res));

router.get("/veiculos/:id", (req, res) =>
    seeVehicleController.handle(req, res));

export { router };