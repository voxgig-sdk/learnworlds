
cmd.save = {
  action: async function update_entityname(this: any, entize: any, msg: any) {
    const entitynameEntity = this.shared.sdk.EntityName()
    let reqdata = msg.ent.data$()

    const update = null !== reqdata.id
    const resdata = await (update ?
      entitynameEntity.update(reqdata) :
      entitynameEntity.create(reqdata))

    let item = null

    if (resdata) {
      item = entize(resdata)
    }

    return item
  }
}

