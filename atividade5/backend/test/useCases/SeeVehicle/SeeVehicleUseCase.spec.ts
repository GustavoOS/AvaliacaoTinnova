import { Vehicle } from "../../../src/entities/Vehicle";
import { VehicleRepositoryImpl } from "../../../src/repositories/implementations/VehicleRepositoryImpl";
import { SeeVehicleUseCase } from "../../../src/useCases/SeeVehicle/SeeVehicleUseCase";
import { virtus } from "../../testutils";

describe("Test See Vehicle Use Case", () =>{
    let useCase: SeeVehicleUseCase;
    let gw: VehicleRepositoryImpl;
    let id: string;
    let v: Vehicle;

    beforeEach(()=>{
        gw = new VehicleRepositoryImpl();
        gw.save(new Vehicle(virtus));
        id = gw.vehicles[0].id;
        useCase = new SeeVehicleUseCase(gw);
    });

    test("Valid id should return a valid vehicle", async ()=>{
        v = await useCase.execute(id);
        expect(v.id).not.toBeNull();
        expect(v.name).toBe("virtus");
    });

    test("Invalid id should throw an error", async ()=>{
        try {
            await useCase.execute("blabla");
            fail("Error should have been thrown");
        } catch (error) {
            expect(error.message).toBe('Vehicle not found');
        }
    });
});