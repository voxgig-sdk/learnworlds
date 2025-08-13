"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetcher = fetcher;
// Make HTTP call using library. Replace this utility for mocking etc.
async function fetcher(ctx, fullurl, fetchdef) {
    if ('live' !== ctx.client._mode) {
        return Error('Request blocked by mode: "' + ctx.client._mode +
            '" (URL was: "' + fullurl + '")');
    }
    const options = ctx.client.options();
    const fetch = options.system.fetch;
    const response = await fetch(fullurl, fetchdef);
    return response;
}
//# sourceMappingURL=FetcherUtility.js.map