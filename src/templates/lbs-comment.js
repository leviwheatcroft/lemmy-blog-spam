import { LitElement, css, html, nothing } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

export class LbsComment extends LitElement {
  static properties = {
    creatorName: {},
    published: {},
    countsScore: {},
    countsUpvotes: {},
    countsDownvotes: {},
    content: {},
    children: {},
    _collapsed: {
      type: Boolean,
      state: true
    }
  }

  static styles = css`
    .comment {
      padding: 0 0 0 16px;
      margin: 16px 0 0 0;
      border-width: 1px 0 0 1px;
      border-color: rgba(220, 220, 220, 1);
      border-style: solid;
    }
    .meta {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      column-gap: 16px;
      /* background-color: rgba(100, 100, 100, 0.3); */
    }
    .meta .user {
      font-weight: 500;
    }
    .meta .expander {
      flex-grow: 1;
    }
    .meta .toggle-body {
      cursor: pointer;
    }
  `

  constructor () {
    super()
    this._collapsed = false
  }

  _toggleCollapsed () {
    this._collapsed = !this._collapsed
  }

  render () {
    return html`
      <div class="comment">
        <div class="meta">
          <span class="user">${this.creatorName}</span>
          <lbs-published .date=${this.published}></lbs-published>
          <lbs-votes
            .total=${this.countsScore}
            .up=${this.countsUpvotes}
            .down=${this.countsDownvotes}
          ></lbs-votes>
          <span class="expander"></span>
          <span class="toggle-body" @click="${this._toggleCollapsed}">
            ${
              this._collapsed ?
              html`<icon-chevron-up></icon-chevron-up>` :
              html`<icon-chevron-down></icon-chevron-down>`
            }
          </span>
        </div>
        ${this._collapsed ? nothing : html`
          <div class="body">
            <div class="content">
              ${unsafeHTML(this.content)}
            </div>
            ${this.children.length === 0 ? nothing : html`
              <div class="children">
                ${this.children.map((child) => {
                  return html`
                    <lbs-comment
                      .creatorName=${child.creatorName}
                      .published=${child.published}
                      .countsScore=${child.countsScore}
                      .countsUpvotes=${child.countsUpvotes}
                      .countsDownvotes=${child.countsDownvotes}
                      .children=${child.children}
                      .content=${child.content}
                    ></lbs-comment>
                  `
                })}
              </div>
            `}
          </div>
        `}
      </div>
    `
  }
}

customElements.define('lbs-comment', LbsComment)