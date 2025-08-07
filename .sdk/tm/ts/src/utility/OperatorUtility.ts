
import { Context, Operation } from '../types'

import { getprop } from './StructUtility'


const OPKIND: any = {
  create: 'req',
  update: 'req',
  remove: 'req',
  load: 'res',
  list: 'res',
}


function opify(opmap: Record<string, any>) {

  const validate = getprop(opmap, 'validate', {})

  const op: Operation = {
    name: getprop(opmap, 'name', '_'),
    kind: getprop(opmap, 'kind', '_'),
    path: getprop(opmap, 'path', '_'),
    pathalt: getprop(opmap, 'pathalt', []),
    entity: getprop(opmap, 'entity', '_'),
    reqform: getprop(opmap, 'reqform', '_'),
    resform: getprop(opmap, 'resform', '_'),
    validate: {
      params: getprop(validate, 'params', { '`$OPEN`': true }),
    },

    params: getprop(opmap, 'params', []),
    alias: getprop(opmap, 'alias', {}),
    state: getprop(opmap, 'state', {}),
    check: getprop(opmap, 'check', {}),
  }

  return op
}


// Ensure standard operation definition.
function operator(ctx: Context): Operation {
  const { op, utility } = ctx
  const { validate } = utility.struct

  const opspec = {

    // Required.
    name: '`$STRING`',
    kind: ['`$ONE`', 'req', 'res'],
    path: '`$STRING`',
    entity: '`$STRING`',
    reqform: ['`$ONE`', '`$STRING`', '`$OBJECT`', '`$ARRAY`', '`$FUNCTION`'],
    resform: ['`$ONE`', '`$STRING`', '`$OBJECT`', '`$ARRAY`', '`$FUNCTION`'],
    validate: {
      params: '`$OBJECT`'
    },

    // Optional.
    pathalt: ['`$CHILD`', {
      path: '`$STRING`',
      '`$OPEN`': true,
      // '`$CHILD`': '`$BOOLEAN`'
    }],
    params: ['`$CHILD`', '`$STRING`'],
    alias: { '`$CHILD`': '`$STRING`' },
    state: {},
    check: {},
  }

  ctx.op.kind = OPKIND[op.name]

  const opv = ctx.op.validate
  ctx.op = validate(ctx.op, opspec)

  ctx.op.validate = opv

  if (ctx.ctrl.explain) {
    ctx.ctrl.explain.op = ctx.op
  }

  return ctx.op
}


export {
  opify,
  operator,
}
