
import { Context } from '../types'


import {
  walk, getpath, escre, getprop, size, pad, slice, setprop, clone
} from './StructUtility'


// Clean request data by partially hiding sensitive values.
function clean(ctx: Context, val: any) {
  const options = ctx.options
  const work = ctx.work

  let cleaners = getprop(work, 'cleaners')

  if (null == cleaners) {
    cleaners =
      [
        { p: 'apikey', s: 4 }
      ]
        .map((p: any) => (p.v = getpath(options, p.p), p))
        .filter(p => null != p.v && 'string' === typeof p.v)
        .map(
          p => (
            p.re = new RegExp(escre(p.v)),
            p.v = pad(slice(p.v, 0, p.s), size(p.v), '*'),
            p
          )
        )
  }

  setprop(work, 'cleaners', cleaners)

  const out = walk(clone(val), (_k: any, v: any) => {
    if ('string' === typeof v) {
      cleaners.map((p: any) => {
        v = v.replace(p.re, p.v)
      })
    }
    return v
  })

  return out
}


export {
  clean
}
