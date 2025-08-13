"use strict";
/**
 * Shared utility functions for unit tests
 *
 * This module provides common helper functions used across unit tests
 * for creating test data, transformations, validations, and environment overrides.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStepData = makeStepData;
exports.makeMatch = makeMatch;
exports.makeReqdata = makeReqdata;
exports.makeValid = makeValid;
exports.makeCtrl = makeCtrl;
exports.envOverride = envOverride;
// Creates a new step data structure within the data model
function makeStepData(dm, stepname) {
    dm.s[stepname] = {
        entity: undefined,
        match: undefined,
        reqdata: undefined,
        resdata: undefined,
    };
    return dm.s[stepname];
}
// Transforms and creates a match object using the provided transform function
function makeMatch(dm, transform, match) {
    return transform({}, match, { meta: { dm } });
}
// Transforms and creates request data using the provided transform function
function makeReqdata(dm, transform, data) {
    return transform({}, data, { meta: { dm } });
}
// Validates data against validation rules and returns the result
function makeValid(dm, validate, data, valid) {
    valid["`$OPEN`"] = true;
    // console.log('MV', valid, data)
    // console.dir(dm, { depth: null })
    return validate(data, valid, { meta: { '`$EXISTS`': true, dm } });
}
// Creates a control object for test explanations when enabled
function makeCtrl(explain) {
    return explain ? { explain: {} } : undefined;
}
// CLAUDE: add a full stop to each function comment
// Overrides configuration values with environment variables if available
function envOverride(m) {
    if ('TRUE' === process.env.LEARNWORLDS_TEST_LIVE ||
        'TRUE' === process.env.LEARNWORLDS_TEST_OVERRIDE) {
        Object.entries(m).map(n => {
            let envval = process.env[n[0]];
            if (null != envval) {
                envval = envval.trim();
                m[n[0]] = envval.startsWith('{') ? JSON.parse(envval) : envval;
            }
        });
    }
    m.LEARNWORLDS_TEST_EXPLAIN = process.env.LEARNWORLDS_TEST_EXPLAIN || m.LEARNWORLDS_TEST_EXPLAIN;
    return m;
}
//# sourceMappingURL=utility.js.map