"use strict";
// Payment A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePaymentActions = makePaymentActions;
function makePaymentActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_payment(entize, msg) {
            const paymentEntity = this.shared.sdk.Payment();
            const q = msg.q || {};
            const resdata = await paymentEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    cmd.list = {
        action: async function list_payment(entize, msg) {
            const paymentEntity = this.shared.sdk.Payment();
            const q = msg.q || {};
            const paymentList = await paymentEntity.list(q);
            const dataList = paymentList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=PaymentEntity.js.map