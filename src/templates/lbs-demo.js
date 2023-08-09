import { LitElement, css, html } from 'lit'

export class LbsDemo extends LitElement {
  static properties = {
    _paramsMaxDepth: { state: true },
    _paramsPostId: { state: true },
    _urlBase: { state: true },
    _urlOrigin: { state: true },
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
    this._urlBase = '/api/v3'
    this._urlOrigin = 'https://discuss.tchncs.de'
  }

  _replaceLbsContainer () {
    const existing = document.querySelector('lbs-container')
    existing.insertAdjacentHTML(
      'afterend',
      `<lbs-container
        params-max-depth="${this._paramsMaxDepth}"
        params-post-id="${this._paramsPostId}"
        url-base="${this._urlBase}"
        url-origin="${this._urlOrigin}"
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