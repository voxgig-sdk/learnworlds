// Grade A

  function makeGradeActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_grade(this: any, entize: any, msg: any) {
      const gradeEntity = this.shared.sdk.Grade()
      const q = msg.q || {}
  
      const gradeList = await gradeEntity.list(q)
      const dataList = gradeList.map((n: any) => n.data())
  
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
    makeGradeActions
  }
