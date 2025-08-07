
import { cmp, Folder } from '@voxgig/sdkgen'

// import { Quick } from './Quick_ts'
import { TestMain } from './TestMain_ts'


const Test = cmp(function Test(props: any) {
  const { target } = props

  Folder({ name: 'test' }, () => {
    // Quick({ target })
    TestMain({ target })
  })
})


export {
  Test
}
