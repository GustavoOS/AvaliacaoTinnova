import { Vehicle } from "../../entities/Vehicle";
import { VehicleRepository } from "../VehicleRepository";

export class VehicleRepositoryImpl implements VehicleRepository {

    private brands = ['Volkswagen', 'Ford', 'Chevrolet', 'Fiat'];
    vehicles: Vehicle [] = [];

    async brandExists(brand: string): Promise<boolean> {
        return this.brands.indexOf(brand) >= 0;
    }

    findById(id: string): Promise<Vehicle> {
        throw new Error("Method not implemented.");
    }

    async save(vehicle: Vehicle): Promise<void> {
        this.vehicles.push(vehicle);
    }

    update(vehicle: Vehicle): Promise<void> {
        throw new Error("Method not implemented.");
    }
    countByDecade(): Promise<Record<number, number>> {
        throw new Error("Method not implemented.");
    }
    countByBrand(): Promise<Record<string, number>> {
        throw new Error("Method not implemented.");
    }
    countLastWeek(): Promise<number> {
        throw new Error("Method not implemented.");
    }

}