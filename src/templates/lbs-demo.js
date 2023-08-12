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
      <div>
        <label for="_paramsMaxDepth">params.max_depth</label>
        <input
          name="_paramsMaxDepth"
          @input=${(e) => this._paramsMaxDepth = e.target.value}
          value=${this._paramsMaxDepth}
        />
      </div>
      <div>
        <label for="_paramsPostId">params.post_id</label>
        <input
          name="_paramsPostId"
          @input=${(e) => this._paramsPostId = e.target.value}
          value=${this._paramsPostId}
        />
      </div>
      <div>
        <label for="_paramsLimit">params.limit</label> 
        <input
          name="_paramsLimit"
          @input=${(e) => this._paramsLimit = e.target.value}
          value=${this._paramsLimit}
        />
      </div>
      <div>
        <label for="_urlBase">urlBase</label>
        <input
          name="_urlBase"
          @input=${(e) => this._urlBase = e.target.value}
          value=${this._urlBase}
        />
      </div>
      <div>
        <label for="_urlOrigin">urlOrigin</label>
        <input
          name="_urlOrigin"
          @input=${(e) => this._urlOrigin = e.target.value}
          value=${this._urlOrigin}
        />
      </div>
      <div>
        <label for="_hideDepth">hideDepth</label>
        <input
          @input=${(e) => this._hideDepth = e.target.value}
          value=${this._hideDepth}
        />
      </div>
      <div>
        <span></span>
        <button
          @click=${this._replaceLbsContainer}
        >Load Post</button>
      </div>
    `
  }
}

customElements.define('lbs-demo', LbsDemo)