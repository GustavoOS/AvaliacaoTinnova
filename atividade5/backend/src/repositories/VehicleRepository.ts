import { Vehicle } from "../entities/Vehicle";

export interface VehicleRepository {
    brandExists(brand: string):Promise<boolean>;

    findById(id: string) : Promise<Vehicle>;
    delete(id:string) :Promise<void>;
    save(vehicle: Vehicle) : Promise<void>;
    update(id: string, updated: Vehicle) : Promise<void>;

    // countByDecade() : Promise<Record<number, number>>;
    // countByBrand() : Promise<Record<string, number>>;
    // countLastWeek() : Promise<number>;
}
