
import { Context, Feature } from '../types'


function initfeature(ctx: Context, f: Feature) {
  const fopts = ctx.options.feature[f.name] || {}
  f.init(ctx, fopts)
}


export {
  initfeature
}
