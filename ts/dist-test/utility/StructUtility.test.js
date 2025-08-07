"use strict";
// VERSION: @voxgig/struct 0.0.4
// RUN: npm test
// RUN-SOME: npm run test-some --pattern=getpath
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const runner_1 = require("../runner");
const index_1 = require("./index");
// NOTE: tests are (mostly) in order of increasing dependence.
(0, node_test_1.describe)('struct', async () => {
    const runner = await (0, runner_1.makeRunner)(index_1.TEST_JSON_FILE, await index_1.SDK.test());
    const { spec, runset, runsetflags, client } = await runner('struct');
    const { clone, delprop, escre, escurl, getelem, getpath, getprop, haskey, inject, isempty, isfunc, iskey, islist, ismap, isnode, items, joinurl, jsonify, keysof, merge, pad, pathify, select, size, slice, setprop, strkey, stringify, transform, typify, validate, walk, jo, ja, } = client.utility().struct;
    const minorSpec = spec.minor;
    const walkSpec = spec.walk;
    const mergeSpec = spec.merge;
    const getpathSpec = spec.getpath;
    const injectSpec = spec.inject;
    const transformSpec = spec.transform;
    const validateSpec = spec.validate;
    const selectSpec = spec.select;
    (0, node_test_1.test)('exists', () => {
        (0, node_assert_1.equal)('function', typeof clone);
        (0, node_assert_1.equal)('function', typeof delprop);
        (0, node_assert_1.equal)('function', typeof escre);
        (0, node_assert_1.equal)('function', typeof escurl);
        (0, node_assert_1.equal)('function', typeof getelem);
        (0, node_assert_1.equal)('function', typeof getprop);
        (0, node_assert_1.equal)('function', typeof getpath);
        (0, node_assert_1.equal)('function', typeof haskey);
        (0, node_assert_1.equal)('function', typeof inject);
        (0, node_assert_1.equal)('function', typeof isempty);
        (0, node_assert_1.equal)('function', typeof isfunc);
        (0, node_assert_1.equal)('function', typeof iskey);
        (0, node_assert_1.equal)('function', typeof islist);
        (0, node_assert_1.equal)('function', typeof ismap);
        (0, node_assert_1.equal)('function', typeof isnode);
        (0, node_assert_1.equal)('function', typeof items);
        (0, node_assert_1.equal)('function', typeof joinurl);
        (0, node_assert_1.equal)('function', typeof jsonify);
        (0, node_assert_1.equal)('function', typeof keysof);
        (0, node_assert_1.equal)('function', typeof merge);
        (0, node_assert_1.equal)('function', typeof pad);
        (0, node_assert_1.equal)('function', typeof pathify);
        (0, node_assert_1.equal)('function', typeof select);
        (0, node_assert_1.equal)('function', typeof size);
        (0, node_assert_1.equal)('function', typeof slice);
        (0, node_assert_1.equal)('function', typeof setprop);
        (0, node_assert_1.equal)('function', typeof strkey);
        (0, node_assert_1.equal)('function', typeof stringify);
        (0, node_assert_1.equal)('function', typeof transform);
        (0, node_assert_1.equal)('function', typeof typify);
        (0, node_assert_1.equal)('function', typeof validate);
        (0, node_assert_1.equal)('function', typeof walk);
    });
    // minor tests
    // ===========
    (0, node_test_1.test)('minor-isnode', async () => {
        await runset(minorSpec.isnode, isnode);
    });
    (0, node_test_1.test)('minor-ismap', async () => {
        await runset(minorSpec.ismap, ismap);
    });
    (0, node_test_1.test)('minor-islist', async () => {
        await runset(minorSpec.islist, islist);
    });
    (0, node_test_1.test)('minor-iskey', async () => {
        await runsetflags(minorSpec.iskey, { null: false }, iskey);
    });
    (0, node_test_1.test)('minor-strkey', async () => {
        await runsetflags(minorSpec.strkey, { null: false }, strkey);
    });
    (0, node_test_1.test)('minor-isempty', async () => {
        await runsetflags(minorSpec.isempty, { null: false }, isempty);
    });
    (0, node_test_1.test)('minor-isfunc', async () => {
        await runset(minorSpec.isfunc, isfunc);
        function f0() { return null; }
        (0, node_assert_1.equal)(isfunc(f0), true);
        (0, node_assert_1.equal)(isfunc(() => null), true);
    });
    (0, node_test_1.test)('minor-clone', async () => {
        await runsetflags(minorSpec.clone, { null: false }, clone);
        const f0 = () => null;
        (0, node_assert_1.deepEqual)({ a: f0 }, clone({ a: f0 }));
    });
    (0, node_test_1.test)('minor-escre', async () => {
        await runset(minorSpec.escre, escre);
    });
    (0, node_test_1.test)('minor-escurl', async () => {
        await runset(minorSpec.escurl, escurl);
    });
    (0, node_test_1.test)('minor-stringify', async () => {
        await runset(minorSpec.stringify, (vin) => stringify((runner_1.NULLMARK === vin.val ? "null" : vin.val), vin.max));
    });
    (0, node_test_1.test)('minor-jsonify', async () => {
        await runsetflags(minorSpec.jsonify, { null: false }, jsonify);
    });
    (0, node_test_1.test)('minor-pathify', async () => {
        await runsetflags(minorSpec.pathify, { null: true }, (vin) => {
            let path = runner_1.NULLMARK == vin.path ? undefined : vin.path;
            let pathstr = pathify(path, vin.from).replace('__NULL__.', '');
            pathstr = runner_1.NULLMARK === vin.path ? pathstr.replace('>', ':null>') : pathstr;
            return pathstr;
        });
    });
    (0, node_test_1.test)('minor-items', async () => {
        await runset(minorSpec.items, items);
    });
    (0, node_test_1.test)('minor-getelem', async () => {
        await runsetflags(minorSpec.getelem, { null: false }, (vin) => null == vin.alt ? getelem(vin.val, vin.key) : getelem(vin.val, vin.key, vin.alt));
    });
    (0, node_test_1.test)('minor-getprop', async () => {
        await runsetflags(minorSpec.getprop, { null: false }, (vin) => null == vin.alt ? getprop(vin.val, vin.key) : getprop(vin.val, vin.key, vin.alt));
    });
    (0, node_test_1.test)('minor-edge-getprop', async () => {
        let strarr = ['a', 'b', 'c', 'd', 'e'];
        (0, node_assert_1.deepEqual)(getprop(strarr, 2), 'c');
        (0, node_assert_1.deepEqual)(getprop(strarr, '2'), 'c');
        let intarr = [2, 3, 5, 7, 11];
        (0, node_assert_1.deepEqual)(getprop(intarr, 2), 5);
        (0, node_assert_1.deepEqual)(getprop(intarr, '2'), 5);
    });
    (0, node_test_1.test)('minor-setprop', async () => {
        await runset(minorSpec.setprop, (vin) => setprop(vin.parent, vin.key, vin.val));
    });
    (0, node_test_1.test)('minor-edge-setprop', async () => {
        let strarr0 = ['a', 'b', 'c', 'd', 'e'];
        let strarr1 = ['a', 'b', 'c', 'd', 'e'];
        (0, node_assert_1.deepEqual)(setprop(strarr0, 2, 'C'), ['a', 'b', 'C', 'd', 'e']);
        (0, node_assert_1.deepEqual)(setprop(strarr1, '2', 'CC'), ['a', 'b', 'CC', 'd', 'e']);
        let intarr0 = [2, 3, 5, 7, 11];
        let intarr1 = [2, 3, 5, 7, 11];
        (0, node_assert_1.deepEqual)(setprop(intarr0, 2, 55), [2, 3, 55, 7, 11]);
        (0, node_assert_1.deepEqual)(setprop(intarr1, '2', 555), [2, 3, 555, 7, 11]);
    });
    (0, node_test_1.test)('minor-delprop', async () => {
        await runset(minorSpec.delprop, (vin) => delprop(vin.parent, vin.key));
    });
    (0, node_test_1.test)('minor-edge-delprop', async () => {
        let strarr0 = ['a', 'b', 'c', 'd', 'e'];
        let strarr1 = ['a', 'b', 'c', 'd', 'e'];
        (0, node_assert_1.deepEqual)(delprop(strarr0, 2), ['a', 'b', 'd', 'e']);
        (0, node_assert_1.deepEqual)(delprop(strarr1, '2'), ['a', 'b', 'd', 'e']);
        let intarr0 = [2, 3, 5, 7, 11];
        let intarr1 = [2, 3, 5, 7, 11];
        (0, node_assert_1.deepEqual)(delprop(intarr0, 2), [2, 3, 7, 11]);
        (0, node_assert_1.deepEqual)(delprop(intarr1, '2'), [2, 3, 7, 11]);
    });
    (0, node_test_1.test)('minor-haskey', async () => {
        await runsetflags(minorSpec.haskey, { null: false }, (vin) => haskey(vin.src, vin.key));
    });
    (0, node_test_1.test)('minor-keysof', async () => {
        await runset(minorSpec.keysof, keysof);
    });
    (0, node_test_1.test)('minor-joinurl', async () => {
        await runsetflags(minorSpec.joinurl, { null: false }, joinurl);
    });
    (0, node_test_1.test)('minor-typify', async () => {
        await runsetflags(minorSpec.typify, { null: false }, typify);
    });
    (0, node_test_1.test)('minor-size', async () => {
        await runsetflags(minorSpec.size, { null: false }, size);
    });
    (0, node_test_1.test)('minor-slice', async () => {
        await runsetflags(minorSpec.slice, { null: false }, (vin) => slice(vin.val, vin.start, vin.end));
    });
    (0, node_test_1.test)('minor-pad', async () => {
        await runsetflags(minorSpec.pad, { null: false }, (vin) => pad(vin.val, vin.pad, vin.char));
    });
    // walk tests
    // ==========
    (0, node_test_1.test)('walk-log', async () => {
        const test = clone(walkSpec.log);
        const log = [];
        function walklog(key, val, parent, path) {
            log.push('k=' + stringify(key) +
                ', v=' + stringify(val) +
                ', p=' + stringify(parent) +
                ', t=' + pathify(path));
            return val;
        }
        walk(test.in, walklog);
        (0, node_assert_1.deepEqual)(log, test.out);
    });
    (0, node_test_1.test)('walk-basic', async () => {
        function walkpath(_key, val, _parent, path) {
            return 'string' === typeof val ? val + '~' + path.join('.') : val;
        }
        await runset(walkSpec.basic, (vin) => walk(vin, walkpath));
    });
    // merge tests
    // ===========
    (0, node_test_1.test)('merge-basic', async () => {
        const test = clone(mergeSpec.basic);
        (0, node_assert_1.deepEqual)(merge(test.in), test.out);
    });
    (0, node_test_1.test)('merge-cases', async () => {
        await runset(mergeSpec.cases, merge);
    });
    (0, node_test_1.test)('merge-array', async () => {
        await runset(mergeSpec.array, merge);
    });
    (0, node_test_1.test)('merge-integrity', async () => {
        await runset(mergeSpec.integrity, merge);
    });
    (0, node_test_1.test)('merge-special', async () => {
        const f0 = () => null;
        (0, node_assert_1.deepEqual)(merge([f0]), f0);
        (0, node_assert_1.deepEqual)(merge([null, f0]), f0);
        (0, node_assert_1.deepEqual)(merge([{ a: f0 }]), { a: f0 });
        (0, node_assert_1.deepEqual)(merge([[f0]]), [f0]);
        (0, node_assert_1.deepEqual)(merge([{ a: { b: f0 } }]), { a: { b: f0 } });
        // JavaScript only
        (0, node_assert_1.deepEqual)(merge([{ a: global.fetch }]), { a: global.fetch });
        (0, node_assert_1.deepEqual)(merge([[global.fetch]]), [global.fetch]);
        (0, node_assert_1.deepEqual)(merge([{ a: { b: global.fetch } }]), { a: { b: global.fetch } });
    });
    // getpath tests
    // =============
    (0, node_test_1.test)('getpath-basic', async () => {
        await runset(getpathSpec.basic, (vin) => getpath(vin.store, vin.path));
    });
    (0, node_test_1.test)('getpath-relative', async () => {
        await runset(getpathSpec.relative, (vin) => getpath(vin.store, vin.path, { dparent: vin.dparent, dpath: vin.dpath?.split('.') }));
    });
    (0, node_test_1.test)('getpath-special', async () => {
        await runset(getpathSpec.special, (vin) => getpath(vin.store, vin.path, vin.inj));
    });
    (0, node_test_1.test)('getpath-handler', async () => {
        await runset(getpathSpec.handler, (vin) => getpath({
            $TOP: vin.store,
            $FOO: () => 'foo',
        }, vin.path, {
            handler: (_inj, val, _cur, _ref) => {
                return val();
            }
        }));
    });
    // inject tests
    // ============
    (0, node_test_1.test)('inject-basic', async () => {
        const test = clone(injectSpec.basic);
        (0, node_assert_1.deepEqual)(inject(test.in.val, test.in.store), test.out);
    });
    (0, node_test_1.test)('inject-string', async () => {
        await runset(injectSpec.string, (vin) => inject(vin.val, vin.store, { modify: runner_1.nullModifier }));
    });
    (0, node_test_1.test)('inject-deep', async () => {
        await runset(injectSpec.deep, (vin) => inject(vin.val, vin.store));
    });
    // transform tests
    // ===============
    (0, node_test_1.test)('transform-basic', async () => {
        const test = clone(transformSpec.basic);
        (0, node_assert_1.deepEqual)(transform(test.in.data, test.in.spec), test.out);
    });
    (0, node_test_1.test)('transform-paths', async () => {
        await runset(transformSpec.paths, (vin) => transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-cmds', async () => {
        await runset(transformSpec.cmds, (vin) => transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-each', async () => {
        await runset(transformSpec.each, (vin) => transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-pack', async () => {
        await runset(transformSpec.pack, (vin) => transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-ref', async () => {
        await runset(transformSpec.ref, (vin) => transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-modify', async () => {
        await runset(transformSpec.modify, (vin) => transform(vin.data, vin.spec, {
            modify: (val, key, parent) => {
                if (null != key && null != parent && 'string' === typeof val) {
                    val = parent[key] = '@' + val;
                }
            }
        }));
    });
    (0, node_test_1.test)('transform-extra', async () => {
        (0, node_assert_1.deepEqual)(transform({ a: 1 }, { x: '`a`', b: '`$COPY`', c: '`$UPPER`' }, {
            extra: {
                b: 2, $UPPER: (state) => {
                    const { path } = state;
                    return ('' + getprop(path, path.length - 1)).toUpperCase();
                }
            }
        }), {
            x: 1,
            b: 2,
            c: 'C'
        });
    });
    (0, node_test_1.test)('transform-funcval', async () => {
        // f0 should never be called (no $ prefix).
        const f0 = () => 99;
        (0, node_assert_1.deepEqual)(transform({}, { x: 1 }), { x: 1 });
        (0, node_assert_1.deepEqual)(transform({}, { x: f0 }), { x: f0 });
        (0, node_assert_1.deepEqual)(transform({ a: 1 }, { x: '`a`' }), { x: 1 });
        (0, node_assert_1.deepEqual)(transform({ f0 }, { x: '`f0`' }), { x: f0 });
    });
    // validate tests
    // ===============
    (0, node_test_1.test)('validate-basic', async () => {
        await runset(validateSpec.basic, (vin) => validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-child', async () => {
        await runset(validateSpec.child, (vin) => validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-one', async () => {
        await runset(validateSpec.one, (vin) => validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-exact', async () => {
        await runset(validateSpec.exact, (vin) => validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-invalid', async () => {
        await runsetflags(validateSpec.invalid, { null: false }, (vin) => validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-special', async () => {
        await runset(validateSpec.special, (vin) => validate(vin.data, vin.spec, vin.inj));
    });
    (0, node_test_1.test)('validate-custom', async () => {
        const errs = [];
        const extra = {
            $INTEGER: (inj) => {
                const { key } = inj;
                // let out = getprop(current, key)
                let out = getprop(inj.dparent, key);
                let t = typeof out;
                if ('number' !== t && !Number.isInteger(out)) {
                    inj.errs.push('Not an integer at ' + inj.path.slice(1).join('.') + ': ' + out);
                    return;
                }
                return out;
            },
        };
        const shape = { a: '`$INTEGER`' };
        let out = validate({ a: 1 }, shape, { extra, errs });
        (0, node_assert_1.deepEqual)(out, { a: 1 });
        (0, node_assert_1.equal)(errs.length, 0);
        out = validate({ a: 'A' }, shape, { extra, errs });
        (0, node_assert_1.deepEqual)(out, { a: 'A' });
        (0, node_assert_1.deepEqual)(errs, ['Not an integer at a: A']);
    });
    // select tests
    // ============
    (0, node_test_1.test)('select-basic', async () => {
        await runset(selectSpec.basic, (vin) => select(vin.obj, vin.query));
    });
    (0, node_test_1.test)('select-operators', async () => {
        await runset(selectSpec.operators, (vin) => select(vin.obj, vin.query));
    });
    (0, node_test_1.test)('select-edge', async () => {
        await runset(selectSpec.edge, (vin) => select(vin.obj, vin.query));
    });
    // JSON Builder
    // ============
    (0, node_test_1.test)('json-builder', async () => {
        (0, node_assert_1.equal)(jsonify(jo('a', 1)), `{
  "a": 1
}`);
        (0, node_assert_1.equal)(jsonify(ja('b', 2)), `[
  "b",
  2
]`);
        (0, node_assert_1.equal)(jsonify(jo('c', 'C', 'd', jo('x', true), 'e', ja(null, false))), `{
  "c": "C",
  "d": {
    "x": true
  },
  "e": [
    null,
    false
  ]
}`);
        (0, node_assert_1.equal)(jsonify(ja(3.3, jo('f', true, 'g', false, 'h', null, 'i', ja('y', 0), 'j', jo('z', -1), 'k'))), `[
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
]`);
        (0, node_assert_1.equal)(jsonify(jo(true, 1, false, 2, null, 3, ['a'], 4, { 'b': 0 }, 5)), `{
  "true": 1,
  "false": 2,
  "null": 3,
  "[a]": 4,
  "{b:0}": 5
}`);
    });
});
//# sourceMappingURL=StructUtility.test.js.map