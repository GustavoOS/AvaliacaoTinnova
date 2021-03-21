import Router from "express";
import { createVehicleController } from "./useCases/createVehicle";
import { deleteVehicleController } from "./useCases/deleteVehicle";
import { listVehiclesController } from "./useCases/listVehicles";
import { seeVehicleController } from "./useCases/SeeVehicle";
import { updateVehicleController } from "./useCases/UpdateVehicle";

const router = Router();

router.post("/veiculos", (req, res) =>
    createVehicleController.handle(req, res));

router.delete("/veiculos/:id", (req, res) =>
    deleteVehicleController.handle(req, res));

router.get("/veiculos/:id", (req, res) =>
    seeVehicleController.handle(req, res));

router.put("/veiculos/:id", (req, res) =>
    updateVehicleController.handle(req, res));

router.patch("/veiculos/:id", (req, res) =>
    updateVehicleController.handle(req, res));

router.get("/veiculos", (req, res) =>
    listVehiclesController.handle(req, res));

export { router };
