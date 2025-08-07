// CommunityCollection A

  function makeCommunityCollectionActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_community_collection(this: any, entize: any, msg: any) {
      const community_collectionEntity = this.shared.sdk.CommunityCollection()
      const q = msg.q || {}
  
      const community_collectionList = await community_collectionEntity.list(q)
      const dataList = community_collectionList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
    // #CreateOp
  
    // #UpdateOp
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeCommunityCollectionActions
  }
