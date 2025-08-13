"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('CommunityPostEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.CommunityPost();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_community_post0 - load community_post
            const load_community_post0 = (0, utility_1.makeStepData)(dm, 'load_community_post0');
            load_community_post0.entity = client.CommunityPost();
            load_community_post0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_COMMUNITY_POST_ENTID.community_post01`"
            });
            load_community_post0.resdata =
                await load_community_post0.entity.load(load_community_post0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_community_post0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_community_post0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_community_post0.match.id`"
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
            "community_post": {
                "COMMUNITY_POST01": {
                    "id": "COMMUNITY_POST01",
                    "posted_in": {},
                    "user": {},
                    "text": "s3",
                    "mentions": [],
                    "likes": [],
                    "upvotes": [],
                    "items": [],
                    "created": 8
                },
                "COMMUNITY_POST02": {
                    "id": "COMMUNITY_POST02",
                    "posted_in": {},
                    "user": {},
                    "text": "s5d",
                    "mentions": [],
                    "likes": [],
                    "upvotes": [],
                    "items": [],
                    "created": 98
                },
                "COMMUNITY_POST03": {
                    "id": "COMMUNITY_POST03",
                    "posted_in": {},
                    "user": {},
                    "text": "sb7",
                    "mentions": [],
                    "likes": [],
                    "upvotes": [],
                    "items": [],
                    "created": 188
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_COMMUNITY_POST_ENTID": {
                    "community_post01": "COMMUNITY_POST01",
                    "community_post02": "COMMUNITY_POST02",
                    "community_post03": "COMMUNITY_POST03"
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
//# sourceMappingURL=CommunityPostEntity.test.js.map