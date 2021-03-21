import { Vehicle } from "../../entities/Vehicle";
import { VehicleRepository } from "../../repositories/VehicleRepository";
import { CreateVehicleDTO } from "./CreateVehicleDTO";

export class CreateVehicleUseCase {
    constructor(private vehicleRepository: VehicleRepository) { }
    id: string;

    async execute(createVehicleDTO: CreateVehicleDTO) {
        const brandExists =
            await this.vehicleRepository.brandExists(createVehicleDTO.brand);
        if(!brandExists)
            throw new Error('Unknown brand');
        const vehicle = new Vehicle(createVehicleDTO);
        await this.vehicleRepository.save(vehicle);
        return vehicle.id;
    }
}
