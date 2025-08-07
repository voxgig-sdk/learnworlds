// Course A

  function makeCourseActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_course(this: any, entize: any, msg: any) {
      const courseEntity = this.shared.sdk.Course()
      const q = msg.q || {}
  
      const resdata = await courseEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
  
  cmd.list = {
    action: async function list_course(this: any, entize: any, msg: any) {
      const courseEntity = this.shared.sdk.Course()
      const q = msg.q || {}
  
      const courseList = await courseEntity.list(q)
      const dataList = courseList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
  
  // Create operation is implemented by seneca entity save
  
  
  cmd.save = {
    action: async function update_course(this: any, entize: any, msg: any) {
      const courseEntity = this.shared.sdk.Course()
      let reqdata = msg.ent.data$()
  
      const update = null !== reqdata.id
      const resdata = await (update ?
        courseEntity.update(reqdata) :
        courseEntity.create(reqdata))
  
      let item = null
  
      if (resdata) {
        item = entize(resdata)
      }
  
      return item
    }
  }
  
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeCourseActions
  }
