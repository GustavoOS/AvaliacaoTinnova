import { vehicleRepository } from "../createVehicle";
import { DeleteVehicleController } from "./DeleteVehicleController";
import { DeleteVehicleUseCase } from "./DeleteVehicleUseCase";

const deleteVehicleUseCase: DeleteVehicleUseCase = new DeleteVehicleUseCase(vehicleRepository);
const deleteVehicleController: DeleteVehicleController = new DeleteVehicleController(deleteVehicleUseCase);

export {deleteVehicleController};
