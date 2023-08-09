import dayjs from 'dayjs'
import relativeTimePlugin from 'dayjs/plugin/relativeTime.js'
import { LitElement, css, html } from 'lit'

dayjs.extend(relativeTimePlugin)

export class LbsPublished extends LitElement {
  static properties = {
    date: {}
  }

  static styles = css`
    :host {
      font-style: italic;
      font-size: 0.8rem;
      color: rgb(100, 100, 100);
      line-height: 1rem;
    }
  `

  constructor () {
    super()
  }

  render () {
    return html`
      ${dayjs(this.date).fromNow()}
    `
  }
}

customElements.define('lbs-published', LbsPublished)