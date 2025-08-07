// Affiliate A

  function makeAffiliateActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_affiliate(this: any, entize: any, msg: any) {
      const affiliateEntity = this.shared.sdk.Affiliate()
      const q = msg.q || {}
  
      const affiliateList = await affiliateEntity.list(q)
      const dataList = affiliateList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
  
  // Create operation is implemented by seneca entity save
  
    // #UpdateOp
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeAffiliateActions
  }
