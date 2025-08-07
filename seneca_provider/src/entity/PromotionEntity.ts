// Promotion A

  function makePromotionActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_promotion(this: any, entize: any, msg: any) {
      const promotionEntity = this.shared.sdk.Promotion()
      const q = msg.q || {}
  
      const resdata = await promotionEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_promotion(this: any, entize: any, msg: any) {
      const promotionEntity = this.shared.sdk.Promotion()
      const q = msg.q || {}
  
      const promotionList = await promotionEntity.list(q)
      const dataList = promotionList.map((n: any) => n.data())
  
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
    makePromotionActions
  }
