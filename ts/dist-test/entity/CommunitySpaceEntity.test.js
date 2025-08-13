"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('CommunitySpaceEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.CommunitySpace();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_community_space0 - load community_space
            const load_community_space0 = (0, utility_1.makeStepData)(dm, 'load_community_space0');
            load_community_space0.entity = client.CommunitySpace();
            load_community_space0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID.community_space01`"
            });
            load_community_space0.resdata =
                await load_community_space0.entity.load(load_community_space0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_community_space0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_community_space0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_community_space0.match.id`"
            });
            // Step: update_community_space1 - update community_space
            const update_community_space1 = (0, utility_1.makeStepData)(dm, 'update_community_space1');
            update_community_space1.entity = load_community_space0.entity;
            update_community_space1.reqdata = (0, utility_1.makeReqdata)(dm, transform, {
                "title": "s1-`$WHEN`"
            });
            update_community_space1.resdata =
                await update_community_space1.entity.update(update_community_space1.reqdata, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('update_community_space1: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, update_community_space1.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_community_space0.match.id`",
                "title": "`dm$=s.update_community_space1.reqdata.title`"
            });
            // Step: load_community_space2 - load community_space
            const load_community_space2 = (0, utility_1.makeStepData)(dm, 'load_community_space2');
            load_community_space2.entity = client.CommunitySpace();
            load_community_space2.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID.community_space01`"
            });
            load_community_space2.resdata =
                await load_community_space2.entity.load(load_community_space2.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_community_space2: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_community_space2.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_community_space0.match.id`",
                "title": "`dm$=s.update_community_space1.reqdata.title`"
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
            "community_space": {
                "COMMUNITY_SPACE01": {
                    "id": "COMMUNITY_SPACE01",
                    "title": "s1",
                    "description": "s2",
                    "access": "s3",
                    "owner": {},
                    "usages": [],
                    "hidden_from_community": true,
                    "is_invitation_required": false,
                    "is_members_allowed_to_view_members": true,
                    "collectionid": "s9"
                },
                "COMMUNITY_SPACE02": {
                    "id": "COMMUNITY_SPACE02",
                    "title": "s65",
                    "description": "s66",
                    "access": "s67",
                    "owner": {},
                    "usages": [],
                    "hidden_from_community": true,
                    "is_invitation_required": false,
                    "is_members_allowed_to_view_members": true,
                    "collectionid": "s6d"
                },
                "COMMUNITY_SPACE03": {
                    "id": "COMMUNITY_SPACE03",
                    "title": "sc9",
                    "description": "sca",
                    "access": "scb",
                    "owner": {},
                    "usages": [],
                    "hidden_from_community": true,
                    "is_invitation_required": false,
                    "is_members_allowed_to_view_members": true,
                    "collectionid": "sd1"
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID": {
                    "community_space01": "COMMUNITY_SPACE01",
                    "community_space02": "COMMUNITY_SPACE02",
                    "community_space03": "COMMUNITY_SPACE03"
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
//# sourceMappingURL=CommunitySpaceEntity.test.js.map