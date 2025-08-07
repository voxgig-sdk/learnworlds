// PayoutCompleted A

  function makePayoutCompletedActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_payout_completed(this: any, entize: any, msg: any) {
      const payout_completedEntity = this.shared.sdk.PayoutCompleted()
      const q = msg.q || {}
  
      const payout_completedList = await payout_completedEntity.list(q)
      const dataList = payout_completedList.map((n: any) => n.data())
  
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
    makePayoutCompletedActions
  }
