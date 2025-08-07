"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('UserProgressEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.UserProgress();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_user_progress0 - load user_progress
            const load_user_progress0 = (0, utility_1.makeStepData)(dm, 'load_user_progress0');
            load_user_progress0.entity = client.UserProgress();
            load_user_progress0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_USER_PROGRESS_ENTID.user_progress01`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            load_user_progress0.resdata =
                await load_user_progress0.entity.load(load_user_progress0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_user_progress0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_user_progress0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_user_progress0.match.id`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
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
            "user_progress": {
                "USER_PROGRESS01": {
                    "status": "s0",
                    "progress_rate": 1,
                    "average_score_rate": 2,
                    "time_on_course": "s3",
                    "total_units": "s4",
                    "completed_units": "s5",
                    "completed_at": 6,
                    "progress_per_section_unit": [],
                    "id": "USER_PROGRESS01",
                    "user_id": "USER01"
                },
                "USER_PROGRESS02": {
                    "status": "s50",
                    "progress_rate": 81,
                    "average_score_rate": 82,
                    "time_on_course": "s53",
                    "total_units": "s54",
                    "completed_units": "s55",
                    "completed_at": 86,
                    "progress_per_section_unit": [],
                    "id": "USER_PROGRESS02"
                },
                "USER_PROGRESS03": {
                    "status": "sa0",
                    "progress_rate": 161,
                    "average_score_rate": 162,
                    "time_on_course": "sa3",
                    "total_units": "sa4",
                    "completed_units": "sa5",
                    "completed_at": 166,
                    "progress_per_section_unit": [],
                    "id": "USER_PROGRESS03"
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_USER_PROGRESS_ENTID": {
                    "user_progress01": "USER_PROGRESS01",
                    "user_progress02": "USER_PROGRESS02",
                    "user_progress03": "USER_PROGRESS03"
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
//# sourceMappingURL=UserProgressEntity.test.js.map