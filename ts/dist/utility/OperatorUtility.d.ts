import { Context, Operation } from '../types';
declare function opify(opmap: Record<string, any>): Operation;
declare function operator(ctx: Context): Operation;
export { opify, operator, };
