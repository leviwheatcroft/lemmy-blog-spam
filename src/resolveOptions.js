const defaults = {
  params: {
    limit: 12,
    max_depth: false,
    post_id: false,
    sort: false
  },
  container: '#lemmy-blog-spam',
  urlOrigin: 'https://lemmy.ml',
  urlBase: '/api/v3'
}

export default function resolveOptions (options) {
  if (!options.params || !options.params.post_id) {
    throw new Error('params.post_id is required')
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
