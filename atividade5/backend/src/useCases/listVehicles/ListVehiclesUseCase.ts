import { Vehicle } from "../../entities/Vehicle";
import { VehicleRepository } from "../../repositories/VehicleRepository";
import { ListVehiclesDAO } from "./ListVehiclesDAO";

export class ListVehiclesUseCase {
    constructor(private gw: VehicleRepository) { }

    async execute() {
        const fetched = await this.gw.list();
        return fetched.map(v => this.createDAO(v));
    }

    private createDAO(v: Vehicle): ListVehiclesDAO {
        return {
            "name": v.name,
            "brand": v.brand,
            "id": v.id,
            "year": v.year
        }
    }
}
