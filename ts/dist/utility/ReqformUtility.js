"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqform = reqform;
/* Convert entity data or match query into a srtucture suitable for use as request data.
 *
 * The operation (op) property `reqform` is used to perform the data preparation.
 */
function reqform(ctx) {
    const { spec, utility } = ctx;
    const { struct, error } = utility;
    const { isfunc, transform } = struct;
    if (spec) {
        spec.step = 'reqform';
    }
    try {
        const reqform = ctx.op.reqform;
        const reqdata = isfunc(reqform) ? reqform(ctx) : transform({
            reqdata: ctx.reqdata
        }, reqform);
        return reqdata;
    }
    catch (err) {
        return error(ctx, err);
    }
}
//# sourceMappingURL=ReqformUtility.js.map