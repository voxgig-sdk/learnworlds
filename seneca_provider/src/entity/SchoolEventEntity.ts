// SchoolEvent A

  function makeSchoolEventActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_school_event(this: any, entize: any, msg: any) {
      const school_eventEntity = this.shared.sdk.SchoolEvent()
      const q = msg.q || {}
  
      const school_eventList = await school_eventEntity.list(q)
      const dataList = school_eventList.map((n: any) => n.data())
  
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
    makeSchoolEventActions
  }
