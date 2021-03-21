import { Request, Response } from "express";
import { UpdateVehicleDAO } from "./UpdateVehicleDAO";
import { UpdateVehicleUseCase } from "./UpdateVehicleUseCase";

export class UpdateVehicleController {
    constructor(private useCase: UpdateVehicleUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const param: UpdateVehicleDAO = this.createDAO(request);

        if (!id)
            return response.status(400).json({ message: "Missing id" });
        try {
            await this.useCase.execute(param, id);
            return response.status(200).json(id).send();
        } catch (err) {
            return response.status(404).json({ message: err.message });
        }

    }

    private createDAO(req: Request): UpdateVehicleDAO {
        const {name, description, year, sold} = req.body;
        let v = { name, description, year, sold } as UpdateVehicleDAO;
        for (var prop in v)
            if(v[prop]===null || v[prop] === undefined)
                delete v[prop];
        return v;
    }
}
