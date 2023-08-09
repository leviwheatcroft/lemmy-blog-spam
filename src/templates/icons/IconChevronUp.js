import { LitElement, svg } from 'lit'
import IconMixin from './IconMixin.js'

class IconChevronUp extends IconMixin(LitElement) {
  render () {
    return this.renderWithinSvg(svg`
      <polyline points="18 15 12 9 6 15" />
    `)
  }
}

customElements.define('icon-chevron-up', IconChevronUp)