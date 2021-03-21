import { Vehicle } from "../../entities/Vehicle";
import { VehicleRepository } from "../../repositories/VehicleRepository";
import { FindVehiclesDAO } from "./FindVehiclesDAO";

export class FindVehiclesUseCase {
    constructor(private gw: VehicleRepository) { }

    async execute() {
        const list = await this.gw.list();
        let data: FindVehiclesDAO = { "decade": {}, "brand": {}, "latest": 0 };

        for (const vehicle of list) {
            const decade = vehicle.year - (vehicle.year % 10);
            data.decade[decade] = data.decade[decade] ? data.decade[decade] + 1 : 1;
            data.brand[vehicle.brand] = data.brand[vehicle.brand] ?
                data.brand[vehicle.brand] + 1 : 1;
            if (this.calculateVehicleTime(vehicle) <= 7)
                data.latest++;
        }
        console.log(data);
        return data;
    }

    calculateVehicleTime(vehicle: Vehicle): number {
        const date1 = vehicle.createdAt;
        const date2 = new Date();
        var deltaT = date2.getTime() - date1.getTime();
        return deltaT / (1000 * 3600 * 24);
    }
}



