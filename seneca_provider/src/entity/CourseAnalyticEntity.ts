// CourseAnalytic A

  function makeCourseAnalyticActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_course_analytic(this: any, entize: any, msg: any) {
      const course_analyticEntity = this.shared.sdk.CourseAnalytic()
      const q = msg.q || {}
  
      const resdata = await course_analyticEntity.load(q)
  
      let item = entize(resdata)
      return item
    }
  }
  
  
    // #ListOp
  
    // #CreateOp
  
    // #UpdateOp
  
    // #RemoveOp
  
    return { cmd }
  }
  
  
  export {
    makeCourseAnalyticActions
  }
