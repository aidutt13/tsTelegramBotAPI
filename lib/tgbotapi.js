"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const c = new api_1.default('1450394999:AAGrfHZeQoMzyI5srk5j8UOA64WMred3nIM');
const response = c.getMe();
response.then(data => {
    console.log(data.data);
});
//# sourceMappingURL=tgbotapi.js.map