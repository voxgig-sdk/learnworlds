// Space A

  function makeSpaceActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
    // #ListOp
  
    // #CreateOp
  
    // #UpdateOp
  
  
  cmd.remove = {
    action: async function remove_space(this: any, entize: any, msg: any) {
      const spaceEntity = this.shared.sdk.Space()
      let reqdata = msg.ent.data$()
  
      const resdata = await spaceEntity.remove(reqdata)
  
      let item = null
  
      if (resdata) {
        item = entize(resdata)
      }
  
      return item
    }
  }
  
    return { cmd }
  }
  
  
  export {
    makeSpaceActions
  }
