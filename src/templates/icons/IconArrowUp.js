import { LitElement, svg } from 'lit'
import IconMixin from './IconMixin.js'

class IconArrowDown extends IconMixin(LitElement) {
  render () {
    return this.renderWithinSvg(svg`
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    `)
  }
}

customElements.define('icon-arrow-up', IconArrowDown)