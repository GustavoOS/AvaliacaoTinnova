import { VehicleRepositoryImpl } from "../../../src/repositories/implementations/VehicleRepositoryImpl";
import { CreateVehicleDTO } from "../../../src/useCases/createVehicle/CreateVehicleDTO";
import { CreateVehicleUseCase } from "../../../src/useCases/createVehicle/CreateVehicleUseCase";
import { virtus } from "../../testutils";

describe("Test Create Vehicle Use Case", () => {
    let useCase: CreateVehicleUseCase;
    let repository: VehicleRepositoryImpl;
    let data: CreateVehicleDTO;

    beforeEach(() => {
        repository = new VehicleRepositoryImpl();
        useCase = new CreateVehicleUseCase(repository);
        data = JSON.parse(JSON.stringify(virtus));
    });

    test('Valid Creation', async () => {
        data = virtus;
        await useCase.execute(data);
        expect(repository.vehicles[0].name).toBe('virtus');
    });

    test('Typo brand should result an error', async() => {
        data.brand = "Folksvagner";
        assertUseCaseError('Unknown brand');
    });

    async function assertUseCaseError(error:string) {
        try {
            await useCase.execute(data);
        } catch (e) {
            expect(e.message).toEqual(error);
        }
    }
});