import { Context, Response } from '../types';
declare function request(ctx: Context): Promise<Response | Error>;
export { request };
