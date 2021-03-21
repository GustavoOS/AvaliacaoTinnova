import { Request, Response } from "express";
import { SeeVehicleUseCase } from "./SeeVehicleUseCase";

export class SeeVehicleController {
    constructor(private useCase: SeeVehicleUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        if (!id)
            return response.status(400).json({ message: "Missing id" });
        try {
            const vehicle = await this.useCase.execute(id);
            return response.status(200).json(vehicle).send();
        } catch (err) {
            return response.status(404).json({ message: err.message });
        }

    }
}
