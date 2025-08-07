"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initfeature = initfeature;
function initfeature(ctx, f) {
    const fopts = ctx.options.feature[f.name] || {};
    f.init(ctx, fopts);
}
//# sourceMappingURL=InitfeatureUtility.js.map