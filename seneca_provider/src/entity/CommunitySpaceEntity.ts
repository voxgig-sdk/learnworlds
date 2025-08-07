// CommunitySpace A

  function makeCommunitySpaceActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_community_space(this: any, entize: any, msg: any) {
      const community_spaceEntity = this.shared.sdk.CommunitySpace()
      const q = msg.q || {}
  
      const resdata = await community_spaceEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_community_space(this: any, entize: any, msg: any) {
      const community_spaceEntity = this.shared.sdk.CommunitySpace()
      const q = msg.q || {}
  
      const community_spaceList = await community_spaceEntity.list(q)
      const dataList = community_spaceList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
  
  // Create operation is implemented by seneca entity save
  
  
  cmd.save = {
    action: async function update_community_space(this: any, entize: any, msg: any) {
      const community_spaceEntity = this.shared.sdk.CommunitySpace()
      let reqdata = msg.ent.data$()
  
      const update = null !== reqdata.id
      const resdata = await (update ?
        community_spaceEntity.update(reqdata) :
        community_spaceEntity.create(reqdata))
  
      let item = null
  
      if (resdata) {
        item = entize(resdata)
      }
  
      return item
    }
  }
  
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeCommunitySpaceActions
  }
