import { Vehicle } from "../../src/entities/Vehicle";
import { VehicleRepositoryImpl } from "../../src/repositories/implementations/VehicleRepositoryImpl";
import { virtus } from "../testutils";

describe("Test Vehicle Repository", () => {
    let repository: VehicleRepositoryImpl;
    let vehicle: Vehicle;

    beforeEach(async () => {
        repository = new VehicleRepositoryImpl();
        await addVirtus();
    });

    test("Ford should exist within brands", async () => {
        expect(await repository.brandExists("Ford")).toBeTruthy();
    });

    test("Volkswagen should exist within brands", async () => {
        expect(await repository.brandExists('Volkswagen')).toBeTruthy();
    });

    test("Brands with typos should not exist within brands", async () => {
        assertTypoBrand("Volksvagen");
        assertTypoBrand("Forde");
        assertTypoBrand("Xevrolé");
    });

    test("Add new vehicle", async () => {
        expect(repository.vehicles[0]).toBe(vehicle);
        expect(repository.vehicles[0].createdAt
            .getDay()).toBe((new Date()).getDay());
    });

    test("find by id", async () => {
        const v1: Vehicle = await repository.findById(vehicle.id);
        expect(v1).not.toBeNull();
        expect(v1.id).toBe(vehicle.id);
    });

    test("Delete vehicle", async () => {
        const gol = new Vehicle(virtus);
        gol.name = "gol";
        expect(vehicle.id).not.toBe(gol.id);
        await repository.save(gol);
        expect(repository.vehicles[1].name).toBe("gol");
        await repository.delete(gol.id);
        expect(repository.vehicles.length).toBe(1);
        expect(repository.vehicles[0].id).toBe(vehicle.id);
    });

    test("Update name", async () => {
        const v = new Vehicle(
            {
                "name": "gol",
                "year": 2020,
                "description": "preto",
                "brand": "Volkswagen",
                "sold": true
            });
        await repository.update(vehicle.id, v);
        expect(repository.vehicles[0].name).toBe("gol");
        expect(repository.vehicles.length).toBe(1);
    });

    async function assertTypoBrand(brand: string) {
        expect(await repository.brandExists("Forde")).toBeFalsy();
    }

    async function addVirtus() {
        vehicle = new Vehicle(virtus);
        await repository.save(vehicle);
    }
});



