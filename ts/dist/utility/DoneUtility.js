"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.done = done;
const CleanUtility_1 = require("./CleanUtility");
const StructUtility_1 = require("./StructUtility");
function done(ctx) {
    const { error } = ctx.utility;
    if (ctx.ctrl.explain) {
        ctx.ctrl.explain = (0, CleanUtility_1.clean)(ctx, ctx.ctrl.explain);
        (0, StructUtility_1.delprop)(ctx.ctrl.explain.result, 'err');
    }
    if (ctx.result.ok) {
        return ctx.result.resdata;
    }
    return error(ctx);
}
//# sourceMappingURL=DoneUtility.js.map