"use strict";
// PayoutDueUpcoming A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePayoutDueUpcomingActions = makePayoutDueUpcomingActions;
function makePayoutDueUpcomingActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_payout_due_upcoming(entize, msg) {
            const payout_due_upcomingEntity = this.shared.sdk.PayoutDueUpcoming();
            const q = msg.q || {};
            const payout_due_upcomingList = await payout_due_upcomingEntity.list(q);
            const dataList = payout_due_upcomingList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=PayoutDueUpcomingEntity.js.map