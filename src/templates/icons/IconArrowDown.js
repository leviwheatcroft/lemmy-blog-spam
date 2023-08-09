import { LitElement, svg } from 'lit'
import IconMixin from './IconMixin.js'

class IconArrowDown extends IconMixin(LitElement) {
  render () {
    return this.renderWithinSvg(svg`
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    `)
  }
}

customElements.define('icon-arrow-down', IconArrowDown)