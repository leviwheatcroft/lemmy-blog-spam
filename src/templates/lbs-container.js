import { LitElement, css, html } from 'lit'
import getComments from '../getComments.js'
import getPost from '../getPost.js'
import { resolveOptions, defaults } from '../resolveOptions.js'

export class LbsContainer extends LitElement {
  static properties = {
    paramsMaxDepth: {
      type: String,
      attribute: 'params-max-depth'
    },
    paramsPostId: {
      type: String,
      attribute: 'params-post-id'
    },
    paramsLimit: {
      type: Number,
      attribute: 'params-limit'
    },
    urlBase: {
      type: String,
      attribute: 'url-base'
    },
    urlOrigin: {
      type: String,
      attribute: 'url-origin'
    },
    hideDepth: {},
    _post: {
      state: true
    },
    _children: {
      state: true
    },
    _commentCount: {
      state: true
    }
  }

  static styles = css`
    :host {
      font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
      font-size: 16px;
    }
    .loader {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .post-container {
      padding: 16px;
      // mx-auto ?
    }
    .headline .title {
      font-weight: 600;
    }
    .meta {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      column-gap: 16px;
    }
    .meta .expander {
      flex-grow: 1;
    }
    .meta .post-link a {
      color: rgb(100, 100, 100)
    }
  `

  constructor () {
    super()
    this._commentCount = 0
  }

  progress (count) {
    this._commentCount += count
    this.hideDepth = defaults.hideDepth
  }

  attributeChangedCallback (attribute, _, value) {
    const map = {
      'params-max-depth': 'paramsMaxDepth',
      'params-post-id': 'paramsPostId',
      'params-limit': 'paramsLimit',
      'url-base': 'urlBase',
      'url-origin': 'urlOrigin',
      'hide-depth': 'hideDepth'
    }
    this[map[attribute]] = value
  }

  async firstUpdated () {
    const msgs = []
    /* eslint-disable curly, nonblock-statement-body-position */
    if (!this.paramsPostId) msgs.push('missing params-post-id')
    if (!this.urlOrigin) msgs.push('missing url-base')
    /* eslint-enable curly, nonblock-statement-body-position */
    if (msgs.length) {
      console.error('missing options')
      msgs.forEach((m) => console.error(m))
      return
    }

    const options = resolveOptions({
      params: {
        max_depth: this.paramsMaxDepth,
        post_id: this.paramsPostId,
        limit: this.paramsLimit
      },
      urlOrigin: this.urlOrigin,
      hideDepth: this.hideDepth
    })
    const post = await getPost(options)
    this._post = post

    const { children } = await getComments(post, this.progress.bind(this), options)
    this._children = children
  }

  render () {
    if (!this._post)  {
      return html`
        <div class="loader">
          <span>loading</span>
        </div>
      `
    }
    if (!this._children) {
      return html`
        <div class="loader">
          <span>loading</span>
          <span>${this._commentCount} / ${this._post.countsComments}</span>
        </div>
      `
    }
    return html`
      <div class="post-container">
        <div class="post">
          <div class="headline">
            <span class="title">
              ${this._post.postName}
            </span>
          </div>
          <div class="meta">
            <lbs-community
              .url=${this._post.communityUrl}
              .title=${this._post.communityTitle}
            ></lbs-community>
            <lbs-votes
              .total=${this._post.countsScore}
              .up=${this._post.countsUpvotes}
              .down=${this._post.countsDownvotes}
            ></lbs-votes>
            <span class="expander"></span>
            <span class="post-link">
              <a .href=${this._post.postUrl}><icon-external-link></icon-external-link></a>
            </span>
          </div>
        </div>
        <div class="comments">
          ${this._children.map((child) => {
            return html`
              <lbs-comment
                .creatorName=${child.creatorName}
                .published=${child.published}
                .countsScore=${child.countsScore}
                .countsUpvotes=${child.countsUpvotes}
                .countsDownvotes=${child.countsDownvotes}
                .children=${child.children}
                .content=${child.content}
                .depth=${child.depth}
                .hideDepth=${this.hideDepth}
              ></lbs-comment>
            `
          })}
        </div>
      </div>
    `
  }
}

customElements.define('lbs-container', LbsContainer)