"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('UserRoleEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.UserRole();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_user_role0 - load user_role
            const load_user_role0 = (0, utility_1.makeStepData)(dm, 'load_user_role0');
            load_user_role0.entity = client.UserRole();
            load_user_role0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_USER_ROLE_ENTID.user_role01`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            load_user_role0.resdata =
                await load_user_role0.entity.load(load_user_role0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_user_role0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_user_role0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_user_role0.match.id`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            // Step: update_user_role1 - update user_role
            const update_user_role1 = (0, utility_1.makeStepData)(dm, 'update_user_role1');
            update_user_role1.entity = load_user_role0.entity;
            update_user_role1.reqdata = (0, utility_1.makeReqdata)(dm, transform, {
                "email": "s1-`$WHEN`"
            });
            update_user_role1.resdata =
                await update_user_role1.entity.update(update_user_role1.reqdata, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('update_user_role1: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, update_user_role1.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_user_role0.match.id`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`",
                "email": "`dm$=s.update_user_role1.reqdata.email`"
            });
            // Step: load_user_role2 - load user_role
            const load_user_role2 = (0, utility_1.makeStepData)(dm, 'load_user_role2');
            load_user_role2.entity = client.UserRole();
            load_user_role2.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_USER_ROLE_ENTID.user_role01`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            load_user_role2.resdata =
                await load_user_role2.entity.load(load_user_role2.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_user_role2: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_user_role2.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_user_role0.match.id`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`",
                "email": "`dm$=s.update_user_role1.reqdata.email`"
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
            "user_role": {
                "USER_ROLE01": {
                    "id": "USER_ROLE01",
                    "email": "s1",
                    "username": "s2",
                    "role_id": "s3",
                    "user_role": {},
                    "assigned_courses": [],
                    "assigned_seat_offering_ids": [],
                    "assigned_user_group_ids": [],
                    "assigned_segment_id": "s8",
                    "user_id": "USER01"
                },
                "USER_ROLE02": {
                    "id": "USER_ROLE02",
                    "email": "s5b",
                    "username": "s5c",
                    "role_id": "s5d",
                    "user_role": {},
                    "assigned_courses": [],
                    "assigned_seat_offering_ids": [],
                    "assigned_user_group_ids": [],
                    "assigned_segment_id": "s62"
                },
                "USER_ROLE03": {
                    "id": "USER_ROLE03",
                    "email": "sb5",
                    "username": "sb6",
                    "role_id": "sb7",
                    "user_role": {},
                    "assigned_courses": [],
                    "assigned_seat_offering_ids": [],
                    "assigned_user_group_ids": [],
                    "assigned_segment_id": "sbc"
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_USER_ROLE_ENTID": {
                    "user_role01": "USER_ROLE01",
                    "user_role02": "USER_ROLE02",
                    "user_role03": "USER_ROLE03"
                },
                "LEARNWORLDS_TEST_LIVE": "FALSE",
                "LEARNWORLDS_TEST_EXPLAIN": "FALSE",
                "LEARNWORLDS_TEST_USER_ENTID": {
                    "user01": "USER01"
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
    setup.explain = 'TRUE' === setup.dm.p.Learnworlds_TEST_EXPLAIN;
    return setup;
}
//# sourceMappingURL=UserRoleEntity.test.js.map