import { Context } from '../types';
declare function resheaders(ctx: Context): {
    ok: boolean;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    body?: any;
    err?: any;
    resdata?: any;
    resmatch?: any;
};
export { resheaders };
