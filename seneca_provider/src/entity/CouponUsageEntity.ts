// CouponUsage A

  function makeCouponUsageActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_coupon_usage(this: any, entize: any, msg: any) {
      const coupon_usageEntity = this.shared.sdk.CouponUsage()
      const q = msg.q || {}
  
      const resdata = await coupon_usageEntity.load(q)
  
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
    makeCouponUsageActions
  }
