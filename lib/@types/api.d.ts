import { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as intf from './interfaces';
export declare type DefResponse<T> = AxiosResponse<intf.DefaultTelegramAPIResponse<T>>;
export default class API {
    private botToken;
    constructor(token: string);
    private apiRequest;
    getMe: (config?: AxiosRequestConfig) => Promise<DefResponse<intf.User>>;
}
