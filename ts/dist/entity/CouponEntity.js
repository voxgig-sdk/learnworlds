"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponEntity = void 0;
const node_util_1 = require("node:util");
class CouponEntity {
    #client;
    #entopts;
    #utility;
    #data;
    #match;
    _entctx;
    constructor(client, entopts) {
        // super()
        entopts = entopts || {};
        entopts.active = false !== entopts.active;
        this.#client = client;
        this.#entopts = entopts;
        this.#utility = client.utility();
        this.#data = {};
        this.#match = {};
        const contextify = this.#utility.contextify;
        this._entctx = contextify({
            entity: this,
            entopts,
        }, client._rootctx);
        const featurehook = this.#utility.featurehook;
        featurehook(this._entctx, 'PostConstructEntity');
    }
    entopts() {
        return { ...this.#entopts };
    }
    client() {
        return this.#client;
    }
    make() {
        return new CouponEntity(this.#client, this.entopts());
    }
    data(data) {
        const featurehook = this.#utility.featurehook;
        if (null != data) {
            featurehook(this._entctx, 'SetData');
            this.#data = { ...data };
        }
        let out = { ...this.#data };
        featurehook(this._entctx, 'GetData');
        return out;
    }
    match(match) {
        const featurehook = this.#utility.featurehook;
        if (null != match) {
            featurehook(this._entctx, 'SetMatch');
            this.#match = { ...match };
        }
        let out = { ...this.#match };
        featurehook(this._entctx, 'GetMatch');
        return out;
    }
    toJSON() {
        return { ...(this.#data || {}), _entity: 'Coupon' };
    }
    toString() {
        return 'Coupon ' + this.#utility.struct.jsonify(this.#data);
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
    async list(reqmatch, ctrl) {
        let entity = this;
        let client = this.#client;
        const utility = this.#utility;
        const { contextify, done, error, featurehook, operator, opify, request, response, result, spec, } = utility;
        let fres = undefined;
        let op = opify({
            entity: 'coupon',
            name: 'list',
            path: '/v2/promotions/{pid}/coupons',
            pathalt: [{ "path": "/v2/promotions/{pid}/coupons", "pid": true }],
            params: [
                "pid"
            ],
            alias: {},
            state: {},
            reqform: "`body`",
            resform: "`body.data`",
            validate: { "params": { "pid": "`$STRING`", "Authorization": "`$STRING`", "Lw-Client": "`$STRING`" } },
        });
        let ctx = contextify({
            current: new WeakMap(),
            ctrl,
            op,
            match: this.#match,
            data: this.#data,
            reqmatch
        }, this._entctx);
        try {
            fres = featurehook(ctx, 'PreOperation');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.operator = operator(ctx);
            if (ctx.out.operator instanceof Error) {
                return error(ctx, ctx.out.operator);
            }
            fres = featurehook(ctx, 'PreSpec');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.spec = spec(ctx);
            if (ctx.out.spec instanceof Error) {
                return error(ctx, ctx.out.spec);
            }
            fres = featurehook(ctx, 'PreRequest');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.request = await request(ctx);
            if (ctx.out.request instanceof Error) {
                return error(ctx, ctx.out.request);
            }
            fres = featurehook(ctx, 'PreResponse');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.response = await response(ctx);
            if (ctx.out.response instanceof Error) {
                return error(ctx, ctx.out.response);
            }
            fres = featurehook(ctx, 'PreResult');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.result = await result(ctx);
            if (ctx.out.result instanceof Error) {
                return error(ctx, ctx.out.result);
            }
            fres = featurehook(ctx, 'PostOperation');
            if (fres instanceof Promise) {
                await fres;
            }
            if (null != ctx.result) {
                if (null != ctx.result.resmatch) {
                    this.#match = ctx.result.resmatch;
                }
            }
            return done(ctx);
        }
        catch (err) {
            err = this.#unexpected(ctx, err);
            if (err) {
                throw err;
            }
            else {
                return undefined;
            }
        }
    }
    async create(reqdata, ctrl) {
        let entity = this;
        let client = this.#client;
        const utility = this.#utility;
        const { contextify, done, error, featurehook, operator, opify, request, response, result, spec, } = utility;
        let fres = undefined;
        let op = opify({
            entity: 'coupon',
            name: 'create',
            path: '/v2/promotions/{promotion_id}/coupons-bulk',
            pathalt: [{ "path": "/v2/promotions/{pid}/coupons", "pid": true, "promotion_id": false }, { "path": "/v2/promotions/{promotion_id}/coupons-bulk", "promotion_id": true, "pid": false }],
            params: [
                "pid",
                "promotion_id"
            ],
            alias: {},
            state: {},
            reqform: "`reqdata`",
            resform: "`body`",
            validate: { "params": { "promotion_id": "`$STRING`", "Authorization": "`$STRING`", "Lw-Client": "`$STRING`" } },
        });
        let ctx = contextify({
            current: new WeakMap(),
            ctrl,
            op,
            match: this.#match,
            data: this.#data,
            reqdata
        }, this._entctx);
        try {
            fres = featurehook(ctx, 'PreOperation');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.operator = operator(ctx);
            if (ctx.out.operator instanceof Error) {
                return error(ctx, ctx.out.operator);
            }
            fres = featurehook(ctx, 'PreSpec');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.spec = spec(ctx);
            if (ctx.out.spec instanceof Error) {
                return error(ctx, ctx.out.spec);
            }
            fres = featurehook(ctx, 'PreRequest');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.request = await request(ctx);
            if (ctx.out.request instanceof Error) {
                return error(ctx, ctx.out.request);
            }
            fres = featurehook(ctx, 'PreResponse');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.response = await response(ctx);
            if (ctx.out.response instanceof Error) {
                return error(ctx, ctx.out.response);
            }
            fres = featurehook(ctx, 'PreResult');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.result = await result(ctx);
            if (ctx.out.result instanceof Error) {
                return error(ctx, ctx.out.result);
            }
            fres = featurehook(ctx, 'PostOperation');
            if (fres instanceof Promise) {
                await fres;
            }
            if (null != ctx.result) {
                if (null != ctx.result.resdata) {
                    this.#data = ctx.result.resdata;
                }
            }
            return done(ctx);
        }
        catch (err) {
            err = this.#unexpected(ctx, err);
            if (err) {
                throw err;
            }
            else {
                return undefined;
            }
        }
    }
    #unexpected(ctx, err) {
        const ctrl = ctx.ctrl;
        ctrl.err = err;
        if (ctrl.explain) {
            const { clean, struct } = this.#utility;
            const { delprop, clone } = struct;
            ctx.ctrl.explain = clean(ctx, ctx.ctrl.explain);
            delprop(ctx.ctrl.explain.result, 'err');
            if (null != ctx.result && null != ctx.result.err) {
                ctrl.explain.err = clean(ctx, {
                    ...clone({ err: ctx.result.err }).err,
                    message: ctx.result.err.message,
                    stack: ctx.result.err.stack,
                });
            }
            const cleanerr = clean(ctx, {
                ...clone({ err }).err,
                message: err.message,
                stack: err.stack,
            });
            if (null == ctrl.explain.err) {
                ctrl.explain.err = cleanerr;
            }
            else if (ctrl.explain.err.message != cleanerr.message) {
                ctrl.explain.unexpected = cleanerr;
            }
        }
        if (false === ctrl.throw) {
            return undefined;
        }
        return err;
    }
}
exports.CouponEntity = CouponEntity;
//# sourceMappingURL=CouponEntity.js.map