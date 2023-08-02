const urlEndpoint = '/post'

// [TODO] bad post_id

export default async function getPost (options) {
  const {
    params: {
      post_id
    },
    urlOrigin,
    urlBase
  } = options
  const url = new URL(urlBase + urlEndpoint, urlOrigin)
  url.searchParams.append('id', post_id)
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const request = new Request(url, requestOptions)

  const response = await fetch(request)
  if (!response.ok) {
    console.error(response.status)
    console.error(await response.text())
    throw new Error('bad response')
  }
  const json = await response.json()
  const post = json

  const {
    post_view: {
      community: {
        actor_id: communityUrl,
        title: communityTitle
      },
      counts: {
        comments: countsComments,
        upvotes: countsUpvotes,
        downvotes: countsDownvotes,
        score: countsScore
      },
      creator: {
        avatar: creatorAvatar,
        display_name: creatorDisplayName,
      },
      post: {
        ap_id: postUrl,
        name: postName,
        published: postPublished,
        body: postBody
      }
    }
  } = post

  return {
    communityUrl,
    communityTitle,
    countsComments,
    countsUpvotes,
    countsDownvotes,
    countsScore,
    creatorAvatar,
    creatorDisplayName,
    postUrl,
    postName,
    postPublished: (new Date(postPublished)).toLocaleString(),
    postBody: marked.parse(postBody, { mangle: false, headerIds: false }),
  }
}