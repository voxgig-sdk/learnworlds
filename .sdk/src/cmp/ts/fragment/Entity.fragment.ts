
import { inspect } from 'node:util'

import {
  SdkNameSDK,
  SdkNameEntity,
} from '../SdkNameSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'


class EntityNameEntity {
  #client: SdkNameSDK
  #entopts: any
  #utility: any
  #data: any
  #match: any

  _entctx: Context

  constructor(client: SdkNameSDK, entopts: any) {
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
    return new EntityNameEntity(this.#client, this.entopts())
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
    return { ...(this.#data || {}), _entity: 'EntityName' }
  }

  toString() {
    return 'EntityName ' + this.#utility.struct.jsonify(this.#data)
  }

  [inspect.custom]() {
    return this.toString()
  }


  // #LoadOp

  // #ListOp

  // #CreateOp

  // #UpdateOp

  // #RemoveOp






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
  EntityNameEntity
}
