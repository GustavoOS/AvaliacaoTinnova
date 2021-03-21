import { Vehicle } from "../../../src/entities/Vehicle";
import { vehicleRepository } from "../../../src/useCases/createVehicle";
import { ListVehiclesUseCase } from "../../../src/useCases/listVehicles/ListVehiclesUseCase";
import { virtus } from "../../testutils";

describe("Test List Vehicles Use Case", () => {
    test("List should omit most fields", async () => {
        const useCase = new ListVehiclesUseCase(vehicleRepository);
        vehicleRepository.vehicles = [];
        vehicleRepository.save(new Vehicle(virtus));
        const data = (await useCase.execute())[0];
        expect(data.name).toBe("virtus");
    });
});