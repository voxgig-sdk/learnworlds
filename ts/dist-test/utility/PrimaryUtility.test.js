"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const runner_1 = require("../runner");
const index_1 = require("./index");
(0, node_test_1.describe)('PrimaryUtility', async () => {
    let client;
    let runner;
    let runners;
    (0, node_test_1.before)(async () => {
        client = index_1.SDK.test();
        runner = await (0, runner_1.makeRunner)(index_1.TEST_JSON_FILE, client);
        runners = {
            auth: await runner('auth'),
            body: await runner('body'),
            contextify: await runner('contextify'),
            done: await runner('done'),
            error: await runner('error'),
            findparam: await runner('findparam'),
            fullurl: await runner('fullurl'),
            headers: await runner('headers'),
            method: await runner('method'),
            operator: await runner('operator'),
            options: await runner('options'),
            params: await runner('params'),
            query: await runner('query'),
            reqform: await runner('reqform'),
            request: await runner('request', { fetch: MockFetch }),
            resbasic: await runner('resbasic'),
            resbody: await runner('resbody'),
            resform: await runner('resform'),
            resheaders: await runner('resheaders'),
            response: await runner('response'),
            spec: await runner('spec'),
        };
    });
    async function MockFetch(url, fetchdef) {
        return {
            status: 200,
            statusText: 'OK',
        };
    }
    function MockResponse(resdef) {
        const mres = {
            native: {
                status: resdef.native.status,
                statusText: resdef.native.reason,
                json: async () => resdef.native.body,
                headers: {
                    forEach(callback) {
                        Object.keys(resdef.native.headers).forEach((key) => {
                            callback(resdef.native.headers[key], key, this);
                        });
                    }
                }
            },
            err: resdef.err
        };
        return mres;
    }
    (0, node_test_1.test)('exists', async () => {
        (0, node_assert_1.equal)('function', typeof runners.auth.subject);
        (0, node_assert_1.equal)('function', typeof runners.body.subject);
        (0, node_assert_1.equal)('function', typeof runners.contextify.subject);
        (0, node_assert_1.equal)('function', typeof runners.done.subject);
        (0, node_assert_1.equal)('function', typeof runners.error.subject);
        (0, node_assert_1.equal)('function', typeof runners.findparam.subject);
        (0, node_assert_1.equal)('function', typeof runners.fullurl.subject);
        (0, node_assert_1.equal)('function', typeof runners.method.subject);
        (0, node_assert_1.equal)('function', typeof runners.operator.subject);
        (0, node_assert_1.equal)('function', typeof runners.options.subject);
        (0, node_assert_1.equal)('function', typeof runners.params.subject);
        (0, node_assert_1.equal)('function', typeof runners.query.subject);
        (0, node_assert_1.equal)('function', typeof runners.reqform.subject);
        (0, node_assert_1.equal)('function', typeof runners.request.subject);
        (0, node_assert_1.equal)('function', typeof runners.resbasic.subject);
        (0, node_assert_1.equal)('function', typeof runners.resbody.subject);
        (0, node_assert_1.equal)('function', typeof runners.resform.subject);
        (0, node_assert_1.equal)('function', typeof runners.resheaders.subject);
        (0, node_assert_1.equal)('function', typeof runners.response.subject);
        (0, node_assert_1.equal)('function', typeof runners.spec.subject);
    });
    // test('auth-basic', async () => {
    //   const { runset, spec, subject } = runners.auth
    //   await runset(spec.basic, undefined, (subject: any) => (vin: any) => {
    //     return subject(vin, vin.spec)
    //   })
    // })
    // // NOTE: the name utilbody avoids conflict with resbody when running individual tests.
    // test('utilbody-basic', async () => {
    //   const { runset, spec, subject } = runners.body
    //   await runset(spec.basic, subject)
    // })
    (0, node_test_1.test)('contextify-basic', async () => {
        const { runset, spec, subject } = runners.contextify;
        await runset(spec.basic, subject);
    });
    // test('done-basic', async () => {
    //   const { runset, spec, subject } = runners.done
    //   await runset(spec.basic, subject)
    // })
    // test('error-basic', async () => {
    //   const { runset, spec, subject } = runners.error
    //   await runset(spec.basic, subject)
    // })
    // test('findparam-basic', async () => {
    //   const { runset, spec, subject } = runners.findparam
    //   await runset(spec.basic, subject)
    // })
    // test('fullurl-basic', async () => {
    //   const { runset, spec, subject } = runners.fullurl
    //   await runset(spec.basic, subject)
    // })
    // test('utilheaders-basic', async () => {
    //   const { runset, spec, subject } = runners.headers
    //   await runset(spec.basic, subject)
    // })
    (0, node_test_1.test)('method-basic', async () => {
        const { runset, spec, subject } = runners.method;
        await runset(spec.basic, subject);
    });
    // test('operator-basic', async () => {
    //   const { runset, spec, subject } = runners.operator
    //   await runset(spec.basic, subject)
    // })
    // test('options-basic', async () => {
    //   const { runset, spec, subject, client } = runners.options
    //   await runset(spec.basic, (vin: any) => {
    //     vin.prep.utility = client.utility()
    //     return subject(vin.prep)
    //   })
    // })
    // test('params-basic', async () => {
    //   const { runset, spec, subject } = runners.params
    //   await runset(spec.basic, subject)
    // })
    // test('query-basic', async () => {
    //   const { runset, spec, subject } = runners.query
    //   await runset(spec.basic, subject)
    // })
    // test('reqform-basic', async () => {
    //   const { runset, spec, subject } = runners.reqform
    //   await runset(spec.basic, subject)
    // })
    // test('request-basic', async () => {
    //   const { runset, spec, subject } = runners.request
    //   await runset(spec.basic, subject)
    // })
    // test('resbasic-basic', async () => {
    //   const { runset, spec, subject } = runners.resbasic
    //   await runset(spec.basic, (ctx: any) => {
    //     ctx.response = MockResponse(ctx.response)
    //     return subject(ctx)
    //   })
    // })
    // test('resbody-basic', async () => {
    //   const { runset, spec, subject } = runners.resbody
    //   await runset(spec.basic, (ctx: any) => {
    //     ctx.response = MockResponse(ctx.response)
    //     return subject(ctx)
    //   })
    // })
    // test('resform-basic', async () => {
    //   const { runset, spec, subject } = runners.resform
    //   await runset(spec.basic, subject)
    // })
    // test('resheaders-basic', async () => {
    //   const { runset, spec, subject } = runners.resheaders
    //   await runset(spec.basic, (ctx: any) => {
    //     ctx.response = MockResponse(ctx.response)
    //     return subject(ctx)
    //   })
    // })
    // test('response-basic', async () => {
    //   const { runset, spec, subject } = runners.response
    //   await runset(spec.basic, (ctx: any) => {
    //     ctx.response = MockResponse(ctx.response)
    //     return subject(ctx)
    //   })
    // })
    // test('spec-basic', async () => {
    //   const { runset, spec, subject } = runners.spec
    //   await runset(spec.basic, subject)
    // })
});
//# sourceMappingURL=PrimaryUtility.test.js.map