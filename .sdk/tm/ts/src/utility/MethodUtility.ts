
import { Context } from '../types'

function method(ctx: Context) {
  const { op } = ctx
  const opname = op.name

  let key = opname

  // TODO: options
  const mmap: any = {
    create: 'POST',
    update: 'PUT',
    load: 'GET',
    list: 'GET',
    remove: 'DELETE',
  }

  return mmap[key]
}


export {
  method
}
