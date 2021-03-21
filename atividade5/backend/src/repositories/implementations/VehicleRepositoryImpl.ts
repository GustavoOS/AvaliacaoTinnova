import { Vehicle } from "../../entities/Vehicle";
import { VehicleRepository } from "../VehicleRepository";

export class VehicleRepositoryImpl implements VehicleRepository {

    private brands = ['Volkswagen', 'Ford', 'Chevrolet', 'Fiat'];
    vehicles: Vehicle[] = [];

    async brandExists(brand: string): Promise<boolean> {
        return this.brands.indexOf(brand) >= 0;
    }

    async findById(id: string): Promise<Vehicle> {
        return this.vehicles.find((v) => v.id === id);
    }

    async save(vehicle: Vehicle): Promise<void> {
        this.vehicles.push(vehicle);
    }

    async delete(id: string): Promise<void> {
        this.vehicles = this.vehicles.filter(v => v.id !== id);
    }

    async update(id: string, updated: Vehicle): Promise<void> {
        let index = this.vehicles.findIndex(v => v.id === id);
        this.vehicles[index] = updated;
    }

    async list(): Promise<Vehicle[]> {
        return this.vehicles;
    }

    // countByDecade(): Promise<Record<number, number>> {
    //     throw new Error("Method not implemented.");
    // }
    // countByBrand(): Promise<Record<string, number>> {
    //     throw new Error("Method not implemented.");
    // }
    // countLastWeek(): Promise<number> {
    //     throw new Error("Method not implemented.");
    // }

}