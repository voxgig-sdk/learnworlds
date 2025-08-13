"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('BundleEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.Bundle();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_bundle0 - load bundle
            const load_bundle0 = (0, utility_1.makeStepData)(dm, 'load_bundle0');
            load_bundle0.entity = client.Bundle();
            load_bundle0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_BUNDLE_ENTID.bundle01`"
            });
            load_bundle0.resdata =
                await load_bundle0.entity.load(load_bundle0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_bundle0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_bundle0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_bundle0.match.id`"
            });
        }
        catch (err) {
            console.dir(dm, { depth: null });
            if (explain) {
                console.dir(ctrl.explain, { depth: null });
            }
            console.log(err);
            throw err;
        }
    });
});
function basicSetup(extra) {
    extra = extra || {};
    const options = {
        "entity": {
            "bundle": {
                "BUNDLE01": {
                    "id": "BUNDLE01",
                    "title": "s1",
                    "products": {},
                    "image": "s3",
                    "description": "s4",
                    "access": "s5",
                    "created": 6,
                    "modified": 7,
                    "afterpurchase": {},
                    "price": 9,
                    "paymentplans": []
                },
                "BUNDLE02": {
                    "id": "BUNDLE02",
                    "title": "s6f",
                    "products": {},
                    "image": "s71",
                    "description": "s72",
                    "access": "s73",
                    "created": 116,
                    "modified": 117,
                    "afterpurchase": {},
                    "price": 119,
                    "paymentplans": []
                },
                "BUNDLE03": {
                    "id": "BUNDLE03",
                    "title": "sdd",
                    "products": {},
                    "image": "sdf",
                    "description": "se0",
                    "access": "se1",
                    "created": 226,
                    "modified": 227,
                    "afterpurchase": {},
                    "price": 229,
                    "paymentplans": []
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_BUNDLE_ENTID": {
                    "bundle01": "BUNDLE01",
                    "bundle02": "BUNDLE02",
                    "bundle03": "BUNDLE03"
                },
                "LEARNWORLDS_TEST_LIVE": "FALSE",
                "LEARNWORLDS_TEST_EXPLAIN": "FALSE"
            }),
            s: {},
        },
        options,
    };
    const { merge } = __1.utility.struct;
    let client = __1.LearnworldsSDK.test(options, extra);
    if ('TRUE' === setup.dm.p.LEARNWORLDS_TEST_LIVE) {
        client = new __1.LearnworldsSDK(merge([
            {
                apikey: process.env.LEARNWORLDS_APIKEY,
            },
            extra
        ]));
    }
    setup.client = client;
    setup.struct = client.utility().struct;
    setup.explain = 'TRUE' === setup.dm.p.LEARNWORLDS_TEST_EXPLAIN;
    return setup;
}
//# sourceMappingURL=BundleEntity.test.js.map