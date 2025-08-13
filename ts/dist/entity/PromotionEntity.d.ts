import { inspect } from 'node:util';
import { LearnworldsSDK } from '../LearnworldsSDK';
import type { Context, Control } from '../types';
declare class PromotionEntity {
    #private;
    _entctx: Context;
    constructor(client: LearnworldsSDK, entopts: any);
    entopts(): any;
    client(): LearnworldsSDK;
    make(): PromotionEntity;
    data(this: any, data?: any): any;
    match(match?: any): any;
    toJSON(): any;
    toString(): string;
    [inspect.custom](): string;
    load(this: any, reqmatch?: any, ctrl?: Control): Promise<any>;
    list(this: any, reqmatch?: any, ctrl?: Control): Promise<any>;
    create(this: any, reqdata?: any, ctrl?: Control): Promise<any>;
}
export { PromotionEntity };
