
import * as Path from 'node:path'

import {
  cmp, each, names, cmap,
  List, File, Content, Copy, Folder, Fragment, Line, FeatureHook,
} from '@voxgig/sdkgen'


import { Package } from './Package_ts'
import { Config } from './Config_ts'
import { MainEntity } from './MainEntity_ts'
import { Test } from './Test_ts'


const Main = cmp(async function Main(props: any) {
  const { target } = props
  const { model } = props.ctx$

  const { entity } = model.main.api
  const { feature } = model.main.sdk

  Package({ target })

  Test({ target })

  Folder({ name: 'src' }, () => {

    File({ name: model.const.Name + 'SDK.' + target.name }, () => {

      Line(`// ${model.const.Name} ${target.Name} SDK\n`)

      List({ item: feature }, ({ item }: any) =>
        Line(`import { ${item.Name + 'Feature'} } ` +
          `from './feature/${item.name}/${item.Name}Feature'`))

      List({ item: entity }, ({ item }: any) =>
        Line(`import { ${item.Name}Entity } from './entity/${item.Name}Entity'`))

      Fragment(
        {
          from: Path.normalize(__dirname + '/../../../src/cmp/ts/fragment/Main.fragment.ts'),
          replace: {
            ...props.ctx$.stdrep,

            '#BuildFeatures': ({ indent }: any) => {
              List({ item: feature, line: false }, ({ item }: any) =>
                Line({ indent },
                  `addfeature(ctx, new ${item.Name}Feature())`))
            },

            '#Feature-Hook': ({ name, indent }: any) => Content({ indent }, `
fres = featurehook(ctx, '${name}')
if (fres instanceof Promise) { await fres }
`),

            '#TestOptions': ({ indent }: any) => {
              const topts = {
                feature: cmap(feature, {
                  active: false
                }),
              }
              Content({ indent },
                JSON.stringify(topts, null, 2)
                  .replace(/^{\n  /, '').replace(/\n}$/, ',\n').replace(/\n  /g, '\n'))
            }
          }
        },

        // Entities
        () => {
          each(entity, (entity: any) => {
            const entprops = { target, entity, entitySDK: model.main.api.entity[entity.name] }
            MainEntity(entprops)
          })
        })
    })

    Config({ target })

  })
})


export {
  Main
}
