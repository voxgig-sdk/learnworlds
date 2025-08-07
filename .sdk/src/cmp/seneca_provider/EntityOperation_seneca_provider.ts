

import {
  cmp, camelify,
  Content, Fragment
} from '@voxgig/sdkgen'


import { jsonify } from '@voxgig/struct'


const EntityOperation = cmp(function Operation(props: any) {
  const { model } = props.ctx$
  const { ff, opname, entity, entrep } = props

  let { indent } = props

  indent = indent.substring(2)
  if ('' == indent) {
    indent = undefined
  }

  Fragment({
    from: ff + 'Entity' + camelify(opname) + 'Op.fragment.ts',
    indent,
    replace: {
      ...entrep,
      EntityName: entity.Name,
      entityname: entity.name,
    }
  })
})


export {
  EntityOperation
}

