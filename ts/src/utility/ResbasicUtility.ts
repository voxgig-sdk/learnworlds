
import { Context } from '../types'


function resbasic(ctx: Context) {
  const { response, result } = ctx

  if (null != result && null != response) {
    result.status = response.status || -1
    result.statusText = response.statusText || 'no-status'

    // TODO: use spec!
    if (400 <= result.status) {
      const msg = 'request: ' + result.status + ': ' + result.statusText
      if (result.err) {
        const prevmsg = null == result.err.message ? '' : result.err.message
        result.err.message = prevmsg + ': ' + msg
      }
      else {
        result.err = new Error(msg)
      }
    }
    else if (response.err) {
      result.err = response.err
    }
  }

  return result
}


export {
  resbasic
}
