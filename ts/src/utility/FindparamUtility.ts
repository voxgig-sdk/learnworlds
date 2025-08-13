
import { Context } from '../types'

import { getprop } from './StructUtility'


/* Find value of a match parameter, possibly using an alias.
 *
 * The match parameter may have an alias key. For example, the parameter `foo_id` may be
 * aliased to `id` in the entity data.
 *
 * This function returns `undefined` rather than failing.
 */
function findparam(ctx: Context, key: string) {
  let { op, spec, match, reqmatch, data, reqdata } = ctx

  let akey = op.alias[key]

  let val = getprop(reqmatch, key)

  if (null == val) {
    val = getprop(match, key)
  }

  if (null == val && null != akey) {

    if (null != spec) {
      spec.alias[akey] = key
    }

    val = getprop(reqmatch, akey)
  }

  if (null == val) {
    val = getprop(reqdata, key)
  }

  if (null == val) {
    val = getprop(data, key)
  }

  if (null == val && null != akey) {
    val = getprop(reqdata, akey)

    if (null == val) {
      val = getprop(data, akey)
    }
  }

  return val
}


export {
  findparam
}

