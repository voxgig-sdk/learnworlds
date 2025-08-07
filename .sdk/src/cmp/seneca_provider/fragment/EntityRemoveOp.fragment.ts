
cmd.remove = {
  action: async function remove_entityname(this: any, entize: any, msg: any) {
    const entitynameEntity = this.shared.sdk.EntityName()
    let reqdata = msg.ent.data$()

    const resdata = await entitynameEntity.remove(reqdata)

    let item = null

    if (resdata) {
      item = entize(resdata)
    }

    return item
  }
}
