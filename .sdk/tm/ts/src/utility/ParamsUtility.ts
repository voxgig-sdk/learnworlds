
import { Context } from '../types'


function params(ctx: Context) {
  const utility = ctx.utility
  const findparam = utility.findparam

  const struct = utility.struct
  const { validate } = struct


  const { op } = ctx

  let { params } = op
  let { reqmatch } = ctx

  params = params || []
  reqmatch = reqmatch || {}

  let out: any = {}
  for (let key of params) {
    let val = findparam(ctx, key)
    if (null != val) {
      out[key] = val
    }
  }

  // out = validate(out, op.validate.params)

  return out
}


export {
  params
}
