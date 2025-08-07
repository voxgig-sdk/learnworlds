// VERSION: @voxgig/struct 0.0.4
// RUN: npm test
// RUN-SOME: npm run test-some --pattern=getpath

import { test, describe } from 'node:test'
import { equal, deepEqual } from 'node:assert'

import {
  makeRunner,
  nullModifier,
  NULLMARK,
} from '../runner'


import {
  SDK,
  TEST_JSON_FILE
} from './index'


// NOTE: tests are (mostly) in order of increasing dependence.
describe('struct', async () => {

  const runner = await makeRunner(TEST_JSON_FILE, await SDK.test())

  const { spec, runset, runsetflags, client } = await runner('struct')

  const {
    clone,
    delprop,
    escre,
    escurl,
    getelem,
    getpath,

    getprop,
    haskey,
    inject,
    isempty,
    isfunc,

    iskey,
    islist,
    ismap,
    isnode,
    items,

    joinurl,
    jsonify,
    keysof,
    merge,
    pad,
    pathify,

    select,
    size,
    slice,
    setprop,

    strkey,
    stringify,
    transform,
    typify,
    validate,

    walk,

    jo,
    ja,

  } = client.utility().struct

  const minorSpec = spec.minor
  const walkSpec = spec.walk
  const mergeSpec = spec.merge
  const getpathSpec = spec.getpath
  const injectSpec = spec.inject
  const transformSpec = spec.transform
  const validateSpec = spec.validate
  const selectSpec = spec.select


  test('exists', () => {
    equal('function', typeof clone)
    equal('function', typeof delprop)
    equal('function', typeof escre)
    equal('function', typeof escurl)
    equal('function', typeof getelem)
    equal('function', typeof getprop)

    equal('function', typeof getpath)
    equal('function', typeof haskey)
    equal('function', typeof inject)
    equal('function', typeof isempty)
    equal('function', typeof isfunc)

    equal('function', typeof iskey)
    equal('function', typeof islist)
    equal('function', typeof ismap)
    equal('function', typeof isnode)
    equal('function', typeof items)

    equal('function', typeof joinurl)
    equal('function', typeof jsonify)
    equal('function', typeof keysof)
    equal('function', typeof merge)
    equal('function', typeof pad)
    equal('function', typeof pathify)

    equal('function', typeof select)
    equal('function', typeof size)
    equal('function', typeof slice)
    equal('function', typeof setprop)

    equal('function', typeof strkey)
    equal('function', typeof stringify)
    equal('function', typeof transform)
    equal('function', typeof typify)
    equal('function', typeof validate)

    equal('function', typeof walk)
  })


  // minor tests
  // ===========

  test('minor-isnode', async () => {
    await runset(minorSpec.isnode, isnode)
  })


  test('minor-ismap', async () => {
    await runset(minorSpec.ismap, ismap)
  })


  test('minor-islist', async () => {
    await runset(minorSpec.islist, islist)
  })


  test('minor-iskey', async () => {
    await runsetflags(minorSpec.iskey, { null: false }, iskey)
  })


  test('minor-strkey', async () => {
    await runsetflags(minorSpec.strkey, { null: false }, strkey)
  })


  test('minor-isempty', async () => {
    await runsetflags(minorSpec.isempty, { null: false }, isempty)
  })


  test('minor-isfunc', async () => {
    await runset(minorSpec.isfunc, isfunc)
    function f0() { return null }
    equal(isfunc(f0), true)
    equal(isfunc(() => null), true)
  })


  test('minor-clone', async () => {
    await runsetflags(minorSpec.clone, { null: false }, clone)
    const f0 = () => null
    deepEqual({ a: f0 }, clone({ a: f0 }))
  })


  test('minor-escre', async () => {
    await runset(minorSpec.escre, escre)
  })


  test('minor-escurl', async () => {
    await runset(minorSpec.escurl, escurl)
  })


  test('minor-stringify', async () => {
    await runset(minorSpec.stringify, (vin: any) =>
      stringify((NULLMARK === vin.val ? "null" : vin.val), vin.max))
  })


  test('minor-jsonify', async () => {
    await runsetflags(minorSpec.jsonify, { null: false }, jsonify)
  })


  test('minor-pathify', async () => {
    await runsetflags(
      minorSpec.pathify, { null: true },
      (vin: any) => {
        let path = NULLMARK == vin.path ? undefined : vin.path
        let pathstr = pathify(path, vin.from).replace('__NULL__.', '')
        pathstr = NULLMARK === vin.path ? pathstr.replace('>', ':null>') : pathstr
        return pathstr
      })
  })


  test('minor-items', async () => {
    await runset(minorSpec.items, items)
  })


  test('minor-getelem', async () => {
    await runsetflags(minorSpec.getelem, { null: false }, (vin: any) =>
      null == vin.alt ? getelem(vin.val, vin.key) : getelem(vin.val, vin.key, vin.alt))
  })


  test('minor-getprop', async () => {
    await runsetflags(minorSpec.getprop, { null: false }, (vin: any) =>
      null == vin.alt ? getprop(vin.val, vin.key) : getprop(vin.val, vin.key, vin.alt))
  })


  test('minor-edge-getprop', async () => {
    let strarr = ['a', 'b', 'c', 'd', 'e']
    deepEqual(getprop(strarr, 2), 'c')
    deepEqual(getprop(strarr, '2'), 'c')

    let intarr = [2, 3, 5, 7, 11]
    deepEqual(getprop(intarr, 2), 5)
    deepEqual(getprop(intarr, '2'), 5)
  })


  test('minor-setprop', async () => {
    await runset(minorSpec.setprop, (vin: any) =>
      setprop(vin.parent, vin.key, vin.val))
  })


  test('minor-edge-setprop', async () => {
    let strarr0 = ['a', 'b', 'c', 'd', 'e']
    let strarr1 = ['a', 'b', 'c', 'd', 'e']
    deepEqual(setprop(strarr0, 2, 'C'), ['a', 'b', 'C', 'd', 'e'])
    deepEqual(setprop(strarr1, '2', 'CC'), ['a', 'b', 'CC', 'd', 'e'])

    let intarr0 = [2, 3, 5, 7, 11]
    let intarr1 = [2, 3, 5, 7, 11]
    deepEqual(setprop(intarr0, 2, 55), [2, 3, 55, 7, 11])
    deepEqual(setprop(intarr1, '2', 555), [2, 3, 555, 7, 11])
  })


  test('minor-delprop', async () => {
    await runset(minorSpec.delprop, (vin: any) =>
      delprop(vin.parent, vin.key))
  })


  test('minor-edge-delprop', async () => {
    let strarr0 = ['a', 'b', 'c', 'd', 'e']
    let strarr1 = ['a', 'b', 'c', 'd', 'e']
    deepEqual(delprop(strarr0, 2), ['a', 'b', 'd', 'e'])
    deepEqual(delprop(strarr1, '2'), ['a', 'b', 'd', 'e'])

    let intarr0 = [2, 3, 5, 7, 11]
    let intarr1 = [2, 3, 5, 7, 11]
    deepEqual(delprop(intarr0, 2), [2, 3, 7, 11])
    deepEqual(delprop(intarr1, '2'), [2, 3, 7, 11])
  })


  test('minor-haskey', async () => {
    await runsetflags(minorSpec.haskey, { null: false }, (vin: any) =>
      haskey(vin.src, vin.key))
  })


  test('minor-keysof', async () => {
    await runset(minorSpec.keysof, keysof)
  })


  test('minor-joinurl', async () => {
    await runsetflags(minorSpec.joinurl, { null: false }, joinurl)
  })


  test('minor-typify', async () => {
    await runsetflags(minorSpec.typify, { null: false }, typify)
  })


  test('minor-size', async () => {
    await runsetflags(minorSpec.size, { null: false }, size)
  })


  test('minor-slice', async () => {
    await runsetflags(minorSpec.slice, { null: false },
      (vin: any) => slice(vin.val, vin.start, vin.end))
  })


  test('minor-pad', async () => {
    await runsetflags(minorSpec.pad, { null: false },
      (vin: any) => pad(vin.val, vin.pad, vin.char))
  })



  // walk tests
  // ==========

  test('walk-log', async () => {
    const test = clone(walkSpec.log)

    const log: string[] = []

    function walklog(key: any, val: any, parent: any, path: any) {
      log.push('k=' + stringify(key) +
        ', v=' + stringify(val) +
        ', p=' + stringify(parent) +
        ', t=' + pathify(path))
      return val
    }

    walk(test.in, walklog)
    deepEqual(log, test.out)
  })


  test('walk-basic', async () => {
    function walkpath(_key: any, val: any, _parent: any, path: any) {
      return 'string' === typeof val ? val + '~' + path.join('.') : val
    }

    await runset(walkSpec.basic, (vin: any) => walk(vin, walkpath))
  })


  // merge tests
  // ===========

  test('merge-basic', async () => {
    const test = clone(mergeSpec.basic)
    deepEqual(merge(test.in), test.out)
  })


  test('merge-cases', async () => {
    await runset(mergeSpec.cases, merge)
  })


  test('merge-array', async () => {
    await runset(mergeSpec.array, merge)
  })


  test('merge-integrity', async () => {
    await runset(mergeSpec.integrity, merge)
  })


  test('merge-special', async () => {
    const f0 = () => null
    deepEqual(merge([f0]), f0)
    deepEqual(merge([null, f0]), f0)
    deepEqual(merge([{ a: f0 }]), { a: f0 })
    deepEqual(merge([[f0]]), [f0])
    deepEqual(merge([{ a: { b: f0 } }]), { a: { b: f0 } })

    // JavaScript only
    deepEqual(merge([{ a: global.fetch }]), { a: global.fetch })
    deepEqual(merge([[global.fetch]]), [global.fetch])
    deepEqual(merge([{ a: { b: global.fetch } }]), { a: { b: global.fetch } })
  })


  // getpath tests
  // =============

  test('getpath-basic', async () => {
    await runset(getpathSpec.basic, (vin: any) => getpath(vin.store, vin.path))
  })


  test('getpath-relative', async () => {
    await runset(getpathSpec.relative, (vin: any) =>
      getpath(vin.store, vin.path, { dparent: vin.dparent, dpath: vin.dpath?.split('.') }))
  })


  test('getpath-special', async () => {
    await runset(getpathSpec.special, (vin: any) =>
      getpath(vin.store, vin.path, vin.inj))
  })


  test('getpath-handler', async () => {
    await runset(getpathSpec.handler, (vin: any) =>
      getpath(
        {
          $TOP: vin.store,
          $FOO: () => 'foo',
        },
        vin.path,
        {
          handler: (_inj: any, val: any, _cur: any, _ref: any) => {
            return val()
          }
        }
      ))
  })


  // inject tests
  // ============

  test('inject-basic', async () => {
    const test = clone(injectSpec.basic)
    deepEqual(inject(test.in.val, test.in.store), test.out)
  })


  test('inject-string', async () => {
    await runset(injectSpec.string, (vin: any) =>
      inject(vin.val, vin.store, { modify: nullModifier }))
  })


  test('inject-deep', async () => {
    await runset(injectSpec.deep, (vin: any) => inject(vin.val, vin.store))
  })


  // transform tests
  // ===============

  test('transform-basic', async () => {
    const test = clone(transformSpec.basic)
    deepEqual(transform(test.in.data, test.in.spec), test.out)
  })


  test('transform-paths', async () => {
    await runset(transformSpec.paths, (vin: any) =>
      transform(vin.data, vin.spec))
  })


  test('transform-cmds', async () => {
    await runset(transformSpec.cmds, (vin: any) =>
      transform(vin.data, vin.spec))
  })


  test('transform-each', async () => {
    await runset(transformSpec.each, (vin: any) =>
      transform(vin.data, vin.spec))
  })


  test('transform-pack', async () => {
    await runset(transformSpec.pack, (vin: any) =>
      transform(vin.data, vin.spec))
  })


  test('transform-ref', async () => {
    await runset(transformSpec.ref, (vin: any) =>
      transform(vin.data, vin.spec))
  })


  test('transform-modify', async () => {
    await runset(transformSpec.modify, (vin: any) =>
      transform(
        vin.data,
        vin.spec,
        {
          modify: (val: any, key: any, parent: any) => {
            if (null != key && null != parent && 'string' === typeof val) {
              val = parent[key] = '@' + val
            }
          }
        }
      ))
  })


  test('transform-extra', async () => {
    deepEqual(transform(
      { a: 1 },
      { x: '`a`', b: '`$COPY`', c: '`$UPPER`' },
      {
        extra: {
          b: 2, $UPPER: (state: any) => {
            const { path } = state
            return ('' + getprop(path, path.length - 1)).toUpperCase()
          }
        }
      }
    ), {
      x: 1,
      b: 2,
      c: 'C'
    })
  })


  test('transform-funcval', async () => {
    // f0 should never be called (no $ prefix).
    const f0 = () => 99
    deepEqual(transform({}, { x: 1 }), { x: 1 })
    deepEqual(transform({}, { x: f0 }), { x: f0 })
    deepEqual(transform({ a: 1 }, { x: '`a`' }), { x: 1 })
    deepEqual(transform({ f0 }, { x: '`f0`' }), { x: f0 })
  })


  // validate tests
  // ===============

  test('validate-basic', async () => {
    await runset(validateSpec.basic, (vin: any) => validate(vin.data, vin.spec))
  })


  test('validate-child', async () => {
    await runset(validateSpec.child, (vin: any) => validate(vin.data, vin.spec))
  })


  test('validate-one', async () => {
    await runset(validateSpec.one, (vin: any) => validate(vin.data, vin.spec))
  })


  test('validate-exact', async () => {
    await runset(validateSpec.exact, (vin: any) => validate(vin.data, vin.spec))
  })


  test('validate-invalid', async () => {
    await runsetflags(validateSpec.invalid, { null: false },
      (vin: any) => validate(vin.data, vin.spec))
  })


  test('validate-special', async () => {
    await runset(validateSpec.special, (vin: any) => validate(vin.data, vin.spec, vin.inj))
  })


  test('validate-custom', async () => {
    const errs: any[] = []
    const extra = {
      $INTEGER: (inj: any) => {
        const { key } = inj
        // let out = getprop(current, key)
        let out = getprop(inj.dparent, key)

        let t = typeof out
        if ('number' !== t && !Number.isInteger(out)) {
          inj.errs.push('Not an integer at ' + inj.path.slice(1).join('.') + ': ' + out)
          return
        }

        return out
      },
    }

    const shape = { a: '`$INTEGER`' }

    let out = validate({ a: 1 }, shape, { extra, errs })
    deepEqual(out, { a: 1 })
    equal(errs.length, 0)

    out = validate({ a: 'A' }, shape, { extra, errs })
    deepEqual(out, { a: 'A' })
    deepEqual(errs, ['Not an integer at a: A'])
  })


  // select tests
  // ============

  test('select-basic', async () => {
    await runset(selectSpec.basic, (vin: any) => select(vin.obj, vin.query))
  })


  test('select-operators', async () => {
    await runset(selectSpec.operators, (vin: any) => select(vin.obj, vin.query))
  })


  test('select-edge', async () => {
    await runset(selectSpec.edge, (vin: any) => select(vin.obj, vin.query))
  })


  // JSON Builder
  // ============

  test('json-builder', async () => {
    equal(jsonify(jo(
      'a', 1
    )), `{
  "a": 1
}`)

    equal(jsonify(ja(
      'b', 2
    )), `[
  "b",
  2
]`)

    equal(jsonify(jo(
      'c', 'C',
      'd', jo('x', true),
      'e', ja(null, false)
    )), `{
  "c": "C",
  "d": {
    "x": true
  },
  "e": [
    null,
    false
  ]
}`)

    equal(jsonify(ja(
      3.3, jo(
        'f', true,
        'g', false,
        'h', null,
        'i', ja('y', 0),
        'j', jo('z', -1),
        'k')
    )), `[
  3.3,
  {
    "f": true,
    "g": false,
    "h": null,
    "i": [
      "y",
      0
    ],
    "j": {
      "z": -1
    },
    "k": null
  }
]`)

    equal(jsonify(jo(
      true, 1,
      false, 2,
      null, 3,
      ['a'], 4,
      { 'b': 0 }, 5
    )), `{
  "true": 1,
  "false": 2,
  "null": 3,
  "[a]": 4,
  "{b:0}": 5
}`)

  })


})
