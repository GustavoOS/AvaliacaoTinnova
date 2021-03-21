import { VehicleRepository } from "../../repositories/VehicleRepository";

export class DeleteVehicleUseCase {

    constructor(private gw: VehicleRepository){}

    async execute(id: string)
    {
        const vehicle = await this.gw.findById(id);
        if(!vehicle)
            throw new Error('Vehicle not found');
        await this.gw.delete(id);
    }
}

