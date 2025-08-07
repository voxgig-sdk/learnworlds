"use strict";
// Grade A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGradeActions = makeGradeActions;
function makeGradeActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_grade(entize, msg) {
            const gradeEntity = this.shared.sdk.Grade();
            const q = msg.q || {};
            const gradeList = await gradeEntity.list(q);
            const dataList = gradeList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=GradeEntity.js.map