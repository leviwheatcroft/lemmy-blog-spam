// https://join-lemmy.org/api/interfaces/GetComments.html

import './styles/index.css'
import resolveOptions from './resolveOptions.js'
import getComments from './getComments.js'
import container from './templates/container.handlebars'
import getPost from './getPost.js'
import applyJs from './applyJs.js'

async function lemmyBlogSpam (options = {}) {
  options = resolveOptions(options)
  const post = await getPost(options)
  const root = await getComments(post, options)
  const mount = document.querySelector(options.container)

  const locals = { root, post }

  mount.insertAdjacentHTML('afterbegin', container(locals))
  applyJs()
}

window.lemmyBlogSpam = lemmyBlogSpam

// lemmyBlogSpam({ params: { post_id: '2511773' } })