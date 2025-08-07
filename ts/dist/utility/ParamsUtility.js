"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = params;
function params(ctx) {
    const utility = ctx.utility;
    const findparam = utility.findparam;
    const struct = utility.struct;
    const { validate } = struct;
    const { op } = ctx;
    let { params } = op;
    let { reqmatch } = ctx;
    params = params || [];
    reqmatch = reqmatch || {};
    let out = {};
    for (let key of params) {
        let val = findparam(ctx, key);
        if (null != val) {
            out[key] = val;
        }
    }
    // out = validate(out, op.validate.params)
    return out;
}
//# sourceMappingURL=ParamsUtility.js.map