import { createVehicleUseCase, vehicleRepository } from "../../../src/useCases/createVehicle";
import { DeleteVehicleUseCase } from "../../../src/useCases/deleteVehicle/DeleteVehicleUseCase";
import { virtus } from "../../testutils";

describe("Test Vehicle deletion use case", () => {
    let useCase: DeleteVehicleUseCase;

    beforeEach(async () => {
        useCase = new DeleteVehicleUseCase(vehicleRepository);
        await createVehicleUseCase.execute(virtus);
    });

    test("Delete stored vehicle", async () => {
        await useCase.execute(vehicleRepository.vehicles[0].id);
        expect(vehicleRepository.vehicles.length).toBe(0);
    });

    test("Delete unkown vehicle should cause an exception", async () => {
        try {
            await useCase.execute("blablabla");
            fail('Error should have been thrown');
        } catch (error) {
            expect(error.message).toBe('Vehicle not found');
            expect(vehicleRepository.vehicles.length).toBe(1);
        }
    });
});
