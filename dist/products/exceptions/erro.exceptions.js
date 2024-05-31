"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Erro = void 0;
const common_1 = require("@nestjs/common");
class Erro extends common_1.HttpException {
    constructor(status, message, id) {
        super({ id, message }, status);
    }
}
exports.Erro = Erro;
//# sourceMappingURL=erro.exceptions.js.map