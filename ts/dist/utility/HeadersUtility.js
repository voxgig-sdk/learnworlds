"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headers = headers;
const StructUtility_1 = require("./StructUtility");
function headers(ctx) {
    const utility = ctx.utility;
    const clone = utility.struct.clone;
    const client = ctx.client;
    const options = client.options();
    let out = clone((0, StructUtility_1.getprop)(options, 'headers', {}));
    return out;
}
//# sourceMappingURL=HeadersUtility.js.map