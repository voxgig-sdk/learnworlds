
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LearnworldsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await LearnworldsSDK.test()
    // console.log('testsdk', testsdk)
    equal(null !== testsdk, true)
  })

})
