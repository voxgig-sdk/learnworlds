"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('InvoiceLinkEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.InvoiceLink();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_invoice_link0 - load invoice_link
            const load_invoice_link0 = (0, utility_1.makeStepData)(dm, 'load_invoice_link0');
            load_invoice_link0.entity = client.InvoiceLink();
            load_invoice_link0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_INVOICE_LINK_ENTID.invoice_link01`",
                "payment_id": "`dm$=p.LEARNWORLDS_TEST_PAYMENT_ENTID.payment01`"
            });
            load_invoice_link0.resdata =
                await load_invoice_link0.entity.load(load_invoice_link0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_invoice_link0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_invoice_link0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_invoice_link0.match.id`",
                "payment_id": "`dm$=p.LEARNWORLDS_TEST_PAYMENT_ENTID.payment01`"
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
            "invoice_link": {
                "INVOICE_LINK01": {
                    "invoice": "s0",
                    "url": "s1",
                    "expires_at": 2,
                    "id": "INVOICE_LINK01",
                    "payment_id": "PAYMENT01"
                },
                "INVOICE_LINK02": {
                    "invoice": "s1e",
                    "url": "s1f",
                    "expires_at": 32,
                    "id": "INVOICE_LINK02"
                },
                "INVOICE_LINK03": {
                    "invoice": "s3c",
                    "url": "s3d",
                    "expires_at": 62,
                    "id": "INVOICE_LINK03"
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_INVOICE_LINK_ENTID": {
                    "invoice_link01": "INVOICE_LINK01",
                    "invoice_link02": "INVOICE_LINK02",
                    "invoice_link03": "INVOICE_LINK03"
                },
                "LEARNWORLDS_TEST_LIVE": "FALSE",
                "LEARNWORLDS_TEST_EXPLAIN": "FALSE",
                "LEARNWORLDS_TEST_PAYMENT_ENTID": {
                    "payment01": "PAYMENT01"
                }
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
//# sourceMappingURL=InvoiceLinkEntity.test.js.map