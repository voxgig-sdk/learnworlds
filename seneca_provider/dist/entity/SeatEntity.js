"use strict";
// Seat A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSeatActions = makeSeatActions;
function makeSeatActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_seat(entize, msg) {
            const seatEntity = this.shared.sdk.Seat();
            const q = msg.q || {};
            const resdata = await seatEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    cmd.list = {
        action: async function list_seat(entize, msg) {
            const seatEntity = this.shared.sdk.Seat();
            const q = msg.q || {};
            const seatList = await seatEntity.list(q);
            const dataList = seatList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // Create operation is implemented by seneca entity save
    cmd.save = {
        action: async function update_seat(entize, msg) {
            const seatEntity = this.shared.sdk.Seat();
            let reqdata = msg.ent.data$();
            const update = null !== reqdata.id;
            const resdata = await (update ?
                seatEntity.update(reqdata) :
                seatEntity.create(reqdata));
            let item = null;
            if (resdata) {
                item = entize(resdata);
            }
            return item;
        }
    };
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=SeatEntity.js.map