"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
exports.contextify = contextify;
const node_util_1 = require("node:util");
const StructUtility_1 = require("./StructUtility");
function contextify(ctxmap, basectx) {
    const ctx = new Context(ctxmap, basectx);
    return ctx;
}
class Context {
    id = 'C' + ('' + Math.random()).substring(2, 10);
    // Store the output of each operation step.
    out = {};
    // Store for the current operation.
    current = new WeakMap();
    ctrl = {};
    meta = {};
    client;
    utility;
    op;
    config;
    entopts;
    options;
    response;
    result;
    spec;
    data;
    reqdata;
    match;
    reqmatch;
    entity;
    // Shared persistent store.
    shared;
    constructor(ctxmap, basectx) {
        this.client = (0, StructUtility_1.getprop)(ctxmap, 'client', (0, StructUtility_1.getprop)(basectx, 'client'));
        this.utility = (0, StructUtility_1.getprop)(ctxmap, 'utility', (0, StructUtility_1.getprop)(basectx, 'utility'));
        this.ctrl = (0, StructUtility_1.getprop)(ctxmap, 'ctrl', (0, StructUtility_1.getprop)(basectx, 'ctrl', this.ctrl));
        this.meta = (0, StructUtility_1.getprop)(ctxmap, 'meta', (0, StructUtility_1.getprop)(basectx, 'meta', this.meta));
        this.op = (0, StructUtility_1.getprop)(ctxmap, 'op', (0, StructUtility_1.getprop)(basectx, 'op'));
        this.config = (0, StructUtility_1.getprop)(ctxmap, 'config', (0, StructUtility_1.getprop)(basectx, 'config'));
        this.entopts = (0, StructUtility_1.getprop)(ctxmap, 'entopts', (0, StructUtility_1.getprop)(basectx, 'entopts'));
        this.options = (0, StructUtility_1.getprop)(ctxmap, 'options', (0, StructUtility_1.getprop)(basectx, 'options'));
        this.entity = (0, StructUtility_1.getprop)(ctxmap, 'entity', (0, StructUtility_1.getprop)(basectx, 'entity'));
        this.shared = (0, StructUtility_1.getprop)(ctxmap, 'sharedd', (0, StructUtility_1.getprop)(basectx, 'shared'));
        // this.data = getprop(ctxmap, 'data', getprop(basectx, 'data'))
        // this.match = getprop(ctxmap, 'match', getprop(basectx, 'match'))
        this.data = (0, StructUtility_1.getprop)(ctxmap, 'data');
        this.reqdata = (0, StructUtility_1.getprop)(ctxmap, 'reqdata');
        this.match = (0, StructUtility_1.getprop)(ctxmap, 'match');
        this.reqmatch = (0, StructUtility_1.getprop)(ctxmap, 'reqmatch');
    }
    toJSON() {
        return {
            id: this.id,
            op: this.op,
            spec: this.spec,
            entity: this.entity,
            result: this.result,
            meta: this.meta,
        };
    }
    toString() {
        return 'Context ' + this.utility?.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.Context = Context;
//# sourceMappingURL=ContextUtility.js.map