import {AxiosResponse} from "axios";

type IRes<DATA> = Promise<AxiosResponse<DATA>>

export type {IRes}