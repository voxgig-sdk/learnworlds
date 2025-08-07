
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })


import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ProjectNameSDK, BaseFeature, utility } from '../..'

import {
  makeStepData,
  makeMatch,
  makeReqdata,
  makeValid,
  makeCtrl,
  envOverride,
} from '../utility'


describe('EntityNameEntity', async () => {

  test('instance', async () => {
    const testsdk = ProjectNameSDK.test()
    const ent = testsdk.EntityName()
    equal(null !== ent, true)
  })


  test('basic', async () => {
    // <[SLOT:basic]>
  })
})


// <[SLOT:basicSetup]>
