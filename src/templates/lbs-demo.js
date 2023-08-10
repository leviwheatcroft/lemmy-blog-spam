import { LitElement, css, html } from 'lit'

export class LbsDemo extends LitElement {
  static properties = {
    _paramsMaxDepth: { state: true },
    _paramsPostId: { state: true },
    _paramsLimit: { state: true },
    _urlBase: { state: true },
    _urlOrigin: { state: true },
    _hideDepth: { state: true }
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    :host > * {
      margin-top: 16px;
      width: 480px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    label {
      width: 160px;
    }
    input {
      width: 320px;
    }
  `

  constructor () {
    super()
    this._paramsMaxDepth = 12
    this._paramsPostId = '1307075'
    this._paramsLimit = 32
    this._urlBase = '/api/v3'
    this._urlOrigin = 'https://discuss.tchncs.de'
    this._hideDepth = 4
  }

  _replaceLbsContainer () {
    const existing = document.querySelector('lbs-container')
    existing.insertAdjacentHTML(
      'afterend',
      `<lbs-container
        params-max-depth="${this._paramsMaxDepth}"
        params-post-id="${this._paramsPostId}"
        params-limit="${this._paramsLimit}"
        url-base="${this._urlBase}"
        url-origin="${this._urlOrigin}"
        hide-depth="${this._hideDepth}"
      ></lbs-container>`
    )
    existing.remove()
  }

  render () {
    return html`
      <label>
        params.max_depth
        <input
          @input=${(e) => this._paramsMaxDepth = e.target.value}
          value=${this._paramsMaxDepth}
        />
      </label>
      <label>
        params.post_id
        <input
          @input=${(e) => this._paramsPostId = e.target.value}
          value=${this._paramsPostId}
        />
      </label>
      <label>
        params.limit
        <input
          @input=${(e) => this._paramsLimit = e.target.value}
          value=${this._paramsLimit}
        />
      </label>
      <label>
        urlBase
        <input
          @input=${(e) => this._urlBase = e.target.value}
          value=${this._urlBase}
        />
      </label>
      <label>
        urlOrigin
        <input
          @input=${(e) => this._urlOrigin = e.target.value}
          value=${this._urlOrigin}
        />
      </label>
      <label>
        hideDepth
        <input
          @input=${(e) => this._hideDepth = e.target.value}
          value=${this._hideDepth}
        />
      </label>
      <div class="buttons">
        <span class="spacer"></span>
        <button
          @click=${this._replaceLbsContainer}
        >Load Post</button>
      </div>
    `
  }
}

customElements.define('lbs-demo', LbsDemo)