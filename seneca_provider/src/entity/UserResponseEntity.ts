// UserResponse A

  function makeUserResponseActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_user_response(this: any, entize: any, msg: any) {
      const user_responseEntity = this.shared.sdk.UserResponse()
      const q = msg.q || {}
  
      const user_responseList = await user_responseEntity.list(q)
      const dataList = user_responseList.map((n: any) => n.data())
  
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
    makeUserResponseActions
  }
