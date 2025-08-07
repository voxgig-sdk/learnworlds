"use strict";
// SubscriptionPlan A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSubscriptionPlanActions = makeSubscriptionPlanActions;
function makeSubscriptionPlanActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_subscription_plan(entize, msg) {
            const subscription_planEntity = this.shared.sdk.SubscriptionPlan();
            const q = msg.q || {};
            const resdata = await subscription_planEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    cmd.list = {
        action: async function list_subscription_plan(entize, msg) {
            const subscription_planEntity = this.shared.sdk.SubscriptionPlan();
            const q = msg.q || {};
            const subscription_planList = await subscription_planEntity.list(q);
            const dataList = subscription_planList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=SubscriptionPlanEntity.js.map