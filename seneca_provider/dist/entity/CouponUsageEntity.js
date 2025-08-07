"use strict";
// CouponUsage A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCouponUsageActions = makeCouponUsageActions;
function makeCouponUsageActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_coupon_usage(entize, msg) {
            const coupon_usageEntity = this.shared.sdk.CouponUsage();
            const q = msg.q || {};
            const resdata = await coupon_usageEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    // #ListOp
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=CouponUsageEntity.js.map