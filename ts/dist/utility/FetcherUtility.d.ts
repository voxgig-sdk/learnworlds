import { Context } from '../types';
declare function fetcher(ctx: Context, fullurl: string, fetchdef: Record<string, any>): Promise<any>;
export { fetcher };
