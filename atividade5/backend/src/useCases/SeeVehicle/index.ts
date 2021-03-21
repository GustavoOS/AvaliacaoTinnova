import { vehicleRepository } from "../createVehicle";
import { SeeVehicleController } from "./SeeVehicleController";
import { SeeVehicleUseCase } from "./SeeVehicleUseCase";

const seeVehicleUseCase: SeeVehicleUseCase = new SeeVehicleUseCase(vehicleRepository);
const seeVehicleController: SeeVehicleController = new SeeVehicleController(seeVehicleUseCase);

export {seeVehicleController};
