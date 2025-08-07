
import { Context } from '../types'

// Make HTTP call using library. Replace this utility for mocking etc.
async function fetcher(ctx: Context, fullurl: string, fetchdef: Record<string, any>) {
  const options = ctx.client.options()
  const fetch = options.system.fetch

  const response = await fetch(fullurl, fetchdef)

  return response
}


export {
  fetcher
}
