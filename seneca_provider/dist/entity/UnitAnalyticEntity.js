"use strict";
// UnitAnalytic A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUnitAnalyticActions = makeUnitAnalyticActions;
function makeUnitAnalyticActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_unit_analytic(entize, msg) {
            const unit_analyticEntity = this.shared.sdk.UnitAnalytic();
            const q = msg.q || {};
            const resdata = await unit_analyticEntity.load(q);
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
//# sourceMappingURL=UnitAnalyticEntity.js.map