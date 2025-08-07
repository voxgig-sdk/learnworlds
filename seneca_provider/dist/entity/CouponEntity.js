"use strict";
// Coupon A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCouponActions = makeCouponActions;
function makeCouponActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_coupon(entize, msg) {
            const couponEntity = this.shared.sdk.Coupon();
            const q = msg.q || {};
            const couponList = await couponEntity.list(q);
            const dataList = couponList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // Create operation is implemented by seneca entity save
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=CouponEntity.js.map