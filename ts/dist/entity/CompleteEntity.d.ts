import { inspect } from 'node:util';
import { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
declare class CompleteEntity {
    #private;
    constructor(client: LearnworldsSDK, entopts: any);
    entopts(): any;
    client(): LearnworldsSDK;
    make(): CompleteEntity;
    data(this: any, data?: any): any;
    match(match?: any): any;
    toString(): string;
    [inspect.custom](): string;
    create(this: any, reqdata?: any, ctrl?: Control): Promise<any>;
}
export { CompleteEntity };
