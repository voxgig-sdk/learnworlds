"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityTest = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const struct_1 = require("@voxgig/struct");
const EntityTest = (0, sdkgen_1.cmp)(function EntityTest(props) {
    const ctx$ = props.ctx$;
    const { model } = props.ctx$;
    const { target, entity, entrep, ff } = props;
    (0, sdkgen_1.Folder)({ name: 'test/entity' }, () => {
        (0, sdkgen_1.File)({ name: entity.Name + 'Entity.test.' + target.name }, () => {
            (0, sdkgen_1.Fragment)({
                from: ff + 'Entity.test.fragment.ts',
                replace: {
                    ...entrep
                }
            }, () => {
                // TODO: should be EntityFlow
                const basicflow = model?.main?.sdk?.flow?.['Basic' + entity.Name + 'Flow'];
                const dobasic = basicflow && true === basicflow.active;
                if (!dobasic) {
                    return;
                }
                let indent = 2;
                (0, sdkgen_1.Slot)({ name: 'basicSetup' }, () => {
                    (0, sdkgen_1.Content)(`
function basicSetup(extra?: any) {
  extra = extra || {}

  const options = ${(0, struct_1.jsonify)(basicflow.test, { offset: indent - 2 })}

  const setup: any = {
    dm: {
      p: envOverride(${(0, struct_1.jsonify)(basicflow.param, { offset: 2 + indent })}),
      s: {},
    },
    options,
  }

  const { merge } = utility.struct

  let client = ${model.Name}SDK.test(options, extra)
  if ('TRUE' === setup.dm.p.${model.NAME}_TEST_LIVE) {
    client = new ${model.Name}SDK(merge([
      {
        apikey: process.env.${model.NAME}_APIKEY,
      },
      extra])
    )
  }
  
  setup.client = client    
  setup.struct = client.utility().struct
  setup.explain = 'TRUE' === setup.dm.p.${model.Name}_TEST_EXPLAIN

  return setup
}
`);
                });
                indent = 6;
                (0, sdkgen_1.Slot)({ name: 'basic' }, () => {
                    (0, sdkgen_1.Content)(`
    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {
`);
                    ctx$.util.makeFlow(basicflow, {
                        indent: indent,
                        model,
                    }, {
                        FlowStep: '\n// Step: $$__stepdef.name$$ - $$__stepdef.action$$ $$__stepdef.entity$$\n',
                        GetEntity: [
                            'const $$__stepdef.name$$ = makeStepData(dm, \'$$__stepdef.name$$\')\n',
                            (stepdef, pctx) => pctx.data.step[stepdef.name] = stepdef,
                            [
                                '__stepdef._ref',
                                '$$__stepdef.name$$.entity = $$__stepdef._ref$$.entity\n',
                                '$$__stepdef.name$$.entity = client.$$__stepdef.Entity$$()\n',
                            ],
                        ],
                        EntityMatch: [
                            (stepdef) => stepdef.match_JSON = (0, struct_1.jsonify)(stepdef.match),
                            [
                                '__stepdef.match',
                                '$$__stepdef.name$$.match = makeMatch(dm, transform, $$__stepdef.match_JSON$$)\n'
                            ]
                        ],
                        EntityData: [
                            (stepdef) => stepdef.reqdata_JSON = (0, struct_1.jsonify)(stepdef.reqdata),
                            [
                                '__stepdef.reqdata',
                                '$$__stepdef.name$$.reqdata = ' +
                                    'makeReqdata(dm, transform, $$__stepdef.reqdata_JSON$$)\n'
                            ]
                        ],
                        EntityAction: [
                            // 'ctrl = explain ? { explain: {} } : undefined\n',
                            [
                                { __stepdef: { action: { '`$OR`': ['update', 'create', 'remove'] } } },
                                '$$__stepdef.name$$.resdata =\n' +
                                    '  await $$__stepdef.name$$.entity.$$__stepdef.action$$(' +
                                    '$$__stepdef.name$$.reqdata, ctrl = makeCtrl(explain))\n'
                            ],
                            [
                                { __stepdef: { action: 'load' } },
                                '$$__stepdef.name$$.resdata =\n' +
                                    '  await $$__stepdef.name$$.entity.load($$__stepdef.name$$.match, ctrl = makeCtrl(explain))\n'
                            ],
                            [
                                { __stepdef: { action: 'list' } },
                                '$$__stepdef.name$$.reslist =\n' +
                                    '  await $$__stepdef.name$$.entity.list($$__stepdef.name$$.match, ctrl = makeCtrl(explain))\n'
                            ],
                        ],
                        ExplainAction: 'if( explain ) { console.log(\'$$__stepdef.name$$: \', ctrl.explain) }\n',
                        ValidateAction: [
                            (stepdef) => {
                                stepdef.valid_JSON = (0, struct_1.jsonify)(stepdef.valid);
                                stepdef.reslist_DATA =
                                    null == stepdef.reslist ? [] : stepdef.reslist.map((ent) => ent.data());
                            },
                            [
                                { __stepdef: { action: { '`$OR`': ['load', 'update', 'create', 'remove'] } } },
                                'makeValid(dm, validate, $$__stepdef.name$$.resdata, ' +
                                    '$$__stepdef.valid_JSON$$)\n'
                            ],
                            [
                                { __stepdef: { action: 'list' } },
                                'makeValid(dm, validate, $$__stepdef.name$$.reslist_DATA, ' +
                                    '$$__stepdef.valid_JSON$)\n'
                            ],
                        ]
                    });
                    (0, sdkgen_1.Content)(` 
    }
    catch(err: any) {
      console.dir(dm, {depth: null})
      if( explain ) { console.dir(ctrl.explain, {depth: null}) }
      throw err
    }
`);
                });
            });
        });
    });
});
exports.EntityTest = EntityTest;
//# sourceMappingURL=EntityTest_ts.js.map