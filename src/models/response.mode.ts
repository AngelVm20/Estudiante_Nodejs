import {IHitElement} from "./hit.model";

export interface IResponse{
    message:string;
    value: null |string;
}

export interface IResponseHits{
    message: string;
    hits: null | IHitElement[];
}
