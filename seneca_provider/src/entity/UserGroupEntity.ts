// UserGroup A

  function makeUserGroupActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_user_group(this: any, entize: any, msg: any) {
      const user_groupEntity = this.shared.sdk.UserGroup()
      const q = msg.q || {}
  
      const resdata = await user_groupEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_user_group(this: any, entize: any, msg: any) {
      const user_groupEntity = this.shared.sdk.UserGroup()
      const q = msg.q || {}
  
      const user_groupList = await user_groupEntity.list(q)
      const dataList = user_groupList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
  
  // Create operation is implemented by seneca entity save
  
  
  cmd.save = {
    action: async function update_user_group(this: any, entize: any, msg: any) {
      const user_groupEntity = this.shared.sdk.UserGroup()
      let reqdata = msg.ent.data$()
  
      const update = null !== reqdata.id
      const resdata = await (update ?
        user_groupEntity.update(reqdata) :
        user_groupEntity.create(reqdata))
  
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
    makeUserGroupActions
  }
