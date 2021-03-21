import { vehicleRepository } from "../createVehicle";
import { UpdateVehicleController } from "./UpdateVehicleController";
import { UpdateVehicleUseCase } from "./UpdateVehicleUseCase";

const updateVehicleUseCase: UpdateVehicleUseCase = new UpdateVehicleUseCase(vehicleRepository);
const updateVehicleController: UpdateVehicleController = new UpdateVehicleController(updateVehicleUseCase);

export {updateVehicleController};

