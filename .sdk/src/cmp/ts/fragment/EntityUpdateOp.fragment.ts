type Context = any
type Operation = any
type Control = any

class EntityOperation {

  // EJECT-START

  async update(this: any, reqdata?: any, ctrl?: Control) {
    let entity = this
    let client = this.#client
    const utility = this.#utility
    const {
      contextify,
      done,
      error,
      featurehook,
      operator,
      opify,
      request,
      response,
      result,
      spec,
    } = utility

    let fres: Promise<any> | undefined = undefined

    let op: Operation = opify({
      entity: 'entityname',
      name: 'update',
      path: 'PATH',
      params: ['PARAM-LIST'],
      alias: { 'ALIAS': 'MAP' },
      state: {},
      reqform: 'REQFORM',
      resform: 'RESFORM',
      validate: 'VALIDATE',
    })

    let ctx: Context = contextify({
      current: new WeakMap(),
      ctrl,
      op,
      match: this.#match,
      data: this.#data,
      reqdata
    }, this._entctx)

    try {

      // #PreOperation-Hook    

      ctx.out.operator = operator(ctx)
      if (ctx.out.operator instanceof Error) {
        return error(ctx, ctx.out.operator)
      }


      // #PreSpec-Hook

      ctx.out.spec = spec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }


      // #PreRequest-Hook

      ctx.out.request = await request(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }


      // #PreResponse-Hook

      ctx.out.response = await response(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }


      // #PreResult-Hook

      ctx.out.result = await result(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }


      // #PostOperation-Hook

      if (null != ctx.result) {
        if (null != ctx.result.resmatch) {
          this.#match = ctx.result.resmatch
        }

        if (null != ctx.result.resdata) {
          this.#data = ctx.result.resdata
        }
      }

      return done(ctx)
    }
    catch (err: any) {
      err = this.#unexpected(ctx, err)

      if (err) {
        throw err
      }
      else {
        return undefined
      }
    }
  }

  // EJECT-END

  #unexpected(this: any, ctx: Context, ctrl: any, err: any): any { return err }

}

