// UserSegment A

  function makeUserSegmentActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_user_segment(this: any, entize: any, msg: any) {
      const user_segmentEntity = this.shared.sdk.UserSegment()
      const q = msg.q || {}
  
      const user_segmentList = await user_segmentEntity.list(q)
      const dataList = user_segmentList.map((n: any) => n.data())
  
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
    makeUserSegmentActions
  }
