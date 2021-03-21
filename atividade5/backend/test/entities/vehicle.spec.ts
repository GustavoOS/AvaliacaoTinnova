import { Vehicle } from "../../src/entities/Vehicle";

describe('Test Vehicle constructors', () => {
    let vehicle: Vehicle;

    test('test name change updated Time', () => {
        let newCar = { name: "virtus", brand: "vw", description: "prata", sold: false, year: 2019 };
        vehicle = new Vehicle(newCar);
        expect(vehicle.updatedAt.getDay()).toBe((new Date).getDay());
        expect(vehicle.createdAt).toBe(vehicle.updatedAt);
    });
});