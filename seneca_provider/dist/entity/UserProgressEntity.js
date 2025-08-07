"use strict";
// UserProgress A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserProgressActions = makeUserProgressActions;
function makeUserProgressActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_user_progress(entize, msg) {
            const user_progressEntity = this.shared.sdk.UserProgress();
            const q = msg.q || {};
            const resdata = await user_progressEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    cmd.list = {
        action: async function list_user_progress(entize, msg) {
            const user_progressEntity = this.shared.sdk.UserProgress();
            const q = msg.q || {};
            const user_progressList = await user_progressEntity.list(q);
            const dataList = user_progressList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=UserProgressEntity.js.map