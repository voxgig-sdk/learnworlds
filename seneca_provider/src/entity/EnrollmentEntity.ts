// Enrollment A

  function makeEnrollmentActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_enrollment(this: any, entize: any, msg: any) {
      const enrollmentEntity = this.shared.sdk.Enrollment()
      const q = msg.q || {}
  
      const enrollmentList = await enrollmentEntity.list(q)
      const dataList = enrollmentList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
  
  // Create operation is implemented by seneca entity save
  
    // #UpdateOp
  
  
  cmd.remove = {
    action: async function remove_enrollment(this: any, entize: any, msg: any) {
      const enrollmentEntity = this.shared.sdk.Enrollment()
      let reqdata = msg.ent.data$()
  
      const resdata = await enrollmentEntity.remove(reqdata)
  
      let item = null
  
      if (resdata) {
        item = entize(resdata)
      }
  
      return item
    }
  }
  
    return { cmd }
  }
  
  
  export {
    makeEnrollmentActions
  }
