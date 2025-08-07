"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('SubscriptionPlanEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.SubscriptionPlan();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_subscription_plan0 - load subscription_plan
            const load_subscription_plan0 = (0, utility_1.makeStepData)(dm, 'load_subscription_plan0');
            load_subscription_plan0.entity = client.SubscriptionPlan();
            load_subscription_plan0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_SUBSCRIPTION_PLAN_ENTID.subscription_plan01`"
            });
            load_subscription_plan0.resdata =
                await load_subscription_plan0.entity.load(load_subscription_plan0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_subscription_plan0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_subscription_plan0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_subscription_plan0.match.id`"
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
            "subscription_plan": {
                "SUBSCRIPTION_PLAN01": {
                    "id": "SUBSCRIPTION_PLAN01",
                    "title": "s1",
                    "stripeplanid": "s2",
                    "description": "s3",
                    "products": {},
                    "image": "s5",
                    "interval": "s6",
                    "interval_type": "s7",
                    "trial_period_days": "s8",
                    "afterpurchase": {},
                    "access": "sa",
                    "created": 11,
                    "modified": 12,
                    "price": 13
                },
                "SUBSCRIPTION_PLAN02": {
                    "id": "SUBSCRIPTION_PLAN02",
                    "title": "s8d",
                    "stripeplanid": "s8e",
                    "description": "s8f",
                    "products": {},
                    "image": "s91",
                    "interval": "s92",
                    "interval_type": "s93",
                    "trial_period_days": "s94",
                    "afterpurchase": {},
                    "access": "s96",
                    "created": 151,
                    "modified": 152,
                    "price": 153
                },
                "SUBSCRIPTION_PLAN03": {
                    "id": "SUBSCRIPTION_PLAN03",
                    "title": "s119",
                    "stripeplanid": "s11a",
                    "description": "s11b",
                    "products": {},
                    "image": "s11d",
                    "interval": "s11e",
                    "interval_type": "s11f",
                    "trial_period_days": "s120",
                    "afterpurchase": {},
                    "access": "s122",
                    "created": 291,
                    "modified": 292,
                    "price": 293
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_SUBSCRIPTION_PLAN_ENTID": {
                    "subscription_plan01": "SUBSCRIPTION_PLAN01",
                    "subscription_plan02": "SUBSCRIPTION_PLAN02",
                    "subscription_plan03": "SUBSCRIPTION_PLAN03"
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
//# sourceMappingURL=SubscriptionPlanEntity.test.js.map