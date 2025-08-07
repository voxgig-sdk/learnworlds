"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = query;
function query(ctx) {
    const { op } = ctx;
    let { params } = op;
    let { reqmatch } = ctx;
    params = params || [];
    reqmatch = reqmatch || {};
    const out = {};
    for (let key of Object.keys(reqmatch)) {
        let val = reqmatch[key];
        if (null != val && !params.includes(key)) {
            out[key] = val;
        }
    }
    return out;
}
//# sourceMappingURL=QueryUtility.js.map