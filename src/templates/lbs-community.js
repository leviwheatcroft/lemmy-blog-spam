import { LitElement, css, html } from 'lit'

export class LbsCommunity extends LitElement {
  static properties = {
    url: {},
    title: {}
  }

  static styles = css`
    a {
      color: rgb(0, 0, 0);
      text-decoration: none;
    }
  `

  constructor () {
    super()
  }

  render () {
    return html`
      <a href=${this.url}><icon-layout></icon-layout>${this.title}</a>
    `
  }
}

customElements.define('lbs-community', LbsCommunity)