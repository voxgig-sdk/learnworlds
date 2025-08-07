
import { Context } from '../types'

function body(ctx: Context) {
  const { op, utility } = ctx
  const { error, reqform } = utility

  let body = undefined

  if ('req' === op.kind) {
    try {
      body = reqform(ctx)

      if (op.check.nobody && null == body) {
        return error(ctx, new Error('Request body is empty.'))
      }
    }
    catch (err) {
      return error(ctx, err)
    }
  }

  return body
}

export {
  body
}

