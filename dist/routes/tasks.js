"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router
    .get('/tasks', (req, res) => {
    res.json({ tasks: [
            { title: "Shopping" },
            { title: "Study" }
        ] });
})
    .post('/tasks', (req, res) => {
    res.status(201).send(req.body);
});
exports.default = router;
//# sourceMappingURL=tasks.js.map