import { LitElement, css, html } from 'lit'

export class LbsVotes extends LitElement {
  static properties = {
    total: {},
    up: {},
    down: {}
  }

  static styles = css`
    :host {
      color: rgb(100, 100, 100);
      font-size: 0.8rem;
      line-height: 1rem;
    }
  `

  constructor () {
    super()
  }

  render () {
    return html`
      <icon-activity></icon-activity>${this.total}
      (<icon-arrow-up></icon-arrow-up>${this.up}
      |
      <icon-arrow-down></icon-arrow-down>${this.down})
    `
  }
}

customElements.define('lbs-votes', LbsVotes)