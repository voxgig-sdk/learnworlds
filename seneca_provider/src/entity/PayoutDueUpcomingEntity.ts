// PayoutDueUpcoming A

  function makePayoutDueUpcomingActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_payout_due_upcoming(this: any, entize: any, msg: any) {
      const payout_due_upcomingEntity = this.shared.sdk.PayoutDueUpcoming()
      const q = msg.q || {}
  
      const payout_due_upcomingList = await payout_due_upcomingEntity.list(q)
      const dataList = payout_due_upcomingList.map((n: any) => n.data())
  
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
    makePayoutDueUpcomingActions
  }
