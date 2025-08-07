"use strict";
// Bundle A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBundleActions = makeBundleActions;
function makeBundleActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_bundle(entize, msg) {
            const bundleEntity = this.shared.sdk.Bundle();
            const q = msg.q || {};
            const resdata = await bundleEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    cmd.list = {
        action: async function list_bundle(entize, msg) {
            const bundleEntity = this.shared.sdk.Bundle();
            const q = msg.q || {};
            const bundleList = await bundleEntity.list(q);
            const dataList = bundleList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=BundleEntity.js.map