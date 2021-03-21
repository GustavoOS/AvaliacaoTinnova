import { VehicleRepositoryImpl } from "../../repositories/implementations/VehicleRepositoryImpl";
import { CreateVehicleController } from "./CreateVehicleController";
import { CreateVehicleUseCase } from "./CreateVehicleUseCase";

const vehicleRepository: VehicleRepositoryImpl = new VehicleRepositoryImpl();
const createVehicleUseCase: CreateVehicleUseCase =
    new CreateVehicleUseCase(vehicleRepository);
const createVehicleController: CreateVehicleController =
    new CreateVehicleController(createVehicleUseCase);

export {createVehicleController, createVehicleUseCase, vehicleRepository};
