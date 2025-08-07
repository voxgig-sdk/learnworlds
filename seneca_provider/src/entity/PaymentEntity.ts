// Payment A

  function makePaymentActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_payment(this: any, entize: any, msg: any) {
      const paymentEntity = this.shared.sdk.Payment()
      const q = msg.q || {}
  
      const resdata = await paymentEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_payment(this: any, entize: any, msg: any) {
      const paymentEntity = this.shared.sdk.Payment()
      const q = msg.q || {}
  
      const paymentList = await paymentEntity.list(q)
      const dataList = paymentList.map((n: any) => n.data())
  
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
    makePaymentActions
  }
