// Product A

  function makeProductActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_product(this: any, entize: any, msg: any) {
      const productEntity = this.shared.sdk.Product()
      const q = msg.q || {}
  
      const productList = await productEntity.list(q)
      const dataList = productList.map((n: any) => n.data())
  
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
    makeProductActions
  }
