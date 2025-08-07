
/* Utility functions.
 *
 * Many of these functions expect the operation context as the first argument, and
 * assume the following top level properties of the context:
 *   * client: SDK client instance
 *   * op: operation definition
 *   * utility: map of these utility functions
 *   * entity?: SDK entity instance
 *   * spec?: request specification
 *   * response?: unprocessed response
 *   * result?: processed result built from response
 *   * config?: SDK builtin configuration
 *
 */



import { addfeature } from './AddfeatureUtility'
import { auth } from './AuthUtility'
import { body } from './BodyUtility'
import { clean } from './CleanUtility'
import { contextify } from './ContextUtility'
import { done } from './DoneUtility'
import { error } from './ErrorUtility'
import { featurehook } from './FeaturehookUtility'
import { fetcher } from './FetcherUtility'
import { findparam } from './FindparamUtility'
import { fullurl } from './FullurlUtility'
import { headers } from './HeadersUtility'
import { initfeature } from './InitfeatureUtility'
import { method } from './MethodUtility'
import { operator, opify } from './OperatorUtility'
import { options } from './OptionsUtility'
import { params } from './ParamsUtility'
import { query } from './QueryUtility'
import { reqform } from './ReqformUtility'
import { request } from './RequestUtility'
import { resbasic } from './ResbasicUtility'
import { resbody } from './ResbodyUtility'
import { resform } from './ResformUtility'
import { resheaders } from './ResheadersUtility'
import { response } from './ResponseUtility'
import { result } from './ResultUtility'
import { spec } from './SpecUtility'

import { StructUtility } from './StructUtility'


class Utility {

  addfeature = addfeature
  auth = auth
  body = body
  clean = clean
  contextify = contextify
  done = done
  error = error
  featurehook = featurehook
  fetcher = fetcher
  findparam = findparam
  fullurl = fullurl
  headers = headers
  initfeature = initfeature
  method = method
  operator = operator
  opify = opify
  options = options
  params = params
  query = query
  reqform = reqform
  request = request
  resbasic = resbasic
  resbody = resbody
  resform = resform
  resheaders = resheaders
  response = response
  result = result
  spec = spec

  struct = new StructUtility()
}


export {
  Utility
}

