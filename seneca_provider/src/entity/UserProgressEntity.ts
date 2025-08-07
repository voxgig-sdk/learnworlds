// UserProgress A

  function makeUserProgressActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_user_progress(this: any, entize: any, msg: any) {
      const user_progressEntity = this.shared.sdk.UserProgress()
      const q = msg.q || {}
  
      const resdata = await user_progressEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_user_progress(this: any, entize: any, msg: any) {
      const user_progressEntity = this.shared.sdk.UserProgress()
      const q = msg.q || {}
  
      const user_progressList = await user_progressEntity.list(q)
      const dataList = user_progressList.map((n: any) => n.data())
  
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
    makeUserProgressActions
  }
