
import { inspect } from 'node:util'

import {
  LearnworldsSDK,
  LearnworldsEntity,
} from '../LearnworldsSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'


class UserGroupEntity {
  #client: LearnworldsSDK
  #entopts: any
  #utility: any
  #data: any
  #match: any

  _entctx: Context

  constructor(client: LearnworldsSDK, entopts: any) {
    // super()
    entopts = entopts || {}
    entopts.active = false !== entopts.active

    this.#client = client
    this.#entopts = entopts
    this.#utility = client.utility()
    this.#data = {}
    this.#match = {}

    const contextify = this.#utility.contextify

    this._entctx = contextify({
      entity: this,
      entopts,
    }, client._rootctx)

    const featurehook = this.#utility.featurehook
    featurehook(this._entctx, 'PostConstructEntity')
  }

  entopts() {
    return { ...this.#entopts }
  }

  client() {
    return this.#client
  }

  make() {
    return new UserGroupEntity(this.#client, this.entopts())
  }


  data(this: any, data?: any) {
    const featurehook = this.#utility.featurehook

    if (null != data) {
      featurehook(this._entctx, 'SetData')
      this.#data = { ...data }
    }

    let out = { ...this.#data }

    featurehook(this._entctx, 'GetData')
    return out
  }


  match(match?: any) {
    const featurehook = this.#utility.featurehook

    if (null != match) {
      featurehook(this._entctx, 'SetMatch')
      this.#match = { ...match }
    }

    let out = { ...this.#match }

    featurehook(this._entctx, 'GetMatch')
    return out
  }


  toJSON() {
    return { ...(this.#data || {}), _entity: 'UserGroup' }
  }

  toString() {
    return 'UserGroup ' + this.#utility.struct.jsonify(this.#data)
  }

  [inspect.custom]() {
    return this.toString()
  }



  async load(this: any, reqmatch?: any, ctrl?: Control) {

    const entity = this
    const client = this.#client
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

    const op: Operation = opify({
      entity: 'user_group',
      name: 'load',
      path: '/v2/user_groups/{id}',
      pathalt: [{"path":"/v2/user_groups/{id}","id":true}],
      params: [
  "id"
],
      alias: {},
      state: {},
      reqform: "`body`",
      resform: "`body`",
      validate: { "params": { "id": "`$STRING`", "Authorization": "`$STRING`", "Lw-Client": "`$STRING`" } },
    })

    let ctx: Context = contextify({
      current: new WeakMap(),
      ctrl,
      op,
      match: this.#match,
      data: this.#data,
      reqmatch
    }, this._entctx)

    try {


      fres = featurehook(ctx, 'PreOperation')
      if (fres instanceof Promise) { await fres }

      ctx.out.operator = operator(ctx)
      if (ctx.out.operator instanceof Error) {
        return error(ctx, ctx.out.operator)
      }



      fres = featurehook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      ctx.out.spec = spec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }



      fres = featurehook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      ctx.out.request = await request(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }



      fres = featurehook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      ctx.out.response = await response(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }



      fres = featurehook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      ctx.out.result = await result(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }



      fres = featurehook(ctx, 'PostOperation')
      if (fres instanceof Promise) { await fres }

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



  async list(this: any, reqmatch?: any, ctrl?: Control) {
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
      entity: 'user_group',
      name: 'list',
      path: '/v2/user_groups',
      pathalt: [{"path":"/v2/users/{user_id}/user-groups","user_id":true},{"path":"/v2/user_groups","user_id":false}],
      params: [
  "user_id"
],
      alias: {},
      state: {},
      reqform: "`body`",
      resform: "`body`",
      validate: { "params": { "user_id": "`$STRING`" } },
    })

    let ctx: Context = contextify({
      current: new WeakMap(),
      ctrl,
      op,
      match: this.#match,
      data: this.#data,
      reqmatch
    }, this._entctx)

    try {


      fres = featurehook(ctx, 'PreOperation')
      if (fres instanceof Promise) { await fres }

      ctx.out.operator = operator(ctx)
      if (ctx.out.operator instanceof Error) {
        return error(ctx, ctx.out.operator)
      }



      fres = featurehook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      ctx.out.spec = spec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }



      fres = featurehook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      ctx.out.request = await request(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }



      fres = featurehook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      ctx.out.response = await response(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }



      fres = featurehook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      ctx.out.result = await result(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }



      fres = featurehook(ctx, 'PostOperation')
      if (fres instanceof Promise) { await fres }

      if (null != ctx.result) {
        if (null != ctx.result.resmatch) {
          this.#match = ctx.result.resmatch
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



  async create(this: any, reqdata?: any, ctrl?: Control) {
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
      entity: 'user_group',
      name: 'create',
      path: '/v2/user_groups',
      pathalt: [{"path":"/v2/user_groups"}],
      params: [],
      alias: {},
      state: {},
      reqform: "`reqdata`",
      resform: "`body`",
      validate: { "params": { "Authorization": "`$STRING`", "Lw-Client": "`$STRING`" } },
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


      fres = featurehook(ctx, 'PreOperation')
      if (fres instanceof Promise) { await fres }

      ctx.out.operator = operator(ctx)
      if (ctx.out.operator instanceof Error) {
        return error(ctx, ctx.out.operator)
      }


      fres = featurehook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      ctx.out.spec = spec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }



      fres = featurehook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      ctx.out.request = await request(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }



      fres = featurehook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      ctx.out.response = await response(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }



      fres = featurehook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      ctx.out.result = await result(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }



      fres = featurehook(ctx, 'PostOperation')
      if (fres instanceof Promise) { await fres }

      if (null != ctx.result) {
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
      entity: 'user_group',
      name: 'update',
      path: '/v2/user_groups/{id}',
      params: [
  "id"
],
      alias: {},
      state: {},
      reqform: "`reqdata`",
      resform: "`body`",
      validate: { "params": { "id": "`$STRING`", "Authorization": "`$STRING`", "Lw-Client": "`$STRING`" } },
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


      fres = featurehook(ctx, 'PreOperation')
      if (fres instanceof Promise) { await fres }

      ctx.out.operator = operator(ctx)
      if (ctx.out.operator instanceof Error) {
        return error(ctx, ctx.out.operator)
      }



      fres = featurehook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      ctx.out.spec = spec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }



      fres = featurehook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      ctx.out.request = await request(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }



      fres = featurehook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      ctx.out.response = await response(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }



      fres = featurehook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      ctx.out.result = await result(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }



      fres = featurehook(ctx, 'PostOperation')
      if (fres instanceof Promise) { await fres }

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








  #unexpected(this: any, ctx: Context, err: any) {
    const ctrl = ctx.ctrl

    ctrl.err = err

    if (ctrl.explain) {
      const { clean, struct } = this.#utility
      const { delprop, clone } = struct

      ctx.ctrl.explain = clean(ctx, ctx.ctrl.explain)
      delprop(ctx.ctrl.explain.result, 'err')

      if (null != ctx.result && null != ctx.result.err) {
        ctrl.explain.err = clean(ctx, {
          ...clone({ err: ctx.result.err }).err,
          message: ctx.result.err.message,
          stack: ctx.result.err.stack,
        })
      }

      const cleanerr = clean(ctx, {
        ...clone({ err }).err,
        message: err.message,
        stack: err.stack,
      })

      if (null == ctrl.explain.err) {
        ctrl.explain.err = cleanerr
      }
      else if (ctrl.explain.err.message != cleanerr.message) {
        ctrl.explain.unexpected = cleanerr
      }
    }

    if (false === ctrl.throw) {
      return undefined
    }

    return err
  }

}




export {
  UserGroupEntity
}
