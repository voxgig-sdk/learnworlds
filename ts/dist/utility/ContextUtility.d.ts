import { inspect } from 'node:util';
import { LearnworldsSDK } from '../LearnworldsSDK';
import { Utility } from './Utility';
import type { Operation, Spec, Response, Result } from '../types';
declare function contextify(ctxmap: Record<string, any>, basectx?: Context): any;
declare class Context {
    id: string;
    out: Record<string, any>;
    current: WeakMap<String, any>;
    ctrl: Record<string, any>;
    meta: Record<string, any>;
    client: LearnworldsSDK;
    utility: Utility;
    op: Operation;
    config: Record<string, any>;
    entopts: Record<string, any>;
    options: Record<string, any>;
    response?: Response;
    result?: Result;
    spec?: Spec;
    data?: any;
    reqdata?: any;
    match?: any;
    reqmatch?: any;
    entity?: any;
    shared: WeakMap<String, any>;
    constructor(ctxmap: Record<string, any>, basectx?: Context);
    toJSON(): {
        id: string;
        op: Operation;
        spec: Spec | undefined;
        entity: any;
        result: Result | undefined;
        meta: Record<string, any>;
    };
    toString(): string;
    [inspect.custom](): string;
}
export { contextify, Context };
