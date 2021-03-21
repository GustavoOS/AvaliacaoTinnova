import { Request, Response } from "express";
import { createVehicleUseCase, vehicleRepository } from "../../../src/useCases/createVehicle";
import { seeVehicleController } from "../../../src/useCases/SeeVehicle";
import { MockResponse, virtus } from "../../testutils";

describe("Test See Vehicle Controller", () =>{
    let req: Request;
    let res: MockResponse;
    let id;

    beforeEach(async ()=>{
        vehicleRepository.vehicles = [];
        id = await createVehicleUseCase.execute(virtus);
        req = {params:{}} as any as Request;
        res = new MockResponse();
    });

    test("Missing id should fail", async ()=>{
        req.params.id = undefined;
        await assertControllerError(400, "Missing id");
    });

    test("Unregistered id should fail", async()=>{
        req.params.id = "blablabla";
        await assertControllerError(404, 'Vehicle not found');
    });

    test("Valid id should return vehicle", async ()=>{
        req.params.id = id;
        await seeVehicleController.handle(req, res as any as Response);
        expect(res.httpStatus).toBe(200);
        expect(res.body.id).toBe(id);
        expect(res.body.name).toBe("virtus");
        expect(res.sent).toBeTruthy();
    });

    async function assertControllerError(code: number, text: string) {
        await seeVehicleController.handle(req, res as any as Response);
        expect(res.httpStatus).toBe(code);
        expect(res.body.message).toBe(text);
    }

});


