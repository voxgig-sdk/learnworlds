"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('UserGroupEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.UserGroup();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_user_group0 - load user_group
            const load_user_group0 = (0, utility_1.makeStepData)(dm, 'load_user_group0');
            load_user_group0.entity = client.UserGroup();
            load_user_group0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_USER_GROUP_ENTID.user_group01`"
            });
            load_user_group0.resdata =
                await load_user_group0.entity.load(load_user_group0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_user_group0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_user_group0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_user_group0.match.id`"
            });
            // Step: update_user_group1 - update user_group
            const update_user_group1 = (0, utility_1.makeStepData)(dm, 'update_user_group1');
            update_user_group1.entity = load_user_group0.entity;
            update_user_group1.reqdata = (0, utility_1.makeReqdata)(dm, transform, {
                "title": "s1-`$WHEN`"
            });
            update_user_group1.resdata =
                await update_user_group1.entity.update(update_user_group1.reqdata, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('update_user_group1: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, update_user_group1.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_user_group0.match.id`",
                "title": "`dm$=s.update_user_group1.reqdata.title`"
            });
            // Step: load_user_group2 - load user_group
            const load_user_group2 = (0, utility_1.makeStepData)(dm, 'load_user_group2');
            load_user_group2.entity = client.UserGroup();
            load_user_group2.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_USER_GROUP_ENTID.user_group01`"
            });
            load_user_group2.resdata =
                await load_user_group2.entity.load(load_user_group2.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_user_group2: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_user_group2.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_user_group0.match.id`",
                "title": "`dm$=s.update_user_group1.reqdata.title`"
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
            "user_group": {
                "USER_GROUP01": {
                    "id": "USER_GROUP01",
                    "title": "s1",
                    "description": "s2",
                    "products": {},
                    "enroll_users_on_courses": true,
                    "group_managers": [],
                    "tags": [],
                    "created": 7,
                    "modified": 8
                },
                "USER_GROUP02": {
                    "id": "USER_GROUP02",
                    "title": "s5b",
                    "description": "s5c",
                    "products": {},
                    "enroll_users_on_courses": true,
                    "group_managers": [],
                    "tags": [],
                    "created": 97,
                    "modified": 98
                },
                "USER_GROUP03": {
                    "id": "USER_GROUP03",
                    "title": "sb5",
                    "description": "sb6",
                    "products": {},
                    "enroll_users_on_courses": true,
                    "group_managers": [],
                    "tags": [],
                    "created": 187,
                    "modified": 188
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_USER_GROUP_ENTID": {
                    "user_group01": "USER_GROUP01",
                    "user_group02": "USER_GROUP02",
                    "user_group03": "USER_GROUP03"
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
//# sourceMappingURL=UserGroupEntity.test.js.map