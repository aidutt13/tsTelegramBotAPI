import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import * as intf from './interfaces';

export type DefResponse<T> = AxiosResponse< intf.DefaultTelegramAPIResponse< T > >

const TGBOTAPI_URL = 'https://api.telegram.org/bot';

export default class API {

    private botToken: string;

    constructor(token: string)
    {
        this.botToken = token;
        this.getMe = this.apiRequest<intf.User>(this.botToken, 'getMe');
    }
    
    private apiRequest<T = any>(token: string, method: string):
        // Return type
        (config?: AxiosRequestConfig) => Promise< DefResponse<T> >
    {

        async function _request(config?: AxiosRequestConfig): Promise< DefResponse<T> > {
            return axios.get(`${TGBOTAPI_URL}${token}/${method}`, config);
        }

        return _request;
    }

    /*
    *   API Methods
    */
    public getMe: (config?: AxiosRequestConfig) => Promise< DefResponse<intf.User> >;
}