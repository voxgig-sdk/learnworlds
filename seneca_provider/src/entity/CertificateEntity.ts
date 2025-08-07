// Certificate A

  function makeCertificateActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_certificate(this: any, entize: any, msg: any) {
      const certificateEntity = this.shared.sdk.Certificate()
      const q = msg.q || {}
  
      const certificateList = await certificateEntity.list(q)
      const dataList = certificateList.map((n: any) => n.data())
  
      let items = dataList.map((data: any) => entize(data))
      return items
    }
  }
  
    // #CreateOp
  
  
  cmd.save = {
    action: async function update_certificate(this: any, entize: any, msg: any) {
      const certificateEntity = this.shared.sdk.Certificate()
      let reqdata = msg.ent.data$()
  
      const update = null !== reqdata.id
      const resdata = await (update ?
        certificateEntity.update(reqdata) :
        certificateEntity.create(reqdata))
  
      let item = null
  
      if (resdata) {
        item = entize(resdata)
      }
  
      return item
    }
  }
  
  
  
  cmd.remove = {
    action: async function remove_certificate(this: any, entize: any, msg: any) {
      const certificateEntity = this.shared.sdk.Certificate()
      let reqdata = msg.ent.data$()
  
      const resdata = await certificateEntity.remove(reqdata)
  
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
    makeCertificateActions
  }
