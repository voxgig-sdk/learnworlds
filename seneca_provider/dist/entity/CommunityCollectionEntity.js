"use strict";
// CommunityCollection A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCommunityCollectionActions = makeCommunityCollectionActions;
function makeCommunityCollectionActions() {
    const cmd = {};
    // #LoadOp
    cmd.list = {
        action: async function list_community_collection(entize, msg) {
            const community_collectionEntity = this.shared.sdk.CommunityCollection();
            const q = msg.q || {};
            const community_collectionList = await community_collectionEntity.list(q);
            const dataList = community_collectionList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=CommunityCollectionEntity.js.map