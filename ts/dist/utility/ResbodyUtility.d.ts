import { Context } from '../types';
declare function resbody(ctx: Context): Promise<{
    ok: boolean;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    body?: any;
    err?: any;
    resdata?: any;
    resmatch?: any;
}>;
export { resbody };
