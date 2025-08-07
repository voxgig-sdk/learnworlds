"use strict";
// Lead A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeadActions = makeLeadActions;
function makeLeadActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_lead(entize, msg) {
            const leadEntity = this.shared.sdk.Lead();
            const q = msg.q || {};
            const leadList = await leadEntity.list(q);
            const dataList = leadList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=LeadEntity.js.map