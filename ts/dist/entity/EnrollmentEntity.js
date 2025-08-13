"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentEntity = void 0;
const node_util_1 = require("node:util");
class EnrollmentEntity {
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
        return new EnrollmentEntity(this.#client, this.entopts());
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
        return { ...(this.#data || {}), _entity: 'Enrollment' };
    }
    toString() {
        return 'Enrollment ' + this.#utility.struct.jsonify(this.#data);
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
            entity: 'enrollment',
            name: 'list',
            path: '/v2/users/{user_id}/courses',
            pathalt: [{ "path": "/v2/users/{user_id}/courses", "user_id": true }],
            params: [
                "user_id"
            ],
            alias: {},
            state: {},
            reqform: "`body`",
            resform: "`body.data`",
            validate: { "params": { "user_id": "`$STRING`", "Authorization": "`$STRING`", "Lw-Client": "`$STRING`" } },
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
            entity: 'enrollment',
            name: 'create',
            path: '/v2/users/{user_id}/enrollment',
            pathalt: [{ "path": "/v2/users/{user_id}/enrollment", "user_id": true }],
            params: [
                "user_id"
            ],
            alias: {},
            state: {},
            reqform: "`reqdata`",
            resform: "`body.success`",
            validate: { "params": { "user_id": "`$STRING`", "Authorization": "`$STRING`", "Lw-Client": "`$STRING`" } },
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
    async remove(reqmatch, ctrl) {
        let entity = this;
        let client = this.#client;
        const utility = this.#utility;
        const { contextify, done, error, featurehook, operator, opify, request, response, result, spec, } = utility;
        let fres = undefined;
        let op = opify({
            entity: 'enrollment',
            name: 'remove',
            path: '/v2/users/{user_id}/enrollment',
            pathalt: [{ "path": "/v2/users/{user_id}/enrollment", "user_id": true }],
            params: [
                "user_id"
            ],
            alias: {},
            state: {},
            reqform: "`reqdata`",
            resform: "`body`",
            validate: { "params": { "user_id": "`$STRING`", "Authorization": "`$STRING`", "Lw-Client": "`$STRING`" } },
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
exports.EnrollmentEntity = EnrollmentEntity;
//# sourceMappingURL=EnrollmentEntity.js.map