import defaults from '../defaults.js'

function resolveOptions (options) {
  options = Object.assign(
    {},
    defaults,
    Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined))
  )

  if (!options.paramPostId) {
    throw new Error('paramPostId is required')
  }
  if (!options.urlOrigin) {
    throw new Error('urlOrigin is required')
  }

  return options
}

export { resolveOptions, defaults }