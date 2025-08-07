"use strict";
// UserSubscription A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserSubscriptionActions = makeUserSubscriptionActions;
function makeUserSubscriptionActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_user_subscription(entize, msg) {
            const user_subscriptionEntity = this.shared.sdk.UserSubscription();
            const q = msg.q || {};
            const user_subscriptionList = await user_subscriptionEntity.list(q);
            const dataList = user_subscriptionList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=UserSubscriptionEntity.js.map