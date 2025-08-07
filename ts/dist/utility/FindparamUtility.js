"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findparam = findparam;
const StructUtility_1 = require("./StructUtility");
/* Find value of a match parameter, possibly using an alias.
 *
 * The match parameter may have an alias key. For example, the parameter `foo_id` may be
 * aliased to `id` in the entity data.
 *
 * This function returns `undefined` rather than failing.
 */
function findparam(ctx, key) {
    let { op, spec, match, reqmatch, data, reqdata } = ctx;
    let akey = op.alias[key];
    let val = (0, StructUtility_1.getprop)(reqmatch, key);
    if (null == val) {
        val = (0, StructUtility_1.getprop)(match, key);
    }
    if (null == val && null != akey) {
        spec.alias[akey] = key;
        val = (0, StructUtility_1.getprop)(reqmatch, akey);
    }
    if (null == val) {
        val = (0, StructUtility_1.getprop)(reqdata, key);
    }
    if (null == val) {
        val = (0, StructUtility_1.getprop)(data, key);
    }
    if (null == val && null != akey) {
        val = (0, StructUtility_1.getprop)(reqdata, akey);
        if (null == val) {
            val = (0, StructUtility_1.getprop)(data, akey);
        }
    }
    return val;
}
//# sourceMappingURL=FindparamUtility.js.map