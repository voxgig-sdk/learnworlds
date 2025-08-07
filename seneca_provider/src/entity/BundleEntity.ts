// Bundle A

  function makeBundleActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_bundle(this: any, entize: any, msg: any) {
      const bundleEntity = this.shared.sdk.Bundle()
      const q = msg.q || {}
  
      const resdata = await bundleEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_bundle(this: any, entize: any, msg: any) {
      const bundleEntity = this.shared.sdk.Bundle()
      const q = msg.q || {}
  
      const bundleList = await bundleEntity.list(q)
      const dataList = bundleList.map((n: any) => n.data())
  
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
    makeBundleActions
  }
