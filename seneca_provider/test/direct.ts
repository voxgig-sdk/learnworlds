
import Path from 'node:path'

const envlocal = Path.normalize(__dirname + '/../../.env.local')
require('dotenv').config({ quiet: true, path: [envlocal] })

import Seneca from 'seneca'

import LearnworldsProvider from '..'


const useridmap = JSON.parse(process.env.LEARNWORLDS_TEST_USER_ENTID || '{}')
const courseidmap = JSON.parse(process.env.LEARNWORLDS_TEST_COURSE_ENTID || '{}')
const formidmap = JSON.parse(process.env.LEARNWORLDS_TEST_FORM_ENTID || '{}')
const assessmentidmap = JSON.parse(process.env.LEARNWORLDS_TEST_ASSESSMENT_ENTID || '{}')


run()


async function run() {
  try {
    const seneca = Seneca()
      .test()
    // .test('print')

    seneca
      // .use('promisify')
      .use('entity')
      .use('env', {
        var: {
          LEARNWORLDS_BASE: String,
          $LEARNWORLDS_APIKEY: String,
          $LEARNWORLDS_CLIENTID: String,
        }
      })
      .use('provider', {
        provider: {
          Learnworlds: {
            keys: {
              base: { value: '$LEARNWORLDS_BASE' },
              apikey: { value: '$LEARNWORLDS_APIKEY' },
              clientid: { value: '$LEARNWORLDS_CLIENTID' },
            }
          }
        }
      })
      .use(LearnworldsProvider, {
      })

    await seneca.ready()


    let userent = seneca.entity('provider/learnworlds/user')

    let u0d = await userent.load$(useridmap.user01)
    console.log('u0d', u0d)


    let c0ld = await seneca.entity('provider/learnworlds/course').list$()
    console.log('c0ld', c0ld.length)


    let e0l = await seneca.entity('provider/learnworlds/enrollment').list$({
      user_id: useridmap.user01
    })
    console.log('e0l', e0l.length)


    let evl = await seneca.entity('provider/learnworlds/event_log').list$({
      page: 0,
      activity: 'follow'
    })
    console.log('evl', evl.length)



  }
  catch (err: any) {
    console.log(err)
  }
}
