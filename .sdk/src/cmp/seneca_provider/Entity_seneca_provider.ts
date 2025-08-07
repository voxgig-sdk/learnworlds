
import * as Path from 'node:path'

import {
  cmp, each, camelify, names,
  File, Content, Folder, Fragment, Line, FeatureHook, Slot
} from '@voxgig/sdkgen'


import { EntityOperation } from './EntityOperation_seneca_provider'


const Entity = cmp(function Entity(props: any) {
  const { model, stdrep } = props.ctx$
  const { target, entity } = props

  const entrep = {
    ...stdrep,
  }

  names(entrep, entity.Name, 'EntityName')

  const ff = Path.normalize(__dirname + '/../../../src/cmp/seneca_provider/fragment/')

  Folder({ name: 'src/entity' }, () => {

    File({ name: entity.Name + 'Entity.' + target.ext }, () => {
      Line(`// ${entity.Name} A`)

      const opnames = Object.keys(entity.op)

      const opfrags = opnames
        .reduce((a: any, opname: string) =>
        (a['#' + camelify(opname) + 'Op'] =
          ({ indent }: any) => {
            EntityOperation({ ff, opname, indent, entity, entrep })
          }, a), {})

      Fragment({
        from: ff + 'Entity.fragment.ts',
        indent: 2,
        replace: {
          ...entrep,
          EntityName: entity.Name,
          entityname: entity.name,
          ...opfrags,
        }
      })

    })
  })


})



export {
  Entity
}

