
import { Context } from '../types'


/* Convert data from respnse into a structure suitable for use as entity data.
 *
 * The operation (op) property `resform` is used to perform the data extraction.
 */
function resform(ctx: Context) {
  const { spec, result, utility } = ctx
  const { struct, error } = utility
  const { isfunc, transform } = struct

  if (spec) {
    spec.step = 'resform'
  }

  if (!result.ok) {
    return undefined
  }

  try {
    const resform = ctx.op.resform
    const resdata = isfunc(resform) ? resform(ctx) : transform(ctx.result, resform)
    result.resdata = resdata
    return resdata
  }
  catch (err) {
    return error(ctx, err)
  }
}


export {
  resform
}
