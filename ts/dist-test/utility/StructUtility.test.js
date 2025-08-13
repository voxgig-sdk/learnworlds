"use strict";
// VERSION: @voxgig/struct 0.0.9
// RUN: npm test
// RUN-SOME: npm run test-some --pattern=getpath
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const runner_1 = require("../runner");
const index_1 = require("./index");
// NOTE: tests are (mostly) in order of increasing dependence.
(0, node_test_1.describe)('struct', async () => {
    let spec;
    let runset;
    let runsetflags;
    let client;
    let struct;
    (0, node_test_1.before)(async () => {
        const runner = await (0, runner_1.makeRunner)(index_1.TEST_JSON_FILE, await index_1.SDK.test());
        const runner_struct = await runner('struct');
        spec = runner_struct.spec;
        runset = runner_struct.runset;
        runsetflags = runner_struct.runsetflags;
        client = runner_struct.client;
        struct = client.utility().struct;
    });
    (0, node_test_1.test)('exists', () => {
        const s = struct;
        (0, node_assert_1.equal)('function', typeof s.clone);
        (0, node_assert_1.equal)('function', typeof s.delprop);
        (0, node_assert_1.equal)('function', typeof s.escre);
        (0, node_assert_1.equal)('function', typeof s.escurl);
        (0, node_assert_1.equal)('function', typeof s.getelem);
        (0, node_assert_1.equal)('function', typeof s.getprop);
        (0, node_assert_1.equal)('function', typeof s.getpath);
        (0, node_assert_1.equal)('function', typeof s.haskey);
        (0, node_assert_1.equal)('function', typeof s.inject);
        (0, node_assert_1.equal)('function', typeof s.isempty);
        (0, node_assert_1.equal)('function', typeof s.isfunc);
        (0, node_assert_1.equal)('function', typeof s.iskey);
        (0, node_assert_1.equal)('function', typeof s.islist);
        (0, node_assert_1.equal)('function', typeof s.ismap);
        (0, node_assert_1.equal)('function', typeof s.isnode);
        (0, node_assert_1.equal)('function', typeof s.items);
        (0, node_assert_1.equal)('function', typeof s.joinurl);
        (0, node_assert_1.equal)('function', typeof s.jsonify);
        (0, node_assert_1.equal)('function', typeof s.keysof);
        (0, node_assert_1.equal)('function', typeof s.merge);
        (0, node_assert_1.equal)('function', typeof s.pad);
        (0, node_assert_1.equal)('function', typeof s.pathify);
        (0, node_assert_1.equal)('function', typeof s.select);
        (0, node_assert_1.equal)('function', typeof s.size);
        (0, node_assert_1.equal)('function', typeof s.slice);
        (0, node_assert_1.equal)('function', typeof s.setprop);
        (0, node_assert_1.equal)('function', typeof s.strkey);
        (0, node_assert_1.equal)('function', typeof s.stringify);
        (0, node_assert_1.equal)('function', typeof s.transform);
        (0, node_assert_1.equal)('function', typeof s.typify);
        (0, node_assert_1.equal)('function', typeof s.validate);
        (0, node_assert_1.equal)('function', typeof s.walk);
    });
    // minor tests
    // ===========
    (0, node_test_1.test)('minor-isnode', async () => {
        await runset(spec.minor.isnode, struct.isnode);
    });
    (0, node_test_1.test)('minor-ismap', async () => {
        await runset(spec.minor.ismap, struct.ismap);
    });
    (0, node_test_1.test)('minor-islist', async () => {
        await runset(spec.minor.islist, struct.islist);
    });
    (0, node_test_1.test)('minor-iskey', async () => {
        await runsetflags(spec.minor.iskey, { null: false }, struct.iskey);
    });
    (0, node_test_1.test)('minor-strkey', async () => {
        await runsetflags(spec.minor.strkey, { null: false }, struct.strkey);
    });
    (0, node_test_1.test)('minor-isempty', async () => {
        await runsetflags(spec.minor.isempty, { null: false }, struct.isempty);
    });
    (0, node_test_1.test)('minor-isfunc', async () => {
        const { isfunc } = struct;
        await runset(spec.minor.isfunc, isfunc);
        function f0() { return null; }
        (0, node_assert_1.equal)(isfunc(f0), true);
        (0, node_assert_1.equal)(isfunc(() => null), true);
    });
    (0, node_test_1.test)('minor-clone', async () => {
        const { clone } = struct;
        await runsetflags(spec.minor.clone, { null: false }, clone);
        const f0 = () => null;
        (0, node_assert_1.deepEqual)({ a: f0 }, clone({ a: f0 }));
    });
    (0, node_test_1.test)('minor-escre', async () => {
        await runset(spec.minor.escre, struct.escre);
    });
    (0, node_test_1.test)('minor-escurl', async () => {
        await runset(spec.minor.escurl, struct.escurl);
    });
    (0, node_test_1.test)('minor-stringify', async () => {
        await runset(spec.minor.stringify, (vin) => struct.stringify((runner_1.NULLMARK === vin.val ? "null" : vin.val), vin.max));
    });
    (0, node_test_1.test)('minor-jsonify', async () => {
        await runsetflags(spec.minor.jsonify, { null: false }, struct.jsonify);
    });
    (0, node_test_1.test)('minor-pathify', async () => {
        await runsetflags(spec.minor.pathify, { null: true }, (vin) => {
            let path = runner_1.NULLMARK == vin.path ? undefined : vin.path;
            let pathstr = struct.pathify(path, vin.from).replace('__NULL__.', '');
            pathstr = runner_1.NULLMARK === vin.path ? pathstr.replace('>', ':null>') : pathstr;
            return pathstr;
        });
    });
    (0, node_test_1.test)('minor-items', async () => {
        await runset(spec.minor.items, struct.items);
    });
    (0, node_test_1.test)('minor-getelem', async () => {
        const { getelem } = struct;
        await runsetflags(spec.minor.getelem, { null: false }, (vin) => null == vin.alt ? getelem(vin.val, vin.key) : getelem(vin.val, vin.key, vin.alt));
    });
    (0, node_test_1.test)('minor-getprop', async () => {
        const { getprop } = struct;
        await runsetflags(spec.minor.getprop, { null: false }, (vin) => undefined === vin.alt ? getprop(vin.val, vin.key) : getprop(vin.val, vin.key, vin.alt));
    });
    (0, node_test_1.test)('minor-edge-getprop', async () => {
        const { getprop } = struct;
        let strarr = ['a', 'b', 'c', 'd', 'e'];
        (0, node_assert_1.deepEqual)(getprop(strarr, 2), 'c');
        (0, node_assert_1.deepEqual)(getprop(strarr, '2'), 'c');
        let intarr = [2, 3, 5, 7, 11];
        (0, node_assert_1.deepEqual)(getprop(intarr, 2), 5);
        (0, node_assert_1.deepEqual)(getprop(intarr, '2'), 5);
    });
    (0, node_test_1.test)('minor-setprop', async () => {
        await runset(spec.minor.setprop, (vin) => struct.setprop(vin.parent, vin.key, vin.val));
    });
    (0, node_test_1.test)('minor-edge-setprop', async () => {
        const { setprop } = struct;
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
        await runset(spec.minor.delprop, (vin) => struct.delprop(vin.parent, vin.key));
    });
    (0, node_test_1.test)('minor-edge-delprop', async () => {
        const { delprop } = struct;
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
        await runsetflags(spec.minor.haskey, { null: false }, (vin) => struct.haskey(vin.src, vin.key));
    });
    (0, node_test_1.test)('minor-keysof', async () => {
        await runset(spec.minor.keysof, struct.keysof);
    });
    (0, node_test_1.test)('minor-joinurl', async () => {
        await runsetflags(spec.minor.joinurl, { null: false }, struct.joinurl);
    });
    (0, node_test_1.test)('minor-typify', async () => {
        await runsetflags(spec.minor.typify, { null: false }, struct.typify);
    });
    (0, node_test_1.test)('minor-size', async () => {
        await runsetflags(spec.minor.size, { null: false }, struct.size);
    });
    (0, node_test_1.test)('minor-slice', async () => {
        await runsetflags(spec.minor.slice, { null: false }, (vin) => struct.slice(vin.val, vin.start, vin.end));
    });
    (0, node_test_1.test)('minor-pad', async () => {
        await runsetflags(spec.minor.pad, { null: false }, (vin) => struct.pad(vin.val, vin.pad, vin.char));
    });
    // walk tests
    // ==========
    (0, node_test_1.test)('walk-log', async () => {
        const { clone, stringify, pathify, walk } = struct;
        const test = clone(spec.walk.log);
        let log = [];
        function walklog(key, val, parent, path) {
            log.push('k=' + stringify(key) +
                ', v=' + stringify(val) +
                ', p=' + stringify(parent) +
                ', t=' + pathify(path));
            return val;
        }
        walk(test.in, undefined, walklog);
        (0, node_assert_1.deepEqual)(log, test.out.after);
        log = [];
        walk(test.in, walklog);
        (0, node_assert_1.deepEqual)(log, test.out.before);
        log = [];
        walk(test.in, walklog, walklog);
        (0, node_assert_1.deepEqual)(log, test.out.both);
    });
    (0, node_test_1.test)('walk-basic', async () => {
        function walkpath(_key, val, _parent, path) {
            return 'string' === typeof val ? val + '~' + path.join('.') : val;
        }
        await runset(spec.walk.basic, (vin) => struct.walk(vin, walkpath));
    });
    (0, node_test_1.test)('walk-depth', async () => {
        await runsetflags(spec.walk.depth, { null: false }, (vin) => {
            let top = undefined;
            let cur = undefined;
            function copy(key, val, _parent, _path) {
                if (undefined === key || struct.isnode(val)) {
                    let child = struct.islist(val) ? [] : {};
                    if (undefined === key) {
                        top = cur = child;
                    }
                    else {
                        cur = cur[key] = child;
                    }
                }
                else {
                    cur[key] = val;
                }
                return val;
            }
            struct.walk(vin.src, copy, undefined, vin.maxdepth);
            return top;
        });
    });
    // merge tests
    // ===========
    (0, node_test_1.test)('merge-basic', async () => {
        const { clone, merge } = struct;
        const test = clone(spec.merge.basic);
        (0, node_assert_1.deepEqual)(merge(test.in), test.out);
    });
    (0, node_test_1.test)('merge-cases', async () => {
        await runset(spec.merge.cases, struct.merge);
    });
    (0, node_test_1.test)('merge-array', async () => {
        await runset(spec.merge.array, struct.merge);
    });
    (0, node_test_1.test)('merge-integrity', async () => {
        await runset(spec.merge.integrity, struct.merge);
    });
    (0, node_test_1.test)('merge-special', async () => {
        const { merge } = struct;
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
        class Bar {
            x = 1;
        }
        const b0 = new Bar();
        let out;
        (0, node_assert_1.equal)(merge([{ x: 10 }, b0]), b0);
        (0, node_assert_1.equal)(b0.x, 1);
        (0, node_assert_1.equal)(b0 instanceof Bar, true);
        (0, node_assert_1.deepEqual)(merge([{ a: b0 }, { a: { x: 11 } }]), { a: { x: 11 } });
        (0, node_assert_1.equal)(b0.x, 1);
        (0, node_assert_1.equal)(b0 instanceof Bar, true);
        (0, node_assert_1.deepEqual)(merge([b0, { x: 20 }]), { x: 20 });
        (0, node_assert_1.equal)(b0.x, 1);
        (0, node_assert_1.equal)(b0 instanceof Bar, true);
        out = merge([{ a: { x: 21 } }, { a: b0 }]);
        (0, node_assert_1.deepEqual)(out, { a: b0 });
        (0, node_assert_1.equal)(b0, out.a);
        (0, node_assert_1.equal)(b0.x, 1);
        (0, node_assert_1.equal)(b0 instanceof Bar, true);
        out = merge([{}, { b: b0 }]);
        (0, node_assert_1.deepEqual)(out, { b: b0 });
        (0, node_assert_1.equal)(b0, out.b);
        (0, node_assert_1.equal)(b0.x, 1);
        (0, node_assert_1.equal)(b0 instanceof Bar, true);
    });
    // getpath tests
    // =============
    (0, node_test_1.test)('getpath-basic', async () => {
        await runset(spec.getpath.basic, (vin) => struct.getpath(vin.store, vin.path));
    });
    (0, node_test_1.test)('getpath-relative', async () => {
        await runset(spec.getpath.relative, (vin) => struct.getpath(vin.store, vin.path, { dparent: vin.dparent, dpath: vin.dpath?.split('.') }));
    });
    (0, node_test_1.test)('getpath-special', async () => {
        await runset(spec.getpath.special, (vin) => struct.getpath(vin.store, vin.path, vin.inj));
    });
    (0, node_test_1.test)('getpath-handler', async () => {
        await runset(spec.getpath.handler, (vin) => struct.getpath({
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
        const { clone, inject } = struct;
        const test = clone(spec.inject.basic);
        (0, node_assert_1.deepEqual)(inject(test.in.val, test.in.store), test.out);
    });
    (0, node_test_1.test)('inject-string', async () => {
        await runset(spec.inject.string, (vin) => struct.inject(vin.val, vin.store, { modify: runner_1.nullModifier }));
    });
    (0, node_test_1.test)('inject-deep', async () => {
        await runset(spec.inject.deep, (vin) => struct.inject(vin.val, vin.store));
    });
    // transform tests
    // ===============
    (0, node_test_1.test)('transform-basic', async () => {
        const { clone, transform } = struct;
        const test = clone(spec.transform.basic);
        (0, node_assert_1.deepEqual)(transform(test.in.data, test.in.spec), test.out);
    });
    (0, node_test_1.test)('transform-paths', async () => {
        await runset(spec.transform.paths, (vin) => struct.transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-cmds', async () => {
        await runset(spec.transform.cmds, (vin) => struct.transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-each', async () => {
        await runset(spec.transform.each, (vin) => struct.transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-pack', async () => {
        await runset(spec.transform.pack, (vin) => struct.transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-ref', async () => {
        await runset(spec.transform.ref, (vin) => struct.transform(vin.data, vin.spec));
    });
    (0, node_test_1.test)('transform-modify', async () => {
        await runset(spec.transform.modify, (vin) => struct.transform(vin.data, vin.spec, {
            modify: (val, key, parent) => {
                if (null != key && null != parent && 'string' === typeof val) {
                    val = parent[key] = '@' + val;
                }
            }
        }));
    });
    (0, node_test_1.test)('transform-extra', async () => {
        (0, node_assert_1.deepEqual)(struct.transform({ a: 1 }, { x: '`a`', b: '`$COPY`', c: '`$UPPER`' }, {
            extra: {
                b: 2, $UPPER: (state) => {
                    const { path } = state;
                    return ('' + struct.getprop(path, path.length - 1)).toUpperCase();
                }
            }
        }), {
            x: 1,
            b: 2,
            c: 'C'
        });
    });
    (0, node_test_1.test)('transform-funcval', async () => {
        const { transform } = struct;
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
        await runset(spec.validate.basic, (vin) => struct.validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-child', async () => {
        await runset(spec.validate.child, (vin) => struct.validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-one', async () => {
        await runset(spec.validate.one, (vin) => struct.validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-exact', async () => {
        await runset(spec.validate.exact, (vin) => struct.validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-invalid', async () => {
        await runsetflags(spec.validate.invalid, { null: false }, (vin) => struct.validate(vin.data, vin.spec));
    });
    (0, node_test_1.test)('validate-special', async () => {
        await runset(spec.validate.special, (vin) => struct.validate(vin.data, vin.spec, vin.inj));
    });
    (0, node_test_1.test)('validate-custom', async () => {
        const errs = [];
        const extra = {
            $INTEGER: (inj) => {
                const { key } = inj;
                // let out = getprop(current, key)
                let out = struct.getprop(inj.dparent, key);
                let t = typeof out;
                if ('number' !== t && !Number.isInteger(out)) {
                    inj.errs.push('Not an integer at ' + inj.path.slice(1).join('.') + ': ' + out);
                    return;
                }
                return out;
            },
        };
        const shape = { a: '`$INTEGER`' };
        let out = struct.validate({ a: 1 }, shape, { extra, errs });
        (0, node_assert_1.deepEqual)(out, { a: 1 });
        (0, node_assert_1.equal)(errs.length, 0);
        out = struct.validate({ a: 'A' }, shape, { extra, errs });
        (0, node_assert_1.deepEqual)(out, { a: 'A' });
        (0, node_assert_1.deepEqual)(errs, ['Not an integer at a: A']);
    });
    // select tests
    // ============
    (0, node_test_1.test)('select-basic', async () => {
        await runset(spec.select.basic, (vin) => struct.select(vin.obj, vin.query));
    });
    (0, node_test_1.test)('select-operators', async () => {
        await runset(spec.select.operators, (vin) => struct.select(vin.obj, vin.query));
    });
    (0, node_test_1.test)('select-edge', async () => {
        await runset(spec.select.edge, (vin) => struct.select(vin.obj, vin.query));
    });
    // JSON Builder
    // ============
    (0, node_test_1.test)('json-builder', async () => {
        const { jsonify, jo, ja } = struct;
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