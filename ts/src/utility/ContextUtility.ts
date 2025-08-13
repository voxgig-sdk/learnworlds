
import { inspect } from 'node:util'

import { LearnworldsSDK } from '../LearnworldsSDK'

import { Utility } from './Utility'

import { getprop } from './StructUtility'


import type {
  Operation,
  Spec,
  Response,
  Result,
} from '../types'


function contextify(ctxmap: Record<string, any>, basectx?: Context): any {
  const ctx = new Context(ctxmap, basectx)
  return ctx
}


class Context {

  id = 'C' + ('' + Math.random()).substring(2, 10)

  // Store the output of each operation step.
  out: Record<string, any> = {}

  // Store for the current operation.
  current: WeakMap<String, any> = new WeakMap()


  ctrl: Record<string, any> = {}
  meta: Record<string, any> = {}

  client: LearnworldsSDK
  utility: Utility

  op: Operation

  config: Record<string, any>
  entopts: Record<string, any>
  options: Record<string, any>

  response?: Response
  result?: Result
  spec?: Spec

  data?: any
  reqdata?: any
  match?: any
  reqmatch?: any

  entity?: any

  // Shared persistent store.
  shared: WeakMap<String, any>




  constructor(ctxmap: Record<string, any>, basectx?: Context) {
    this.client = getprop(ctxmap, 'client', getprop(basectx, 'client'))
    this.utility = getprop(ctxmap, 'utility', getprop(basectx, 'utility'))

    this.ctrl = getprop(ctxmap, 'ctrl', getprop(basectx, 'ctrl', this.ctrl))
    this.meta = getprop(ctxmap, 'meta', getprop(basectx, 'meta', this.meta))

    this.op = getprop(ctxmap, 'op', getprop(basectx, 'op'))

    this.config = getprop(ctxmap, 'config', getprop(basectx, 'config'))
    this.entopts = getprop(ctxmap, 'entopts', getprop(basectx, 'entopts'))
    this.options = getprop(ctxmap, 'options', getprop(basectx, 'options'))

    this.entity = getprop(ctxmap, 'entity', getprop(basectx, 'entity'))
    this.shared = getprop(ctxmap, 'sharedd', getprop(basectx, 'shared'))

    // this.data = getprop(ctxmap, 'data', getprop(basectx, 'data'))
    // this.match = getprop(ctxmap, 'match', getprop(basectx, 'match'))

    this.data = getprop(ctxmap, 'data')
    this.reqdata = getprop(ctxmap, 'reqdata')
    this.match = getprop(ctxmap, 'match')
    this.reqmatch = getprop(ctxmap, 'reqmatch')
  }


  toJSON() {
    return {
      id: this.id,
      op: this.op,
      spec: this.spec,
      entity: this.entity,
      result: this.result,
      meta: this.meta,
    }
  }

  toString() {
    return 'Context ' + (this as any).utility?.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}


export {
  contextify,
  Context
}
