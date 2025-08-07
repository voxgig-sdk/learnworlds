"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('CouponUsageEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.CouponUsage();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_coupon_usage0 - load coupon_usage
            const load_coupon_usage0 = (0, utility_1.makeStepData)(dm, 'load_coupon_usage0');
            load_coupon_usage0.entity = client.CouponUsage();
            load_coupon_usage0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_COUPON_USAGE_ENTID.coupon_usage01`"
            });
            load_coupon_usage0.resdata =
                await load_coupon_usage0.entity.load(load_coupon_usage0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_coupon_usage0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_coupon_usage0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_coupon_usage0.match.id`"
            });
        }
        catch (err) {
            console.dir(dm, { depth: null });
            if (explain) {
                console.dir(ctrl.explain, { depth: null });
            }
            throw err;
        }
    });
});
function basicSetup(extra) {
    extra = extra || {};
    const options = {
        "entity": {
            "coupon_usage": {
                "COUPON_USAGE01": {
                    "usage": {},
                    "payments": [],
                    "meta": {},
                    "id": "COUPON_USAGE01"
                },
                "COUPON_USAGE02": {
                    "usage": {},
                    "payments": [],
                    "meta": {},
                    "id": "COUPON_USAGE02"
                },
                "COUPON_USAGE03": {
                    "usage": {},
                    "payments": [],
                    "meta": {},
                    "id": "COUPON_USAGE03"
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_COUPON_USAGE_ENTID": {
                    "coupon_usage01": "COUPON_USAGE01",
                    "coupon_usage02": "COUPON_USAGE02",
                    "coupon_usage03": "COUPON_USAGE03"
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
    setup.explain = 'TRUE' === setup.dm.p.Learnworlds_TEST_EXPLAIN;
    return setup;
}
//# sourceMappingURL=CouponUsageEntity.test.js.map