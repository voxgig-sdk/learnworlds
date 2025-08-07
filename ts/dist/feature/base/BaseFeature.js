"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFeature = void 0;
class BaseFeature {
    version = '0.0.1';
    name = 'base';
    active = true;
    init(_ctx, _options) { }
    PostConstruct(_ctx) { }
    PostConstructEntity(_ctx) { }
    SetData(_ctx) { }
    GetData(_ctx) { }
    GetMatch(_ctx) { }
    PreOperation(_ctx) { }
    PreSpec(_ctx) { }
    PreRequest(_ctx) { }
    PreResponse(_ctx) { }
    PreResult(_ctx) { }
    PostOperation(_ctx) { }
}
exports.BaseFeature = BaseFeature;
//# sourceMappingURL=BaseFeature.js.map