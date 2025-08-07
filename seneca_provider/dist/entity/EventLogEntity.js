"use strict";
// EventLog A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEventLogActions = makeEventLogActions;
function makeEventLogActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_event_log(entize, msg) {
            const event_logEntity = this.shared.sdk.EventLog();
            const q = msg.q || {};
            const event_logList = await event_logEntity.list(q);
            const dataList = event_logList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=EventLogEntity.js.map