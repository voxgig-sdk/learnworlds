"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('PromotionEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.Promotion();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_promotion0 - load promotion
            const load_promotion0 = (0, utility_1.makeStepData)(dm, 'load_promotion0');
            load_promotion0.entity = client.Promotion();
            load_promotion0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_PROMOTION_ENTID.promotion01`"
            });
            load_promotion0.resdata =
                await load_promotion0.entity.load(load_promotion0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_promotion0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_promotion0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_promotion0.match.id`"
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
            "promotion": {
                "PROMOTION01": {
                    "id": "PROMOTION01",
                    "name": "s1",
                    "coupons": [],
                    "applies_to_all": [],
                    "products": [],
                    "type": "s5",
                    "value": 6,
                    "created": 7,
                    "modified": 8
                },
                "PROMOTION02": {
                    "id": "PROMOTION02",
                    "name": "s5b",
                    "coupons": [],
                    "applies_to_all": [],
                    "products": [],
                    "type": "s5f",
                    "value": 96,
                    "created": 97,
                    "modified": 98
                },
                "PROMOTION03": {
                    "id": "PROMOTION03",
                    "name": "sb5",
                    "coupons": [],
                    "applies_to_all": [],
                    "products": [],
                    "type": "sb9",
                    "value": 186,
                    "created": 187,
                    "modified": 188
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_PROMOTION_ENTID": {
                    "promotion01": "PROMOTION01",
                    "promotion02": "PROMOTION02",
                    "promotion03": "PROMOTION03"
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
//# sourceMappingURL=PromotionEntity.test.js.map