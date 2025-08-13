
import { Context, Response } from '../types'


async function request(ctx: Context): Promise<Response | Error> {
  // PreRequest feature hook has already provided a result.
  if (ctx.out.request) {
    return ctx.out.request
  }

  const { spec, utility } = ctx
  const { fullurl, fetcher } = utility

  let response: any = {}

  let result = {
    ok: false,
    status: -1,
    statusText: '',
    headers: {},
    body: undefined,
    err: undefined,
  }

  ctx.result = result

  if (null == spec) {
    return new Error('Expected context spec property to be defined.')
  }


  try {
    spec.step = 'prepare'

    const url = fullurl(ctx)
    if (url instanceof Error) {
      throw url
    }

    spec.url = url

    const fetchdef: any = {
      method: spec.method,
      headers: spec.headers,
    }

    if (null != spec.body) {
      fetchdef.body =
        'object' === typeof spec.body ? JSON.stringify(spec.body) : spec.body
    }

    if (ctx.ctrl.explain) {
      ctx.ctrl.explain.fetchdef = fetchdef
    }

    spec.step = 'prerequest'

    // TODO: see js code, use `native` prop here
    response = await fetcher(ctx, url, fetchdef)

    if (null == response) {
      response = { err: new Error('response: undefined') }
    }
    else if (response instanceof Error) {
      response = { err: response }
    }
  }
  catch (err) {
    response = response || {}
    response.err = err
  }

  spec.step = 'postrequest'

  ctx.response = response

  return response
}


export {
  request
}
