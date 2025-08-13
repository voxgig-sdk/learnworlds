
import { Context, Feature } from '../types'


function initfeature(ctx: Context, f: Feature) {
  const fopts = ctx.options.feature[f.name] || {}
  if (true === fopts.active) {
    f.init(ctx, fopts)
  }
}


export {
  initfeature
}
