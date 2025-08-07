"use strict";
// CommunityPost A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCommunityPostActions = makeCommunityPostActions;
function makeCommunityPostActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_community_post(entize, msg) {
            const community_postEntity = this.shared.sdk.CommunityPost();
            const q = msg.q || {};
            const resdata = await community_postEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    cmd.list = {
        action: async function list_community_post(entize, msg) {
            const community_postEntity = this.shared.sdk.CommunityPost();
            const q = msg.q || {};
            const community_postList = await community_postEntity.list(q);
            const dataList = community_postList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=CommunityPostEntity.js.map