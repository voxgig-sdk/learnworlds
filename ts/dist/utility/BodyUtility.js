"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.body = body;
function body(ctx) {
    const { op, utility } = ctx;
    const { error, reqform } = utility;
    let body = undefined;
    if ('req' === op.kind) {
        try {
            body = reqform(ctx);
            if (op.check.nobody && null == body) {
                return error(ctx, new Error('Request body is empty.'));
            }
        }
        catch (err) {
            return error(ctx, err);
        }
    }
    return body;
}
//# sourceMappingURL=BodyUtility.js.map