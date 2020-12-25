"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const TGBOTAPI_URL = 'https://api.telegram.org/bot';
class API {
    constructor(token) {
        this.botToken = token;
        this.getMe = this.apiRequest(this.botToken, 'getMe');
    }
    apiRequest(token, method) {
        function _request(config) {
            return __awaiter(this, void 0, void 0, function* () {
                return axios_1.default.get(`${TGBOTAPI_URL}${token}/${method}`, config);
            });
        }
        return _request;
    }
}
exports.default = API;
//# sourceMappingURL=api.js.map