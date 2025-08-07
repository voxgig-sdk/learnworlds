"use strict";
// Promotion A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePromotionActions = makePromotionActions;
function makePromotionActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_promotion(entize, msg) {
            const promotionEntity = this.shared.sdk.Promotion();
            const q = msg.q || {};
            const resdata = await promotionEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    cmd.list = {
        action: async function list_promotion(entize, msg) {
            const promotionEntity = this.shared.sdk.Promotion();
            const q = msg.q || {};
            const promotionList = await promotionEntity.list(q);
            const dataList = promotionList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // Create operation is implemented by seneca entity save
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=PromotionEntity.js.map