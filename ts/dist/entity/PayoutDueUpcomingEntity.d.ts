import { inspect } from 'node:util';
import { LearnworldsSDK } from '../LearnworldsSDK';
import type { Context, Control } from '../types';
declare class PayoutDueUpcomingEntity {
    #private;
    _entctx: Context;
    constructor(client: LearnworldsSDK, entopts: any);
    entopts(): any;
    client(): LearnworldsSDK;
    make(): PayoutDueUpcomingEntity;
    data(this: any, data?: any): any;
    match(match?: any): any;
    toJSON(): any;
    toString(): string;
    [inspect.custom](): string;
    list(this: any, reqmatch?: any, ctrl?: Control): Promise<any>;
}
export { PayoutDueUpcomingEntity };
