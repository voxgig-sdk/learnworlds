"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = result;
async function result(ctx) {
    let { op, spec, utility, entity, result } = ctx;
    const { resform } = utility;
    spec.step = 'result';
    resform(ctx);
    if ('list' == op.name) {
        const resdata = result.resdata;
        result.resdata = [];
        if (null != resdata && 0 < resdata.length) {
            for (let entry of resdata) {
                const ent = entity.make();
                ent.data(entry);
                result.resdata.push(ent);
            }
        }
    }
    if (ctx.ctrl.explain) {
        ctx.ctrl.explain.result = result;
    }
}
//# sourceMappingURL=ResultUtility.js.map