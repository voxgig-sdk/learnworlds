/* Copyright © 2025 Seneca Project Contributors, MIT License. */

import Pkg from '../package.json'

import { ProjectNameSDK } from '@voxgig/projectname-sdk'

type ProjectNameProviderOptions = {
  debug: boolean,
  native?: any
}

function ProjectNameProvider(this: any, options: ProjectNameProviderOptions) {
  const seneca: any = this

  const entityBuilder = this.export('provider/entityBuilder')

  seneca.message('sys:provider,provider:projectname,get:info', get_info)

  async function get_info(this: any, _msg: any) {
    return {
      ok: true,
      name: 'projectname',
      version: Pkg.version,
      sdk: {
        name: 'projectname',
        version: (Pkg.dependencies as any)['@voxgig/projectname-sdk'],
      },
    }
  }

  const entdef: any = {}


  // <[SLOT:entity]>




  entityBuilder(this, {
    provider: {
      name: 'projectname',
    },
    entity: entdef
  })

  seneca.prepare(async function(this: any) {
    let res = await this.post(
      'sys:provider,get:keymap,provider:ProjectName'
    )

    if (!res.ok) {
      throw new Error('ProjectName Error: no keymap')
    }

    this.shared.sdk = new ProjectNameSDK(this.util.deep({}, options.native || {}, {
      base: res.keymap.base.value,
      apikey: res.keymap.apikey.value,
      headers: {
        'Lw-Client': res.keymap.clientid.value,
      }
    }))
  })

  return {
    exports: {
      sdk: () => this.shared.sdk,
    },
  }
}

// Default options.
const defaults: ProjectNameProviderOptions = {
  // TODO: Enable debug logging
  debug: false,
}

Object.assign(ProjectNameProvider, { defaults })

export default ProjectNameProvider

if ('undefined' !== typeof module) {
  module.exports = ProjectNameProvider
}


