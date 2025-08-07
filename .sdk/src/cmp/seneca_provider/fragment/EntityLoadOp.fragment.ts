

cmd.load = {
  action: async function load_entityname(this: any, entize: any, msg: any) {
    const entitynameEntity = this.shared.sdk.EntityName()
    const q = msg.q || {}

    const resdata = await entitynameEntity.load(q)

    let item = entize(resdata)
    return item
  }
}

