"use strict";
// PayoutCompleted A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePayoutCompletedActions = makePayoutCompletedActions;
function makePayoutCompletedActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_payout_completed(entize, msg) {
            const payout_completedEntity = this.shared.sdk.PayoutCompleted();
            const q = msg.q || {};
            const payout_completedList = await payout_completedEntity.list(q);
            const dataList = payout_completedList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=PayoutCompletedEntity.js.map