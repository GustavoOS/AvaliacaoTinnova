import { VehicleRepository } from "../../repositories/VehicleRepository";


export class SeeVehicleUseCase {
    constructor(private gw: VehicleRepository) {}

    async execute(id: string) {
        const vehicle = await this.gw.findById(id);
        if(!vehicle)
            throw new Error('Vehicle not found');
        return vehicle;
    }
}
