// UserRole A

  function makeUserRoleActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_user_role(this: any, entize: any, msg: any) {
      const user_roleEntity = this.shared.sdk.UserRole()
      const q = msg.q || {}
  
      const resdata = await user_roleEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_user_role(this: any, entize: any, msg: any) {
      const user_roleEntity = this.shared.sdk.UserRole()
      const q = msg.q || {}
  
      const user_roleList = await user_roleEntity.list(q)
      const dataList = user_roleList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
    // #CreateOp
  
  
  cmd.save = {
    action: async function update_user_role(this: any, entize: any, msg: any) {
      const user_roleEntity = this.shared.sdk.UserRole()
      let reqdata = msg.ent.data$()
  
      const update = null !== reqdata.id
      const resdata = await (update ?
        user_roleEntity.update(reqdata) :
        user_roleEntity.create(reqdata))
  
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
    makeUserRoleActions
  }
