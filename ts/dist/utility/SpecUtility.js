"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spec = spec;
// Create request specificaton.
function spec(ctx) {
    const { client, op, utility } = ctx;
    const struct = utility.struct;
    const size = struct.size;
    const select = struct.select;
    const { method, params, query, headers, body, auth } = utility;
    let options = client.options();
    ctx.spec = {
        base: options.base, // string, URL endpoint base prefix,
        prefix: options.prefix,
        path: op.path,
        suffix: options.suffix,
        method: 'get',
        params: {},
        query: {},
        headers: {},
        body: undefined,
        step: 'start',
        alias: {}
    };
    ctx.spec.method = method(ctx);
    ctx.spec.params = params(ctx);
    ctx.spec.query = query(ctx);
    ctx.spec.headers = headers(ctx);
    ctx.spec.body = body(ctx);
    if (1 < size(op.pathalt)) {
        let hasQuery = false;
        const paramQuery = {};
        for (let paramName of op.params) {
            paramQuery[paramName] = null == ctx.spec.params[paramName] ? false : true;
            hasQuery = true;
        }
        if (hasQuery) {
            const foundParamAlts = select(op.pathalt, paramQuery);
            if (0 < size(foundParamAlts)) {
                ctx.spec.path = foundParamAlts[0].path;
            }
        }
    }
    if (ctx.ctrl.explain) {
        ctx.ctrl.explain.spec = ctx.spec;
    }
    auth(ctx);
}
//# sourceMappingURL=SpecUtility.js.map