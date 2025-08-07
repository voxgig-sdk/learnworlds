"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
exports.contextify = contextify;
const StructUtility_1 = require("./StructUtility");
function contextify(ctxmap, basectx) {
    const ctx = new Context();
    ctx.ctrl = (0, StructUtility_1.getprop)(ctxmap, 'ctrl', (0, StructUtility_1.getprop)(basectx, 'ctrl', {}));
    ctx.meta = (0, StructUtility_1.getprop)(ctxmap, 'meta', (0, StructUtility_1.getprop)(basectx, 'meta', {}));
    ctx.work = (0, StructUtility_1.getprop)(ctxmap, 'work', (0, StructUtility_1.getprop)(basectx, 'work', {}));
    ctx.client = (0, StructUtility_1.getprop)(ctxmap, 'client', (0, StructUtility_1.getprop)(basectx, 'client'));
    ctx.config = (0, StructUtility_1.getprop)(ctxmap, 'config', (0, StructUtility_1.getprop)(basectx, 'config'));
    ctx.entity = (0, StructUtility_1.getprop)(ctxmap, 'entity', (0, StructUtility_1.getprop)(basectx, 'entity'));
    ctx.op = (0, StructUtility_1.getprop)(ctxmap, 'op', (0, StructUtility_1.getprop)(basectx, 'op'));
    ctx.entopts = (0, StructUtility_1.getprop)(ctxmap, 'entopts', (0, StructUtility_1.getprop)(basectx, 'entopts'));
    ctx.options = (0, StructUtility_1.getprop)(ctxmap, 'options', (0, StructUtility_1.getprop)(basectx, 'options'));
    ctx.response = (0, StructUtility_1.getprop)(ctxmap, 'response', (0, StructUtility_1.getprop)(basectx, 'response'));
    ctx.result = (0, StructUtility_1.getprop)(ctxmap, 'result', (0, StructUtility_1.getprop)(basectx, 'result'));
    ctx.spec = (0, StructUtility_1.getprop)(ctxmap, 'spec', (0, StructUtility_1.getprop)(basectx, 'spec'));
    ctx.utility = (0, StructUtility_1.getprop)(ctxmap, 'utility', (0, StructUtility_1.getprop)(basectx, 'utility'));
    ctx.data = (0, StructUtility_1.getprop)(ctxmap, 'data', (0, StructUtility_1.getprop)(basectx, 'data'));
    ctx.reqdata = (0, StructUtility_1.getprop)(ctxmap, 'reqdata', (0, StructUtility_1.getprop)(basectx, 'reqdata'));
    ctx.match = (0, StructUtility_1.getprop)(ctxmap, 'match', (0, StructUtility_1.getprop)(basectx, 'match'));
    ctx.reqmatch = (0, StructUtility_1.getprop)(ctxmap, 'reqmatch', (0, StructUtility_1.getprop)(basectx, 'reqmatch'));
    return ctx;
}
class Context {
    ctrl = {};
    meta = {};
    work = {};
    client = undefined;
    config = undefined;
    entity = undefined;
    op = undefined;
    entopts = undefined;
    options = undefined;
    response = undefined;
    result = undefined;
    spec = undefined;
    utility = undefined;
    data = undefined;
    reqdata = undefined;
    match = undefined;
    reqmatch = undefined;
    toJSON() {
        return {
            op: this.op,
            spec: this.spec,
            entity: this.entity,
            result: this.result,
            meta: this.meta,
        };
    }
}
exports.Context = Context;
//# sourceMappingURL=ContextUtility.js.map