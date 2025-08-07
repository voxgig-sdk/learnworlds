"use strict";
// Affiliate A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAffiliateActions = makeAffiliateActions;
function makeAffiliateActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_affiliate(entize, msg) {
            const affiliateEntity = this.shared.sdk.Affiliate();
            const q = msg.q || {};
            const affiliateList = await affiliateEntity.list(q);
            const dataList = affiliateList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // Create operation is implemented by seneca entity save
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=AffiliateEntity.js.map