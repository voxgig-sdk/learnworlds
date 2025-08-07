
import { Context } from '../types'


function query(ctx: Context) {
  const { op } = ctx
  let { params } = op
  let { reqmatch } = ctx

  params = params || []
  reqmatch = reqmatch || {}

  const out: any = {}
  for (let key of Object.keys(reqmatch)) {
    let val = reqmatch[key]
    if (null != val && !params.includes(key)) {
      out[key] = val
    }
  }

  return out
}


export {
  query
}
