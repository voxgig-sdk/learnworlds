"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = response;
async function response(ctx) {
    let { result, spec, utility } = ctx;
    const { resheaders, resbasic, resbody, resform } = utility;
    spec.step = 'response';
    try {
        resbasic(ctx);
        resheaders(ctx);
        await resbody(ctx);
        resform(ctx);
        if (null == result.err) {
            result.ok = true;
        }
    }
    catch (err) {
        result.err = err;
    }
}
//# sourceMappingURL=ResponseUtility.js.map