// CourseContent A

  function makeCourseContentActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_course_content(this: any, entize: any, msg: any) {
      const course_contentEntity = this.shared.sdk.CourseContent()
      const q = msg.q || {}
  
      const resdata = await course_contentEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
    // #ListOp
  
  
  // Create operation is implemented by seneca entity save
  
    // #UpdateOp
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeCourseContentActions
  }
