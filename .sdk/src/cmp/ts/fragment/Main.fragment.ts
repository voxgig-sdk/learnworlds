
import type { Feature } from './types'

import { Config } from './Config'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'

const utility = new Utility()


class ProjectNameSDK {
  #options: any
  #utility = utility

  _features: Feature[]


  constructor(options?: any) {

    const ctx = this.#utility.contextify({
      client: this,
      utility: this.#utility,
      config: Config,
      options,
    })

    this.#options = this.#utility.options(ctx)

    ctx.options = this.#options

    this._features = []

    const addfeature = this.#utility.addfeature
    const initfeature = this.#utility.initfeature

    // #BuildFeatures

    if (null != this.#options.extend) {
      for (let f of this.#options.extend) {
        addfeature(ctx, f)
      }
    }

    for (let f of this._features) {
      initfeature(ctx, f)
    }

    const featurehook = this.#utility.featurehook
    featurehook(ctx, 'PostConstruct')
  }


  options() {
    return { ...this.#options }
  }


  utility() {
    return { ...this.#utility }
  }


  // <[SLOT]>


  static test(testopts?: any, sdkopts?: any) {
    const active = null == testopts ? false : null == testopts.active ? true : !!testopts.active
    testopts = testopts || {}
    testopts.active = active

    sdkopts = sdkopts || {}
    sdkopts.feature = sdkopts.feature || {}
    sdkopts.feature.test = testopts || {}
    sdkopts.feature.test.active = true

    return new ProjectNameSDK(sdkopts)
  }


  tester(testopts?: any, sdkopts?: any) {
    return ProjectNameSDK.test(testopts, sdkopts)
  }

}


class ProjectNameEntity {

}



const SDK = ProjectNameSDK

export {
  utility,

  BaseFeature,
  ProjectNameEntity,

  ProjectNameSDK,
  SDK,
}


