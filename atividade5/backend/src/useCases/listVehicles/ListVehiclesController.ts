import { Request, Response } from "express";
import { ListVehiclesUseCase } from "./ListVehiclesUseCase";

export class ListVehiclesController {
    constructor(private useCase: ListVehiclesUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const list = await this.useCase.execute();
        return response.status(200).json(list).send();
    }

}
