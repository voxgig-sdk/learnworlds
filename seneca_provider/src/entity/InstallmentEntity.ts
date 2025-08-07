// Installment A

  function makeInstallmentActions() {
  
    const cmd: any = {}
  
    // #LoadOp
  
  
  cmd.list = {
    action: async function list_installment(this: any, entize: any, msg: any) {
      const installmentEntity = this.shared.sdk.Installment()
      const q = msg.q || {}
  
      const installmentList = await installmentEntity.list(q)
      const dataList = installmentList.map((n: any) => n.data())
  
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
    makeInstallmentActions
  }
