"use strict";
// Certificate A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCertificateActions = makeCertificateActions;
function makeCertificateActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_certificate(entize, msg) {
            const certificateEntity = this.shared.sdk.Certificate();
            const q = msg.q || {};
            const certificateList = await certificateEntity.list(q);
            const dataList = certificateList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    cmd.save = {
        action: async function update_certificate(entize, msg) {
            const certificateEntity = this.shared.sdk.Certificate();
            let reqdata = msg.ent.data$();
            const update = null !== reqdata.id;
            const resdata = await (update ?
                certificateEntity.update(reqdata) :
                certificateEntity.create(reqdata));
            let item = null;
            if (resdata) {
                item = entize(resdata);
            }
            return item;
        }
    };
    cmd.remove = {
        action: async function remove_certificate(entize, msg) {
            const certificateEntity = this.shared.sdk.Certificate();
            let reqdata = msg.ent.data$();
            const resdata = await certificateEntity.remove(reqdata);
            let item = null;
            if (resdata) {
                item = entize(resdata);
            }
            return item;
        }
    };
    return { cmd };
}
//# sourceMappingURL=CertificateEntity.js.map