import { vehicleRepository } from "../createVehicle";
import { FindVehiclesController } from "./FindVehiclesController";
import { FindVehiclesUseCase } from "./FindVehiclesUseCase";

const useCase = new FindVehiclesUseCase(vehicleRepository);
const findVehiclesController = new FindVehiclesController(useCase);

export {findVehiclesController};
