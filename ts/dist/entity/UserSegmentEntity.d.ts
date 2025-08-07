import { inspect } from 'node:util';
import { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
declare class UserSegmentEntity {
    #private;
    constructor(client: LearnworldsSDK, entopts: any);
    entopts(): any;
    client(): LearnworldsSDK;
    make(): UserSegmentEntity;
    data(this: any, data?: any): any;
    match(match?: any): any;
    toString(): string;
    [inspect.custom](): string;
    list(this: any, reqmatch?: any, ctrl?: Control): Promise<any>;
}
export { UserSegmentEntity };
