import { inspect } from 'node:util';
import { LearnworldsSDK } from '../LearnworldsSDK';
import type { Context, Control } from '../types';
declare class CouponEntity {
    #private;
    _entctx: Context;
    constructor(client: LearnworldsSDK, entopts: any);
    entopts(): any;
    client(): LearnworldsSDK;
    make(): CouponEntity;
    data(this: any, data?: any): any;
    match(match?: any): any;
    toJSON(): any;
    toString(): string;
    [inspect.custom](): string;
    list(this: any, reqmatch?: any, ctrl?: Control): Promise<any>;
    create(this: any, reqdata?: any, ctrl?: Control): Promise<any>;
}
export { CouponEntity };
