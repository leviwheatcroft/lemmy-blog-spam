import { LitElement, svg } from 'lit'
import IconMixin from './IconMixin.js'

class IconExternalLink extends IconMixin(LitElement) {
  render () {
    return this.renderWithinSvg(svg`
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    `)
  }
}

customElements.define('icon-external-link', IconExternalLink)