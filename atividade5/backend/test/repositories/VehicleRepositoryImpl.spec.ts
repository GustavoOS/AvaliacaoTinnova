import { Vehicle } from "../../src/entities/Vehicle";
import { VehicleRepositoryImpl } from "../../src/repositories/implementations/VehicleRepositoryImpl";
import { virtus } from "../testutils";

describe("Test Vehicle Repository", () => {
    let repository: VehicleRepositoryImpl;

    beforeEach(() => {
        repository = new VehicleRepositoryImpl();
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
        const vehicle = new Vehicle(virtus);
        await repository.save(vehicle);
        expect(repository.vehicles[0]).toBe(vehicle);
        expect(repository.vehicles[0].createdAt
            .getDay()).toBe((new Date()).getDay());
    });

    async function assertTypoBrand(brand: string) {
        expect(await repository.brandExists("Forde")).toBeFalsy();
    }
});

