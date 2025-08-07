"use strict";
// PayoutDue A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePayoutDueActions = makePayoutDueActions;
function makePayoutDueActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_payout_due(entize, msg) {
            const payout_dueEntity = this.shared.sdk.PayoutDue();
            const q = msg.q || {};
            const payout_dueList = await payout_dueEntity.list(q);
            const dataList = payout_dueList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=PayoutDueEntity.js.map