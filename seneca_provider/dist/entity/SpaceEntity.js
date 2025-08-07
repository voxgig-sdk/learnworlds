"use strict";
// Space A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSpaceActions = makeSpaceActions;
function makeSpaceActions() {
    const cmd = {};
    // #LoadOp
    // #ListOp
    // #CreateOp
    // #UpdateOp
    cmd.remove = {
        action: async function remove_space(entize, msg) {
            const spaceEntity = this.shared.sdk.Space();
            let reqdata = msg.ent.data$();
            const resdata = await spaceEntity.remove(reqdata);
            let item = null;
            if (resdata) {
                item = entize(resdata);
            }
            return item;
        }
    };
    return { cmd };
}
//# sourceMappingURL=SpaceEntity.js.map