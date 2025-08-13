"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('SeatEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.Seat();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_seat0 - load seat
            const load_seat0 = (0, utility_1.makeStepData)(dm, 'load_seat0');
            load_seat0.entity = client.Seat();
            load_seat0.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_SEAT_ENTID.seat01`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            load_seat0.resdata =
                await load_seat0.entity.load(load_seat0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_seat0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_seat0.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_seat0.match.id`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            // Step: update_seat1 - update seat
            const update_seat1 = (0, utility_1.makeStepData)(dm, 'update_seat1');
            update_seat1.entity = load_seat0.entity;
            update_seat1.reqdata = (0, utility_1.makeReqdata)(dm, transform, {
                "title": "s1-`$WHEN`"
            });
            update_seat1.resdata =
                await update_seat1.entity.update(update_seat1.reqdata, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('update_seat1: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, update_seat1.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_seat0.match.id`",
                "title": "`dm$=s.update_seat1.reqdata.title`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            // Step: load_seat2 - load seat
            const load_seat2 = (0, utility_1.makeStepData)(dm, 'load_seat2');
            load_seat2.entity = client.Seat();
            load_seat2.match = (0, utility_1.makeMatch)(dm, transform, {
                "id": "`dm$=p.LEARNWORLDS_TEST_SEAT_ENTID.seat01`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
            });
            load_seat2.resdata =
                await load_seat2.entity.load(load_seat2.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_seat2: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_seat2.resdata, {
                "`$OPEN`": true,
                "id": "`dm$=s.load_seat0.match.id`",
                "title": "`dm$=s.update_seat1.reqdata.title`",
                "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
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
            "seat": {
                "SEAT01": {
                    "id": "SEAT01",
                    "title": "s1",
                    "description": "s2",
                    "products": {},
                    "number_of_seats": "s4",
                    "available_seats": "s5",
                    "max_number_of_users": "s6",
                    "seat_managers": [],
                    "tags": [],
                    "total_enrollments": "s9",
                    "access": "sa",
                    "created": 11,
                    "modified": 12,
                    "active": false,
                    "got_seat_on": 14,
                    "user_id": "USER01"
                },
                "SEAT02": {
                    "id": "SEAT02",
                    "title": "s97",
                    "description": "s98",
                    "products": {},
                    "number_of_seats": "s9a",
                    "available_seats": "s9b",
                    "max_number_of_users": "s9c",
                    "seat_managers": [],
                    "tags": [],
                    "total_enrollments": "s9f",
                    "access": "sa0",
                    "created": 161,
                    "modified": 162,
                    "active": false,
                    "got_seat_on": 164
                },
                "SEAT03": {
                    "id": "SEAT03",
                    "title": "s12d",
                    "description": "s12e",
                    "products": {},
                    "number_of_seats": "s130",
                    "available_seats": "s131",
                    "max_number_of_users": "s132",
                    "seat_managers": [],
                    "tags": [],
                    "total_enrollments": "s135",
                    "access": "s136",
                    "created": 311,
                    "modified": 312,
                    "active": false,
                    "got_seat_on": 314
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_SEAT_ENTID": {
                    "seat01": "SEAT01",
                    "seat02": "SEAT02",
                    "seat03": "SEAT03"
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
    setup.explain = 'TRUE' === setup.dm.p.LEARNWORLDS_TEST_EXPLAIN;
    return setup;
}
//# sourceMappingURL=SeatEntity.test.js.map