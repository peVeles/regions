import { regionsApiUrl } from "../api.config";
import { request } from "../request";

export const getRegions = (id?: number | string) => {
    /* Returning all regions or region with id = id */

    let url: string = regionsApiUrl;
    id && (url += id.toString());

    return request(url, 'GET');
}

