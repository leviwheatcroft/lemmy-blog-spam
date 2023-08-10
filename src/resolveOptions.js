import defaults from '../defaults.js'

function resolveOptions (options) {
  if (!options.params || !options.params.post_id) {
    throw new Error('params.post_id is required')
  }
  if (!options.urlOrigin) {
    throw new Error('urlOrigin is required')
  }
  options.params = Object.assign(
    {},
    defaults.params,
    options.params
  )
  options = Object.assign(
    {},
    defaults,
    options
  )
  return options
}

export { resolveOptions, defaults }