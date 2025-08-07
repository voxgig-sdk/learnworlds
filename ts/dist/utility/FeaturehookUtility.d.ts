import { Context } from '../types';
declare function featurehook(ctx: Context, name: string): Promise<any[]> | undefined;
export { featurehook };
