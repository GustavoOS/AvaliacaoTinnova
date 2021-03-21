import { vehicleRepository } from "../../../src/useCases/createVehicle";
import { MockResponse, virtus } from "../../testutils";
import { Request, Response } from "express";
import { Vehicle } from "../../../src/entities/Vehicle";
import { ListVehiclesController } from "../../../src/useCases/listVehicles/ListVehiclesController";
import { ListVehiclesUseCase } from "../../../src/useCases/listVehicles/ListVehiclesUseCase";

describe("Test Delete Vehicle Controller", () => {
    let controller: ListVehiclesController;
    let response: MockResponse;
    let request: Request;

    beforeEach(() => {
        const useCase = new ListVehiclesUseCase(vehicleRepository);
        controller = new ListVehiclesController(useCase);
        response = new MockResponse();
        request = { params: {} } as Request;
        vehicleRepository.vehicles = [];
        vehicleRepository.save(new Vehicle(virtus));
    });

    test("Show logged vehicles", async () => {
        await controller.handle(request, response as any as Response);
        expect(response.httpStatus).toBe(200);
        expect(response.body[0].name).toBe("virtus");
    });
});

