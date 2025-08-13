"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resform = resform;
/* Convert data from respnse into a structure suitable for use as entity data.
 *
 * The operation (op) property `resform` is used to perform the data extraction.
 */
function resform(ctx) {
    const { spec, result, utility } = ctx;
    const { struct, error } = utility;
    const { isfunc, transform } = struct;
    if (spec) {
        spec.step = 'resform';
    }
    if (null == result || !result.ok) {
        return undefined;
    }
    try {
        const resform = ctx.op.resform;
        const resdata = isfunc(resform) ? resform(ctx) : transform(ctx.result, resform);
        result.resdata = resdata;
        return resdata;
    }
    catch (err) {
        return error(ctx, err);
    }
}
//# sourceMappingURL=ResformUtility.js.map