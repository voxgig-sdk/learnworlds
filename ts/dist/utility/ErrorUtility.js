"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = error;
const CleanUtility_1 = require("./CleanUtility");
const StructUtility_1 = require("./StructUtility");
function error(ctx, err) {
    ctx = ctx || {};
    const op = ctx.op || {};
    op.name = op.name || 'unknown operation';
    const result = ctx.result = ctx.result || {};
    result.ok = false;
    const reserr = result.err;
    err = undefined === err ? reserr : err;
    err = err || new Error('unknown error');
    const errmsg = err.message || 'unknown error';
    const msg = 'LearnworldsSDK: ' + op.name + ': ' + errmsg;
    err.message = (0, CleanUtility_1.clean)(ctx, msg);
    if (result.err) {
        (0, StructUtility_1.delprop)(result, 'err');
    }
    const spec = ctx.spec || {};
    if (ctx.ctrl.explain) {
        ctx.ctrl.explain.err = {
            ...(0, StructUtility_1.clone)({ err }).err,
            message: err.message,
            stack: err.stack,
        };
    }
    err.result = (0, CleanUtility_1.clean)(ctx, result);
    err.spec = (0, CleanUtility_1.clean)(ctx, spec);
    ctx.ctrl.err = err;
    // TODO: model option to return instead
    if (false === ctx.ctrl.throw) {
        return ctx.result.resdata;
    }
    else {
        throw err;
    }
}
//# sourceMappingURL=ErrorUtility.js.map