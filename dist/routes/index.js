"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = __importDefault(require("./tasks"));
const app = (0, express_1.default)();
app.route('/')
    .get((req, res) => {
    res.json({ mesage: "Aplicação NTasks" });
});
app.use(express_1.default.json(), tasks_1.default);
app.set('json spaces', 2);
exports.default = app;
//# sourceMappingURL=index.js.map