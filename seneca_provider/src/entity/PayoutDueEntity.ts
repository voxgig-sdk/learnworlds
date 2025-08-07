// PayoutDue A

  function makePayoutDueActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_payout_due(this: any, entize: any, msg: any) {
      const payout_dueEntity = this.shared.sdk.PayoutDue()
      const q = msg.q || {}
  
      const payout_dueList = await payout_dueEntity.list(q)
      const dataList = payout_dueList.map((n: any) => n.data())
  
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
    makePayoutDueActions
  }
