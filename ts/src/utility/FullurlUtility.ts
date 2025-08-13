
import { Context } from '../types'

function fullurl(ctx: Context): Error | string {
  const utility = ctx.utility
  // const findparam = utility.findparam

  const struct = utility.struct
  const { escurl, escre, joinurl } = struct

  const { spec, result } = ctx

  if (null == spec) {
    return new Error('Expected context spec property to be defined.')
  }

  if (null == result) {
    return new Error('Expected context result property to be defined.')
  }


  let url = joinurl([spec.base, spec.prefix, spec.path, spec.suffix])
  let resmatch: Record<string, any> = {}

  const params = spec.params

  for (let key in params) {
    const val = params[key]
    if (null != val) {
      url = url.replace(RegExp('{' + escre(key) + '}'), escurl(val))
      resmatch[key] = val
    }
  }

  let qsep = '?'
  for (let key in spec.query) {
    if (null == spec.alias[key]) {
      const val = spec.query[key]
      if (null != val) {
        url += qsep + escurl(key) + '=' + escurl(val)
        qsep = '&'
        resmatch[key] = val
      }
    }
  }

  result.resmatch = resmatch

  return url
}


export {
  fullurl
}
