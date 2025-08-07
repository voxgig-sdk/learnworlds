
import {
  cmp, camelify,
  Content, Fragment
} from '@voxgig/sdkgen'


import { jsonify } from '@voxgig/struct'

import { formatJSONSrc } from './utility_ts'


const EntityOperation = cmp(function Operation(props: any) {
  const { model } = props.ctx$
  const { ff, opname, entity, entrep } = props

  let { indent } = props

  indent = indent.substring(2)
  if ('' == indent) {
    indent = undefined
  }

  const entop = entity.op[opname]
  const path = entop.path

  // // TODO: move up to to common Entity
  // const params = JSON.stringify((path.match(/\{[^}]+\}/g) || [])
  //   .map((p: string) => p.substring(1, p.length - 1))
  //   .filter((p: string) => null != p && '' !== p))

  // const aliasmap = JSON.stringify(entitySDK.alias.field)
  const aliasmap = JSON.stringify(entity.alias.field)

  // const hasp = '' != entop.place

  Fragment({
    from: ff + '/Entity' + camelify(opname) + 'Op.fragment.ts',
    eject: ['// EJECT-START', '// EJECT-END'],
    indent,
    replace: {
      ...entrep,
      SdkName: model.const.Name,
      EntityName: entity.Name,
      entityname: entity.name,
      PATH: entop.path,
      "['PATHALT']": entop.pathalt,
      "['PARAM-LIST']": jsonify(Object.keys(entop.param)),
      "{ 'ALIAS': 'MAP' }": aliasmap,
      "'REQFORM'": formatJSONSrc(JSON.stringify(entop.reqform)),
      "'RESFORM'": formatJSONSrc(JSON.stringify(entop.resform)),
      "'VALIDATE'": formatJSONSrc(JSON.stringify(entop.validate)),

      '#Feature-Hook': ({ name, indent }: any) =>
        Content({ indent }, `
fres = featurehook(ctx, '${name}')
if (fres instanceof Promise) { await fres }
`)

    }
  })
})


export {
  EntityOperation
}
