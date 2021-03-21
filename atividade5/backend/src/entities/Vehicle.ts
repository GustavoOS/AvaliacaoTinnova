import { v4 as uuid } from 'uuid';

export class Vehicle {

    public readonly id: string;
    public readonly brand: string;
    public name: string;
    public year: number;
    public description: string;
    public sold: boolean;
    public readonly createdAt: Date;
    public updatedAt: Date;

    constructor(
        props: Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt'>,
        id?: string
    ) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid();
            this.updatedAt = new Date();
            this.createdAt = this.updatedAt;
        }
    }
}
