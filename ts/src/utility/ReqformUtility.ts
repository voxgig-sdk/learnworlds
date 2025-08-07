
import { Context } from '../types'

/* Convert entity data or match query into a srtucture suitable for use as request data.
 *
 * The operation (op) property `reqform` is used to perform the data preparation.
 */
function reqform(ctx: Context) {
  const { spec, utility } = ctx
  const { struct, error } = utility
  const { isfunc, transform } = struct

  if (spec) {
    spec.step = 'reqform'
  }

  try {
    const reqform = ctx.op.reqform
    const reqdata = isfunc(reqform) ? reqform(ctx) : transform({
      reqdata: ctx.reqdata
    }, reqform)

    return reqdata
  }
  catch (err) {
    return error(ctx, err)
  }
}


export {
  reqform
}
