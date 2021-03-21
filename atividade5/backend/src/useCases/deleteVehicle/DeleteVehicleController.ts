import { Request, Response } from "express";
import { DeleteVehicleUseCase } from "./DeleteVehicleUseCase";

export class DeleteVehicleController {
    constructor(private useCase: DeleteVehicleUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;

        if(!id)
            return response.status(400).json({message: "Missing id"});
        try {
            await this.useCase.execute(id);
            return response.status(200).send();
        } catch (err) {
            return response.status(404).json({ message: err.message });
        }

    }
}
