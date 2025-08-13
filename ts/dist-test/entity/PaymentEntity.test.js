"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('PaymentEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.Payment();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_payment0 - load payment
            const load_payment0 = (0, utility_1.makeStepData)(dm, 'load_payment0');
            load_payment0.entity = client.Payment();
            load_payment0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_PAYMENT_ENTID.payment01`"
            });
            load_payment0.resdata =
                await load_payment0.entity.load(load_payment0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_payment0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_payment0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_payment0.match.id`"
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
            "payment": {
                "PAYMENT01": {
                    "id": "PAYMENT01",
                    "transaction_id": "s1",
                    "type": "s2",
                    "product": {},
                    "price": 4,
                    "discount": 5,
                    "refund_at": 6,
                    "user_id": "s7",
                    "paid_at": 8,
                    "invoice": "s9",
                    "billing_info": {},
                    "coupon": "sb",
                    "instructors": [],
                    "instructors_total_percentage": 13,
                    "tax_amount": 14,
                    "tax_percentage": 15,
                    "affiliate": {},
                    "period": "s11",
                    "payment_plan_current_payment": "s12",
                    "payment_plan_total_payments": "s13",
                    "gateway": "s14",
                    "created": 21
                },
                "PAYMENT02": {
                    "id": "PAYMENT02",
                    "transaction_id": "sdd",
                    "type": "sde",
                    "product": {},
                    "price": 224,
                    "discount": 225,
                    "refund_at": 226,
                    "user_id": "se3",
                    "paid_at": 228,
                    "invoice": "se5",
                    "billing_info": {},
                    "coupon": "se7",
                    "instructors": [],
                    "instructors_total_percentage": 233,
                    "tax_amount": 234,
                    "tax_percentage": 235,
                    "affiliate": {},
                    "period": "sed",
                    "payment_plan_current_payment": "see",
                    "payment_plan_total_payments": "sef",
                    "gateway": "sf0",
                    "created": 241
                },
                "PAYMENT03": {
                    "id": "PAYMENT03",
                    "transaction_id": "s1b9",
                    "type": "s1ba",
                    "product": {},
                    "price": 444,
                    "discount": 445,
                    "refund_at": 446,
                    "user_id": "s1bf",
                    "paid_at": 448,
                    "invoice": "s1c1",
                    "billing_info": {},
                    "coupon": "s1c3",
                    "instructors": [],
                    "instructors_total_percentage": 453,
                    "tax_amount": 454,
                    "tax_percentage": 455,
                    "affiliate": {},
                    "period": "s1c9",
                    "payment_plan_current_payment": "s1ca",
                    "payment_plan_total_payments": "s1cb",
                    "gateway": "s1cc",
                    "created": 461
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_PAYMENT_ENTID": {
                    "payment01": "PAYMENT01",
                    "payment02": "PAYMENT02",
                    "payment03": "PAYMENT03"
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
//# sourceMappingURL=PaymentEntity.test.js.map