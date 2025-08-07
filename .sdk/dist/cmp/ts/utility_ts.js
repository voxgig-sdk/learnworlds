"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatJSONSrc = formatJSONSrc;
function formatJSONSrc(jsonsrc) {
    return jsonsrc
        .replace(/([{:\[,])/g, '$1 ')
        .replace(/([}\]])/g, ' $1');
}
//# sourceMappingURL=utility_ts.js.map