"use strict";
// SchoolEvent A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSchoolEventActions = makeSchoolEventActions;
function makeSchoolEventActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_school_event(entize, msg) {
            const school_eventEntity = this.shared.sdk.SchoolEvent();
            const q = msg.q || {};
            const school_eventList = await school_eventEntity.list(q);
            const dataList = school_eventList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=SchoolEventEntity.js.map