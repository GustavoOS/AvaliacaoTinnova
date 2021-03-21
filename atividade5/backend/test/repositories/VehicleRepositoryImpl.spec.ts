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
        const vehicle = await addVirtus();
        expect(repository.vehicles[0]).toBe(vehicle);
        expect(repository.vehicles[0].createdAt
            .getDay()).toBe((new Date()).getDay());
    });

    test("find by id", async ()=>{
        const v: Vehicle = await addVirtus();
        const v1: Vehicle = await repository.findById(v.id);
        expect(v1).not.toBeNull();
        expect(v1.id).toBe(v.id);
    });

    test("Delete vehicle", async() =>{
        const v = await addVirtus();
        const gol = new Vehicle(virtus);
        gol.name = "gol";
        expect(v.id).not.toBe(gol.id);
        await repository.save(gol);
        expect(repository.vehicles[1].name).toBe("gol");
        await repository.delete(gol.id);
        expect(repository.vehicles.length).toBe(1);
        expect(repository.vehicles[0].id).toBe(v.id);
    });

    async function assertTypoBrand(brand: string) {
        expect(await repository.brandExists("Forde")).toBeFalsy();
    }

    async function addVirtus() {
        const vehicle = new Vehicle(virtus);
        await repository.save(vehicle);
        return vehicle;
    }
});



