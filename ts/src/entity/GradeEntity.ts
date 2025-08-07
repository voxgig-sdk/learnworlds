
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


class GradeEntity {
  #client: LearnworldsSDK
  #entopts: any
  #utility: any
  #data: any
  #match: any

  #_basectx: any

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
    this.#_basectx = contextify({
      entity: this,
      client,
      utility: this.#utility,
      entopts,
      options: client.options()
    })

    const featurehook = this.#utility.featurehook
    featurehook(this.#_basectx, 'PostConstructEntity')
  }

  entopts() {
    return { ...this.#entopts }
  }

  client() {
    return this.#client
  }

  make() {
    return new GradeEntity(this.#client, this.entopts())
  }


  data(this: any, data?: any) {
    const featurehook = this.#utility.featurehook
    const ctx = this.#_basectx

    if (null != data) {
      featurehook(ctx, 'SetData')
      this.#data = { ...data }
    }

    let out = { ...this.#data }

    featurehook(ctx, 'GetData')
    return out
  }


  match(match?: any) {
    const featurehook = this.#utility.featurehook
    const ctx = this.#_basectx

    if (null != match) {
      featurehook(ctx, 'SetMatch')
      this.#match = { ...match }
    }

    let out = { ...this.#match }

    featurehook(ctx, 'GetMatch')
    return out
  }


  toString() {
    return 'Grade ' + this.#utility.struct.jsonify(this.#data)
  }

  [inspect.custom]() {
    return this.toString()
  }




  async list(this: any, reqmatch?: any, ctrl?: Control) {
    let entity = this
    let client = this.#client
    const utility = this.#utility
    const {
      operator, spec, request, response, result, done, contextify, opify, featurehook
    } = utility

    let fres: Promise<any> | undefined = undefined

    let op: Operation = opify({
      entity: 'grade',
      name: 'list',
      path: '/v2/courses/{course_id}/grades',
      pathalt: [{"path":"/v2/courses/{course_id}/grades","course_id":true}],
      params: [
  "course_id"
],
      alias: {},
      state: {},
      reqform: "`body`",
      resform: "`body.data`",
      validate: { "params": { "course_id": "`$STRING`", "Lw-Client": "`$STRING`", "Authorization": "`$STRING`" } },
    })

    let ctx: Context = contextify({
      ctrl,
      op,
      match: this.#match,
      data: this.#data,
      reqmatch
    }, this.#_basectx)

    try {


      fres = featurehook(ctx, 'PreOperation')
      if (fres instanceof Promise) { await fres }

      operator(ctx)



      fres = featurehook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      spec(ctx)



      fres = featurehook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      await request(ctx)



      fres = featurehook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      await response(ctx)



      fres = featurehook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      result(ctx)



      fres = featurehook(ctx, 'PostOperation')
      if (fres instanceof Promise) { await fres }

      if (null != ctx.result.resmatch) {
        this.#match = ctx.result.resmatch
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
  GradeEntity
}
