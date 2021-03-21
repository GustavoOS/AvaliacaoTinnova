import { Vehicle } from "../../../src/entities/Vehicle";
import { vehicleRepository } from "../../../src/useCases/createVehicle";
import { UpdateVehicleDAO } from "../../../src/useCases/UpdateVehicle/UpdateVehicleDAO";
import { UpdateVehicleUseCase } from "../../../src/useCases/UpdateVehicle/UpdateVehicleUseCase";
import { virtus } from "../../testutils";

describe("Test Update Vehicle Use Case", () => {
    let useCase: UpdateVehicleUseCase;
    let update: UpdateVehicleDAO;
    let id;

    beforeEach(async () => {
        useCase = new UpdateVehicleUseCase(vehicleRepository);
        vehicleRepository.vehicles = [];
        await vehicleRepository.save(new Vehicle(virtus));
        id = vehicleRepository.vehicles[0].id;
    });

    test("Change vehicle name", async () => {
        update = { "name": "gol" };
        await useCase.execute(update, id);
        expect(vehicleRepository.vehicles[0].name).toBe("gol");
        expect(vehicleRepository.vehicles[0].year).toBe(2020);
    });
});
