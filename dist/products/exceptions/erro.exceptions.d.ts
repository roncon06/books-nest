import { HttpException, HttpStatus } from '@nestjs/common';
export declare class Erro extends HttpException {
    constructor(status: HttpStatus, message: string, id: string);
}
