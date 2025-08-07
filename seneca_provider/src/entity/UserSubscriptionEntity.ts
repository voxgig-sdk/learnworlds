// UserSubscription A

  function makeUserSubscriptionActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_user_subscription(this: any, entize: any, msg: any) {
      const user_subscriptionEntity = this.shared.sdk.UserSubscription()
      const q = msg.q || {}
  
      const user_subscriptionList = await user_subscriptionEntity.list(q)
      const dataList = user_subscriptionList.map((n: any) => n.data())
  
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
    makeUserSubscriptionActions
  }
