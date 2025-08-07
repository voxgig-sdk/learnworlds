declare function contextify(ctxmap: Record<string, any>, basectx?: Context): any;
declare class Context {
    ctrl: {};
    meta: {};
    work: {};
    client: undefined;
    config: undefined;
    entity: undefined;
    op: undefined;
    entopts: undefined;
    options: undefined;
    response: undefined;
    result: undefined;
    spec: undefined;
    utility: undefined;
    data: undefined;
    reqdata: undefined;
    match: undefined;
    reqmatch: undefined;
    toJSON(): {
        op: undefined;
        spec: undefined;
        entity: undefined;
        result: undefined;
        meta: {};
    };
}
export { contextify, Context };
