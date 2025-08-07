
import { Context } from '../types'


async function response(ctx: Context) {
  let { result, spec, utility } = ctx

  const { resheaders, resbasic, resbody, resform } = utility

  spec.step = 'response'

  try {
    resbasic(ctx)
    resheaders(ctx)
    await resbody(ctx)
    resform(ctx)

    if (null == result.err) {
      result.ok = true
    }
  }
  catch (err) {
    result.err = err
  }
}


export {
  response
}
