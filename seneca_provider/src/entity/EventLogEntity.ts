// EventLog A

  function makeEventLogActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_event_log(this: any, entize: any, msg: any) {
      const event_logEntity = this.shared.sdk.EventLog()
      const q = msg.q || {}
  
      const event_logList = await event_logEntity.list(q)
      const dataList = event_logList.map((n: any) => n.data())
  
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
    makeEventLogActions
  }
