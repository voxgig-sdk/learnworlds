"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resbody = resbody;
async function resbody(ctx) {
    const { response, result } = ctx;
    if (response && response.json) {
        const json = await response.json();
        result.body = json;
    }
    return result;
}
//# sourceMappingURL=ResbodyUtility.js.map