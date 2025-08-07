


import { cmp, Content } from '@voxgig/sdkgen'


const MainEntity = cmp(async function MainEntity(props: any) {
  const { entity } = props

  Content(`
  entdef.${entity.name} = make${entity.Name}Actions()
`)

})


export {
  MainEntity
}
