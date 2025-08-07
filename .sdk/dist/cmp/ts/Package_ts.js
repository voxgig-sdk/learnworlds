"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const Package = (0, sdkgen_1.cmp)(async function Package(props) {
    const { target, ctx$: { model } } = props;
    const { main: { sdk: { feature } } } = model;
    const only = (kind, deps) => (0, sdkgen_1.omap)(deps, ([k, v]) => [v.active && kind === v.kind ? k : undefined, v.version]);
    // merge target and feature deps, by kind
    const deps = (0, sdkgen_1.each)(feature, (feature) => (0, sdkgen_1.omap)(feature.deps?.[target.name], ([k, v]) => [v.active ? k : undefined, v]))
        // TODO: sort by version; rules for version choice?
        .reduce((a, deps) => ((0, sdkgen_1.each)(deps, (dep) => a[dep.kind][dep.key$] = dep.version), a), {
        prod: only('prod', target.deps),
        peer: only('peer', target.deps),
        dev: only('dev', target.deps),
    });
    const sdkname = model.name;
    const origin = null == model.origin ? '' : `@${model.origin}/`;
    const sdknamesuffix = model.origin?.endsWith('-sdk') ? '' : '-sdk';
    // TODO: complete SDK meta data in model and use here
    const pkg = {
        name: `${origin}${sdkname}${sdknamesuffix}`,
        version: `0.0.1`,
        description: 'DESCRIPTION',
        main: `dist/${model.const.Name}SDK.js`,
        type: 'commonjs',
        types: `dist/${model.const.Name}SDK.d.ts`,
        scripts: {
            'test': 'node --enable-source-maps --test dist-test/**/*.test.js',
            'test-some': 'node --enable-source-maps ' +
                '--test-name-pattern=\"$npm_config_pattern\" --test dist-test/**/*.test.js',
            'test-utility': 'node --enable-source-maps --test test/utility/*.test.ts',
            "watch": "tsc --build src test -w",
            "build": "tsc --build src test",
            "clean": "rm -rf node_modules yarn.lock package-lock.json",
            "reset": "npm run clean && npm i && npm run build && npm test",
        },
        author: `${model.const.Name}`,
        license: 'MIT',
        dependencies: deps.prod,
        peerDependencies: deps.peer,
        devDependencies: deps.dev,
    };
    (0, sdkgen_1.File)({ name: 'package.json' }, () => {
        (0, sdkgen_1.Content)(JSON.stringify(pkg, null, 2));
    });
});
exports.Package = Package;
//# sourceMappingURL=Package_ts.js.map