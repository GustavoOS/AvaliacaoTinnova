import { vehicleRepository } from "../createVehicle";
import { ListVehiclesController } from "./ListVehiclesController";
import { ListVehiclesUseCase } from "./ListVehiclesUseCase";

const useCase: ListVehiclesUseCase = new ListVehiclesUseCase(vehicleRepository);
const listVehiclesController = new ListVehiclesController(useCase);

export {listVehiclesController};
