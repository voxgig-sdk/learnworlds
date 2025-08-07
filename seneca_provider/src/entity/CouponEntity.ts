// Coupon A

  function makeCouponActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_coupon(this: any, entize: any, msg: any) {
      const couponEntity = this.shared.sdk.Coupon()
      const q = msg.q || {}
  
      const couponList = await couponEntity.list(q)
      const dataList = couponList.map((n: any) => n.data())
  
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
    makeCouponActions
  }
