"use strict";
// Enrollment A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEnrollmentActions = makeEnrollmentActions;
function makeEnrollmentActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_enrollment(entize, msg) {
            const enrollmentEntity = this.shared.sdk.Enrollment();
            const q = msg.q || {};
            const enrollmentList = await enrollmentEntity.list(q);
            const dataList = enrollmentList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // Create operation is implemented by seneca entity save
    // #UpdateOp
    cmd.remove = {
        action: async function remove_enrollment(entize, msg) {
            const enrollmentEntity = this.shared.sdk.Enrollment();
            let reqdata = msg.ent.data$();
            const resdata = await enrollmentEntity.remove(reqdata);
            let item = null;
            if (resdata) {
                item = entize(resdata);
            }
            return item;
        }
    };
    return { cmd };
}
//# sourceMappingURL=EnrollmentEntity.js.map