// UnitAnalytic A

  function makeUnitAnalyticActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_unit_analytic(this: any, entize: any, msg: any) {
      const unit_analyticEntity = this.shared.sdk.UnitAnalytic()
      const q = msg.q || {}
  
      const resdata = await unit_analyticEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
    // #ListOp
  
    // #CreateOp
  
    // #UpdateOp
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeUnitAnalyticActions
  }
