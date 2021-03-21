import { Request, Response } from "express";
import { Vehicle } from "../../../src/entities/Vehicle";
import { vehicleRepository } from "../../../src/useCases/createVehicle";
import { updateVehicleController } from "../../../src/useCases/UpdateVehicle";
import { MockResponse, virtus } from "../../testutils";

describe("Test Update Vehicle Controller", () => {

    let req: Request;
    let res: MockResponse;

    beforeEach(async () => {
        vehicleRepository.vehicles = [];
        await vehicleRepository.save(new Vehicle(virtus));
        res = new MockResponse();
        req = { params: {}, body: {} } as Request;
    });

    test("Successfull change of single property", async () => {
        req.params.id = vehicleRepository.vehicles[0].id;
        req.body.name = "gol";
        await updateVehicleController.handle(req, res as any as Response);
        expect(res.httpStatus).toBe(200);
        const v = vehicleRepository.vehicles[0];
        expect(res.body).toBe(v.id);
        expect(v.year).toBe(2020);
    });

    test("Missing id should fail", async () => {
        req.body.name = "gol";
        await updateVehicleController.handle(req, res as any as Response);
        expect(res.httpStatus).toBe(400);
    });

    test("Invalid id should fail", async () => {
        req.params.id = "blablabla";
        req.body.name = "gol";
        await updateVehicleController.handle(req, res as any as Response);
        expect(res.httpStatus).toBe(404);
    });
});