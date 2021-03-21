import { vehicleRepository } from "../../../src/useCases/createVehicle";
import { DeleteVehicleController } from "../../../src/useCases/deleteVehicle/DeleteVehicleController";
import { DeleteVehicleUseCase } from "../../../src/useCases/deleteVehicle/DeleteVehicleUseCase";
import { MockResponse, virtus } from "../../testutils";
import { Request, Response } from "express";
import { Vehicle } from "../../../src/entities/Vehicle";

describe("Test Delete Vehicle Controller", () => {
    let controller: DeleteVehicleController;
    let response: MockResponse;
    let request: Request;

    beforeEach(() => {
        const useCase = new DeleteVehicleUseCase(vehicleRepository);
        controller = new DeleteVehicleController(useCase);
        response = new MockResponse();
        request = { params: {} } as Request;
        vehicleRepository.save(new Vehicle(virtus));
    });

    afterEach(() => {
        vehicleRepository.vehicles = [];
    });

    test("Missing id should fail", async () => {
        await controller.handle(request, response as any as Response);
        expect(response.httpStatus).toBe(400);
        expect(response.body.message).toBe("Missing id");
    });

    test("Invalid id should fail", async () => {
        request.params.id = "blablaba";
        await controller.handle(request, response as any as Response);
        expect(response.httpStatus).toBe(404);
        expect(response.body.message).toBe('Vehicle not found');
    });

    test("Valid deletion should delete", async () => {
        request.params.id = vehicleRepository.vehicles[0].id;
        expect(request.params.id).not.toBeNull();
        await controller.handle(request, response as any as Response);
        expect(response.httpStatus).toBe(200);
        expect(vehicleRepository.vehicles.length).toBe(0);
    });
});

