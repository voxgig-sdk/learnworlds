
import { getprop } from './StructUtility'


function contextify(ctxmap: Record<string, any>, basectx?: Context): any {
  const ctx = new Context()

  ctx.ctrl = getprop(ctxmap, 'ctrl', getprop(basectx, 'ctrl', {}))
  ctx.meta = getprop(ctxmap, 'meta', getprop(basectx, 'meta', {}))
  ctx.work = getprop(ctxmap, 'work', getprop(basectx, 'work', {}))

  ctx.client = getprop(ctxmap, 'client', getprop(basectx, 'client'))
  ctx.config = getprop(ctxmap, 'config', getprop(basectx, 'config'))
  ctx.entity = getprop(ctxmap, 'entity', getprop(basectx, 'entity'))
  ctx.op = getprop(ctxmap, 'op', getprop(basectx, 'op'))
  ctx.entopts = getprop(ctxmap, 'entopts', getprop(basectx, 'entopts'))
  ctx.options = getprop(ctxmap, 'options', getprop(basectx, 'options'))
  ctx.response = getprop(ctxmap, 'response', getprop(basectx, 'response'))
  ctx.result = getprop(ctxmap, 'result', getprop(basectx, 'result'))
  ctx.spec = getprop(ctxmap, 'spec', getprop(basectx, 'spec'))
  ctx.utility = getprop(ctxmap, 'utility', getprop(basectx, 'utility'))
  ctx.data = getprop(ctxmap, 'data', getprop(basectx, 'data'))
  ctx.reqdata = getprop(ctxmap, 'reqdata', getprop(basectx, 'reqdata'))
  ctx.match = getprop(ctxmap, 'match', getprop(basectx, 'match'))
  ctx.reqmatch = getprop(ctxmap, 'reqmatch', getprop(basectx, 'reqmatch'))

  return ctx
}


class Context {

  ctrl = {}
  meta = {}
  work = {}

  client = undefined
  config = undefined
  entity = undefined
  op = undefined
  entopts = undefined
  options = undefined
  response = undefined
  result = undefined
  spec = undefined
  utility = undefined
  data = undefined
  reqdata = undefined
  match = undefined
  reqmatch = undefined

  toJSON() {
    return {
      op: this.op,
      spec: this.spec,
      entity: this.entity,
      result: this.result,
      meta: this.meta,
    }
  }
}


export {
  contextify,
  Context
}
