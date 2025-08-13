
import { Context } from '../types'


async function resbody(ctx: Context) {
  const { response, result } = ctx

  if (result) {
    if (response && response.json) {
      const json = await response.json()
      result.body = json
    }
  }

  return result
}


export {
  resbody
}
