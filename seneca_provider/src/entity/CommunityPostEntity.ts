// CommunityPost A

  function makeCommunityPostActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_community_post(this: any, entize: any, msg: any) {
      const community_postEntity = this.shared.sdk.CommunityPost()
      const q = msg.q || {}
  
      const resdata = await community_postEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_community_post(this: any, entize: any, msg: any) {
      const community_postEntity = this.shared.sdk.CommunityPost()
      const q = msg.q || {}
  
      const community_postList = await community_postEntity.list(q)
      const dataList = community_postList.map((n: any) => n.data())
  
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
    makeCommunityPostActions
  }
