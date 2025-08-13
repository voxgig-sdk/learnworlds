
import { Context } from '../types'


function resheaders(ctx: Context) {
  const { response, result } = ctx

  if (result) {
    if (response && response.headers && response.headers.forEach) {
      const headers: any = {}
      response.headers.forEach((v: any, k: any) => headers[k] = v)
      result.headers = headers
    }
    else {
      result.headers = {}
    }
  }

  return result
}


export {
  resheaders
}
