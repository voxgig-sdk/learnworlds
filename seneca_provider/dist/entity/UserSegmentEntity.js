"use strict";
// UserSegment A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserSegmentActions = makeUserSegmentActions;
function makeUserSegmentActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_user_segment(entize, msg) {
            const user_segmentEntity = this.shared.sdk.UserSegment();
            const q = msg.q || {};
            const user_segmentList = await user_segmentEntity.list(q);
            const dataList = user_segmentList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=UserSegmentEntity.js.map