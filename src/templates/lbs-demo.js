import { LitElement, css, html } from 'lit'

export class LbsDemo extends LitElement {
  static properties = {
    _paramMaxDepth: { state: true },
    _paramPostId: { state: true },
    _paramLimit: { state: true },
    _urlBase: { state: true },
    _urlOrigin: { state: true },
    _hideDepth: { state: true },
    _showPostBody: { state: true }
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }
    :host > * {
      margin-top: 16px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    @media (min-width: 0px) {
      :host {
        width: 100%;
      }
      label {
        width: 80px;
      }
      input {
        width: 80px;
      }
    }
    @media (min-width: 320px) {
      :host {
        width: 320px;
      }
      label {
        width: 160px;
      }
      input {
        width: 160px;
      }
    }
    @media (min-width: 768px) {
      :host {
        width: 480px;
      }
      label {
        width: 160px;
      }
      input {
        width: 320px;
      }
    }
  `

  constructor () {
    super()
    this._paramMaxDepth = 12
    this._paramPostId = '1385021'
    this._paramLimit = 32
    this._urlBase = '/api/v3'
    this._urlOrigin = 'https://programming.dev'
    this._hideDepth = 4
    this._showPostBody = 'true'
  }

  _getDeclaration () {
    return `
      <lbs-container
        param-max-depth="${this._paramMaxDepth}"
        param-post-id="${this._paramPostId}"
        param-limit="${this._paramLimit}"
        url-base="${this._urlBase}"
        url-origin="${this._urlOrigin}"
        hide-depth="${this._hideDepth}"
        ${
          this._showPostBody.toLowerCase() === 'true' ?
          'show-post-body' :
          ''
        }
      ></lbs-container>
    `
  }

  _replaceLbsContainer () {
    const existing = document.querySelector('lbs-container')
    existing.insertAdjacentHTML(
      'afterend',
      this._getDeclaration()
    )
    existing.remove()
  }

  render () {
    return html`
      <div>
        <label for="_paramMaxDepth">param-max-depth</label>
        <input
          name="_paramMaxDepth"
          @input=${(e) => this._paramMaxDepth = e.target.value}
          value=${this._paramMaxDepth}
        />
      </div>
      <div>
        <label for="_paramPostId">param-post-id</label>
        <input
          name="_paramPostId"
          @input=${(e) => this._paramPostId = e.target.value}
          value=${this._paramPostId}
        />
      </div>
      <div>
        <label for="_paramLimit">param-limit</label> 
        <input
          name="_paramLimit"
          @input=${(e) => this._paramLimit = e.target.value}
          value=${this._paramLimit}
        />
      </div>
      <div>
        <label for="_urlBase">url-base</label>
        <input
          name="_urlBase"
          @input=${(e) => this._urlBase = e.target.value}
          value=${this._urlBase}
        />
      </div>
      <div>
        <label for="_urlOrigin">url-origin</label>
        <input
          name="_urlOrigin"
          @input=${(e) => this._urlOrigin = e.target.value}
          value=${this._urlOrigin}
        />
      </div>
      <div>
        <label for="_hideDepth">hide-depth</label>
        <input
          name="_hideDepth"
          @input=${(e) => this._hideDepth = e.target.value}
          value=${this._hideDepth}
        />
      </div>
      <div>
        <label for="_showPostBody">show-post-body</label>
        <input
          name="_showPostBody"
          @input=${(e) => this._showPostBody = e.target.value}
          value=${this._showPostBody}
        />
      </div>
      <div>
        <span></span>
        <button
          @click=${this._replaceLbsContainer}
        >Load Post</button>
      </div>
      <div>
        <label for="_declaration">declaration</label>
        <pre>
          ${this._getDeclaration()}
        </pre>
      </div>
    `
  }
}

customElements.define('lbs-demo', LbsDemo)