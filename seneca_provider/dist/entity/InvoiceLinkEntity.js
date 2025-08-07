"use strict";
// InvoiceLink A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInvoiceLinkActions = makeInvoiceLinkActions;
function makeInvoiceLinkActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_invoice_link(entize, msg) {
            const invoice_linkEntity = this.shared.sdk.InvoiceLink();
            const q = msg.q || {};
            const resdata = await invoice_linkEntity.load(q);
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
//# sourceMappingURL=InvoiceLinkEntity.js.map