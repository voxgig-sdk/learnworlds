
import type { Context, FeatureOptions } from '../../types'
import type { ProjectNameSDK } from '../../ProjectNameSDK'

import { BaseFeature } from '../base/BaseFeature'


class TestFeature extends BaseFeature {
  version = '0.0.1'
  name = 'test'
  active = true

  _client?: ProjectNameSDK
  _options?: any


  init(ctx: Context, options: FeatureOptions): void | Promise<any> {
    this._client = ctx.client
    this._options = options

    // console.log('TEST FEATURE', this._options)

    const { struct } = ctx.utility
    const { walk, size, setprop, stringify } = struct

    const entity = this._options.entity

    this._client._mode = 'test'

    // Set entity ids to correct values
    walk(entity, (k: any, v: any, parent: any, path: any) => {
      if (2 === size(path)) {
        setprop(v, 'id', k)
      }
      return v
    })

    ctx.utility.fetcher = (ctx: any, _fullurl: string, _fetchdef: any) => {
      const { findparam, struct } = ctx.utility
      const { getprop, clone, merge, keysof, size, select, delprop } = struct


      function respond(status: number, data?: any, res?: any) {
        const out = merge([
          {
            status,
            statusText: 'OK',
            json: async () => data,
          },
          res || {}
        ])

        const headers: any = out.headers || {}
        out.headers = {
          forEach(callback: any) {
            Object.keys(headers).forEach((key) => {
              callback(headers[key], key, this)
            })
          }
        }

        return out
      }


      const op = ctx.op
      const entmap = getprop(entity, op.entity, {})

      const qand: any[] = []
      const q = { '`$AND`': qand }

      for (let k of keysof(ctx.reqmatch)) {
        const v = findparam(ctx, k)
        const ka = getprop(op.alias, k)

        let qor: any = [{ [k]: v }]
        if (null != ka) {
          qor.push({ [ka]: v })
        }

        qor = { '`$OR`': qor }

        qand.push(qor)
      }

      if (ctx.ctrl.explain) {
        ctx.ctrl.explain.test = { query: q }
      }

      if ('load' === op.name) {
        const found = select(entmap, q)
        const ent = found[0]
        if (null == ent) {
          return respond(404, undefined, { statusText: 'Not found' })
        }
        else {
          delprop(ent, '$KEY')
          return respond(200, clone(ent))
        }
      }
      else if ('list' === op.name) {
        const found = select(entmap, q)
        if (null == found) {
          return respond(404, undefined, { statusText: 'Not found' })
        }
        else {
          found.map((ent: any) => delprop(ent, '$KEY'))
          return respond(200, clone(found))
        }
      }
      else if ('update' === op.name) {
        const found = select(entmap, q)
        const ent = found[0]
        if (null == ent) {
          return respond(404, undefined, { statusText: 'Not found' })
        }
        else {
          merge([ent, (ctx.reqdata || {})])
          delprop(ent, '$KEY')
          return respond(200, clone(ent))
        }
      }
      else if ('remove' === op.name) {
        const found = select(entmap, q)
        const ent = found[0]
        if (null == ent) {
          return respond(404, undefined, { statusText: 'Not found' })
        }
        else {
          delprop(entmap, getprop(ent, 'id'))
          return respond(200)
        }
      }
      else if ('create' === op.name) {
        const id = findparam(ctx, 'id')
        if (null != id) {
          const ent = clone(ctx.reqdata)
          ent.id = id
          setprop(entmap, 'id', ent)
          delprop(ent, '$KEY')
          return respond(200, clone(ent))
        }
        else {
          return respond(400, undefined, { statusText: 'Missing id' })
        }
      }
    }
  }
}




export {
  TestFeature
}



