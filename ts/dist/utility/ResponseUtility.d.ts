import { Context, Response } from '../types';
declare function response(ctx: Context): Promise<Response | Error>;
export { response };
