import { Request, Response } from "express";
import { VehicleRepositoryImpl } from "../../../src/repositories/implementations/VehicleRepositoryImpl";
import { CreateVehicleController } from "../../../src/useCases/createVehicle/CreateVehicleController";
import { CreateVehicleUseCase } from "../../../src/useCases/createVehicle/CreateVehicleUseCase";
import { MockResponse, virtus } from "../../testutils";


describe("Test mocks", () => {

    let mockResponse: Response;
    let mockResponseProto: MockResponse;

    beforeEach(() => {
        mockResponseProto = new MockResponse();
        mockResponse = mockResponseProto as any as Response;
    });

    test("Verify request property reading", ()=>{
        const mockRequest = {
            body: virtus
        } as Request;
        const { name } = mockRequest.body;
        expect(name).toBe("virtus");
    });

    test("Verify faulty response", () => {
        mockResponse.status(400).json(virtus).send();
        expect(mockResponseProto.body).toBe(virtus);
        expect(mockResponseProto.httpStatus).toBe(400);
        expect(mockResponseProto.sent).toBeTruthy();
    });

    test("Verify response ok mock", () => {
        mockResponse.status(201).send();
        expect(mockResponseProto.sent).toBeTruthy();
        expect(mockResponseProto.httpStatus).toBe(201);
    });
});

describe("Check Controller", () => {
    let mockResponse: Response;
    let mockResponseProto: MockResponse;
    let mockRequest: Request;
    let useCase: CreateVehicleUseCase;
    let controller: CreateVehicleController;
    let gw: VehicleRepositoryImpl;

    beforeEach(() => {
        mockResponseProto = new MockResponse();
        mockResponse = mockResponseProto as any as Response;
        gw = new VehicleRepositoryImpl();
        useCase = new CreateVehicleUseCase(gw);
        controller = new CreateVehicleController(useCase);
        mockRequest = {
            body: virtus
        } as Request;
    });

    test("Test successful scenario", async () => {
        await controller.handle(mockRequest, mockResponse);
        expect(mockResponseProto.httpStatus).toBe(201);
        expect(mockResponseProto.sent).toBeTruthy();
        expect(mockResponseProto.body.id).not.toBeNull();
    });

    test("Brand typo scenario", async ()=>{
        mockRequest.body.brand = "Forde";
        await controller.handle(mockRequest, mockResponse);
        expect(mockResponseProto.httpStatus).toBe(400);
        expect(mockResponseProto.body.message).toBe('Unknown brand');
    });
});




