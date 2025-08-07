// SubscriptionPlan A

  function makeSubscriptionPlanActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_subscription_plan(this: any, entize: any, msg: any) {
      const subscription_planEntity = this.shared.sdk.SubscriptionPlan()
      const q = msg.q || {}
  
      const resdata = await subscription_planEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_subscription_plan(this: any, entize: any, msg: any) {
      const subscription_planEntity = this.shared.sdk.SubscriptionPlan()
      const q = msg.q || {}
  
      const subscription_planList = await subscription_planEntity.list(q)
      const dataList = subscription_planList.map((n: any) => n.data())
  
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
    makeSubscriptionPlanActions
  }
