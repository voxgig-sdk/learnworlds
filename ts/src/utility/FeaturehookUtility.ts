
import { Context, Feature } from '../types'


function featurehook(ctx: Context, name: string) {
  const client = ctx.client

  let resp: Promise<any>[] = []
  const features: Feature[] = client._features || []

  for (let f of features) {
    let fres = (f as any)[name](ctx)
    if (fres instanceof Promise) {
      resp.push(fres)
    }
  }

  if (0 < resp.length) {
    return Promise.all(resp)
  }
}


export {
  featurehook
}
