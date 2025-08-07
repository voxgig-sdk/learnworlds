
cmd.list = {
  action: async function list_entityname(this: any, entize: any, msg: any) {
    const entitynameEntity = this.shared.sdk.EntityName()
    const q = msg.q || {}

    const entitynameList = await entitynameEntity.list(q)
    const dataList = entitynameList.map((n: any) => n.data())

    let items = dataList.map((data: any) => entize(data))
    return items
  }
}
