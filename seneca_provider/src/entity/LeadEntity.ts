// Lead A

  function makeLeadActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_lead(this: any, entize: any, msg: any) {
      const leadEntity = this.shared.sdk.Lead()
      const q = msg.q || {}
  
      const leadList = await leadEntity.list(q)
      const dataList = leadList.map((n: any) => n.data())
  
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
    makeLeadActions
  }
