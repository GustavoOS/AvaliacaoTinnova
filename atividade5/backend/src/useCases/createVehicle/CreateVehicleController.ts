import { Request, Response } from "express";
import { CreateVehicleUseCase } from "./CreateVehicleUseCase";

export class CreateVehicleController {
    constructor(private useCase: CreateVehicleUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, brand, sold, description, year } = request.body;

        try {
            await this.useCase.execute({ name, brand, sold, description, year });
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json(
                { message: err.message || 'Unexpected error.' });
        }

    }
}