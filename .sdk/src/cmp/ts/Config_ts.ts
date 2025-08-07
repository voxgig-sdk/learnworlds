
import * as Path from 'node:path'

import {
  cmp, each, indent,
  File, Content, Fragment
} from '@voxgig/sdkgen'




const Config = cmp(async function Config(props: any) {
  const { target, ctx$: { model } } = props
  const { main: { sdk: { entity } } } = model

  const ff = Path.normalize(__dirname + '/../../../src/cmp/ts/fragment/')

  const headers = model?.main?.sdk?.config?.headers || {}

  File({ name: 'Config.' + target.ext }, () => {

    Fragment({
      from: ff + 'Config.fragment.ts',

      replace: {
        "'HEADERS'": indent(JSON.stringify(headers, null, 2), 4).trim(),
        '// #EntityConfigs': () => each(entity, (entity: any) => {
          Content(`
      ${entity.name}: {
      },
`)
        })
      }
    })
  })
})


export {
  Config
}
