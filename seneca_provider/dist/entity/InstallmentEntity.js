"use strict";
// Installment A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInstallmentActions = makeInstallmentActions;
function makeInstallmentActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_installment(entize, msg) {
            const installmentEntity = this.shared.sdk.Installment();
            const q = msg.q || {};
            const installmentList = await installmentEntity.list(q);
            const dataList = installmentList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=InstallmentEntity.js.map