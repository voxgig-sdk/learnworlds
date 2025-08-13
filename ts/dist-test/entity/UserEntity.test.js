"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('UserEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.User();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_user0 - load user
            const load_user0 = (0, utility_1.makeStepData)(dm, 'load_user0');
            load_user0.entity = client.User();
            load_user0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            load_user0.resdata =
                await load_user0.entity.load(load_user0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_user0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_user0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_user0.match.id`"
            });
            // Step: update_user1 - update user
            const update_user1 = (0, utility_1.makeStepData)(dm, 'update_user1');
            update_user1.entity = load_user0.entity;
            update_user1.reqdata = (0, utility_1.makeReqdata)(dm, transform, {
                "email": "s1-`$WHEN`"
            });
            update_user1.resdata =
                await update_user1.entity.update(update_user1.reqdata, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('update_user1: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, update_user1.resdata, {
                "`$OPEN`": true,
                "email": "`dm$=s.update_user1.reqdata.email`",
                "id": "`dm$=s.load_user0.match.id`"
            });
            // Step: load_user2 - load user
            const load_user2 = (0, utility_1.makeStepData)(dm, 'load_user2');
            load_user2.entity = client.User();
            load_user2.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            load_user2.resdata =
                await load_user2.entity.load(load_user2.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_user2: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_user2.resdata, {
                "`$OPEN`": true,
                "email": "`dm$=s.update_user1.reqdata.email`",
                "id": "`dm$=s.load_user0.match.id`"
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
            "user": {
                "USER01": {
                    "id": "USER01",
                    "email": "s1",
                    "username": "s2",
                    "subscribed_for_marketing_emails": false,
                    "eu_customer": true,
                    "is_admin": false,
                    "is_instructor": true,
                    "is_suspended": false,
                    "is_reporter": true,
                    "role": {},
                    "is_affiliate": true,
                    "referrer_id": "sb",
                    "last_login": 12,
                    "signup_approval_status": "sd",
                    "created": 14,
                    "fields": {},
                    "tags": [],
                    "utms": {},
                    "billing_info": {},
                    "nps_score": "s13",
                    "nps_comment": "s14"
                },
                "USER02": {
                    "id": "USER02",
                    "email": "sd3",
                    "username": "sd4",
                    "subscribed_for_marketing_emails": false,
                    "eu_customer": true,
                    "is_admin": false,
                    "is_instructor": true,
                    "is_suspended": false,
                    "is_reporter": true,
                    "role": {},
                    "is_affiliate": true,
                    "referrer_id": "sdd",
                    "last_login": 222,
                    "signup_approval_status": "sdf",
                    "created": 224,
                    "fields": {},
                    "tags": [],
                    "utms": {},
                    "billing_info": {},
                    "nps_score": "se5",
                    "nps_comment": "se6"
                },
                "USER03": {
                    "id": "USER03",
                    "email": "s1a5",
                    "username": "s1a6",
                    "subscribed_for_marketing_emails": false,
                    "eu_customer": true,
                    "is_admin": false,
                    "is_instructor": true,
                    "is_suspended": false,
                    "is_reporter": true,
                    "role": {},
                    "is_affiliate": true,
                    "referrer_id": "s1af",
                    "last_login": 432,
                    "signup_approval_status": "s1b1",
                    "created": 434,
                    "fields": {},
                    "tags": [],
                    "utms": {},
                    "billing_info": {},
                    "nps_score": "s1b7",
                    "nps_comment": "s1b8"
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_USER_ENTID": {
                    "user01": "USER01",
                    "user02": "USER02",
                    "user03": "USER03"
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
//# sourceMappingURL=UserEntity.test.js.map