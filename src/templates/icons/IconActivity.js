import { LitElement, svg } from 'lit'
import IconMixin from './IconMixin.js'

class IconActivity extends IconMixin(LitElement) {
  render () {
    return this.renderWithinSvg(svg`
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    `)
  }
}

customElements.define('icon-activity', IconActivity)