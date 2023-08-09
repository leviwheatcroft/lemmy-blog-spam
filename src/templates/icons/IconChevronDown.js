import { LitElement, svg } from 'lit'
import IconMixin from './IconMixin.js'

class IconChevronDown extends IconMixin(LitElement) {
  render () {
    return this.renderWithinSvg(svg`
      <polyline points="6 9 12 15 18 9" />
    `)
  }
}

customElements.define('icon-chevron-down', IconChevronDown)