import { Request, Response } from "express";
import { FindVehiclesUseCase } from "./FindVehiclesUseCase";

export class FindVehiclesController {
    constructor(private useCase: FindVehiclesUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        let data: any = await this.useCase.execute();

        return response.status(200).json(data).send();
    }

}
