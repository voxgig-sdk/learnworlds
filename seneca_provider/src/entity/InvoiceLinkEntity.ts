// InvoiceLink A

  function makeInvoiceLinkActions() {
  
    const cmd: any = {}
  
  
  
  cmd.load = {
    action: async function load_invoice_link(this: any, entize: any, msg: any) {
      const invoice_linkEntity = this.shared.sdk.InvoiceLink()
      const q = msg.q || {}
  
      const resdata = await invoice_linkEntity.load(q)
  
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
    makeInvoiceLinkActions
  }
