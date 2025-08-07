"use strict";
// Product A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeProductActions = makeProductActions;
function makeProductActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_product(entize, msg) {
            const productEntity = this.shared.sdk.Product();
            const q = msg.q || {};
            const productList = await productEntity.list(q);
            const dataList = productList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=ProductEntity.js.map