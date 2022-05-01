"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const PORT = process.env.PORT || 3000;
routes_1.default.listen(PORT, () => {
    console.log(`Servidor conectado em localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map