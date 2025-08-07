"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clean = clean;
const StructUtility_1 = require("./StructUtility");
// Clean request data by partially hiding sensitive values.
function clean(ctx, val) {
    const options = ctx.options;
    const work = ctx.work;
    let cleaners = (0, StructUtility_1.getprop)(work, 'cleaners');
    if (null == cleaners) {
        cleaners =
            [
                { p: 'apikey', s: 4 }
            ]
                .map((p) => (p.v = (0, StructUtility_1.getpath)(options, p.p), p))
                .filter(p => null != p.v && 'string' === typeof p.v)
                .map(p => (p.re = new RegExp((0, StructUtility_1.escre)(p.v)),
                p.v = (0, StructUtility_1.pad)((0, StructUtility_1.slice)(p.v, 0, p.s), (0, StructUtility_1.size)(p.v), '*'),
                p));
    }
    (0, StructUtility_1.setprop)(work, 'cleaners', cleaners);
    const out = (0, StructUtility_1.walk)((0, StructUtility_1.clone)(val), (_k, v) => {
        if ('string' === typeof v) {
            cleaners.map((p) => {
                v = v.replace(p.re, p.v);
            });
        }
        return v;
    });
    return out;
}
//# sourceMappingURL=CleanUtility.js.map