import { marked } from 'marked'

export default class Comment {
  static createComments (commentsRaw) {
    new Comment()
    commentsRaw
      .sort((a, b) => {
        return a.comment.path.length - b.comment.path.length
      })
      .forEach((commentRaw) => {
        new Comment(commentRaw)
      })
  }

  static get root () {
    return Comment.comments[0]
  }

  children = []

  constructor (rawComment) {
    if (!rawComment) {
      this.id = 0
      Comment.comments = { 0: this }
      return
    }
    const {
      comment: {
        id,
        creator_id: creatorId,
        post_id: postId,
        content,
        published,
        path
      },
      creator: {
        name: creatorName,
        avatar: creatorAvatar,
      },
      counts: {
        score: countsScore,
        upvotes: countsUpvotes,
        downvotes: countsDownvotes,
        child_count: childCount,
        hot_rank: hotRank
      }
    } = rawComment
    Object.assign(
      this,
      {
        id,
        creatorId,
        postId,
        content: marked.parse(content, { mangle: false, headerIds: false }),
        published,
        path,
        depth: path.match(/\./g).length - 1,
        creatorName,
        creatorAvatar,
        countsScore,
        countsUpvotes,
        countsDownvotes,
        childCount,
        hotRank
      }
    )
    const parent = parseInt(path.match(/(\d{7}|0)\.\d{7}$/)[1], 10)
    if (!Comment.comments[parent]) {
      // console.error(Comment.comments)
      console.warn(`comment missing parent: ${parent}`, this)
      return
    }
    Comment.comments[id] = this
    Comment.comments[parent].children.push(this)
  }

  apply (fn) {
    const result = []
    if (this.id !== 0) {
      result.push(fn(this))
    }
    this.children.forEach((child) => result.push(...child.apply(fn)))
    return result
  }
}
