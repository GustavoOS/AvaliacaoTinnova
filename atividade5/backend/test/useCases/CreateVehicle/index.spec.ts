
import { createVehicleUseCase, vehicleRepository } from "../../../src/useCases/createVehicle";
import { virtus } from "../../testutils";

test("Test valid creation with virtus", async () => {
    await createVehicleUseCase.execute(virtus);
    expect(vehicleRepository.vehicles.length).toBe(1);
});