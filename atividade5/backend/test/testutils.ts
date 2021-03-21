const virtus = {
    name: 'virtus',
    brand: 'Volkswagen',
    year: 2020,
    description: 'prata',
    sold: false
};

export class MockResponse{
    public httpStatus: number = null;
    public sent: boolean = false;
    public body: any;

    status(c) {
        this.httpStatus = c;
        return this;
    };

    send() {
        this.sent = true;
    };

    json(b) {
        this.body = b;
        return this;
    }
}

export {virtus};
