type Context = any
type Operation = any
type Control = any

class EntityOperation {

  // EJECT-START

  async create(this: any, reqdata?: any, ctrl?: Control) {
    let entity = this
    let client = this.#client
    const utility = this.#utility
    const {
      operator, spec, request, response, result, done, contextify, opify, featurehook
    } = utility


    let fres: Promise<any> | undefined = undefined

    let op: Operation = opify({
      entity: 'entityname',
      name: 'create',
      path: 'PATH',
      pathalt: ['PATHALT'],
      params: ['PARAM-LIST'],
      alias: { 'ALIAS': 'MAP' },
      state: {},
      reqform: 'REQFORM',
      resform: 'RESFORM',
      validate: 'VALIDATE',
    })

    let ctx: Context = contextify({
      ctrl,
      op,
      match: this.#match,
      data: this.#data,
      reqdata
    }, this.#_basectx)

    try {

      // #PreOperation-Hook    

      operator(ctx)


      // #PreSpec-Hook

      spec(ctx)


      // #PreRequest-Hook

      await request(ctx)


      // #PreResponse-Hook

      await response(ctx)


      // #PreResult-Hook

      result(ctx)


      // #PostOperation-Hook

      if (null != ctx.result.resdata) {
        this.#data = ctx.result.resdata
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
