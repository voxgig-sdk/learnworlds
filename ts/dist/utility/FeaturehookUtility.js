"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featurehook = featurehook;
function featurehook(ctx, name) {
    const client = ctx.client;
    let resp = [];
    const features = client._features || [];
    for (let f of features) {
        let fres = f[name](ctx);
        if (fres instanceof Promise) {
            resp.push(fres);
        }
    }
    if (0 < resp.length) {
        return Promise.all(resp);
    }
}
//# sourceMappingURL=FeaturehookUtility.js.map