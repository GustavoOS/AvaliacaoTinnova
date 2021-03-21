import { Vehicle } from "../../entities/Vehicle";
import { VehicleRepository } from "../../repositories/VehicleRepository";
import { UpdateVehicleDAO } from "./UpdateVehicleDAO";

export class UpdateVehicleUseCase {
    constructor(private gw: VehicleRepository) {}

    async execute(param: UpdateVehicleDAO, id: string) {
        let v = await this.gw.findById(id);
        if(!v)
            throw new Error('Vehicle not found');
        v = { ...v, ...param } as Vehicle;
        v.updatedAt = new Date();
        await this.gw.update(id, v);
    }
}
