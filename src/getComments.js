import Comment from './Comment.js'

const urlEndpoint = '/comment/list'

export default async function getComments (post, options) {
  const {
    countsComments
  } = post
  const {
    urlOrigin,
    urlBase
  } = options
  const url = new URL(urlBase + urlEndpoint, urlOrigin)
  Object.entries(options.params)
    .filter(([_, v]) => v)
    .forEach(([k, v]) => url.searchParams.append(k, v))
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  
  let page = 0
  const commentsRaw = []

  while (commentsRaw.length < countsComments) {
    page += 1
    url.searchParams.set('page', page)
    const request = new Request(url, requestOptions)
    console.log(url.href)
    const response = await fetch(request)
    if (!response.ok) {
      console.error(response.status)
      console.error(await response.text())
      throw new Error('bad response')
    }
    const json = await response.json()
    const { comments: _commentsRaw } = json
    commentsRaw.push(..._commentsRaw)
  }

  Comment.createComments(commentsRaw)

  return Comment.root
}
