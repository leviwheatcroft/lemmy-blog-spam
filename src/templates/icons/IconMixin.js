import { css, svg } from 'lit'
import { classMap } from 'lit/directives/class-map.js'

const IconMixin = (superClass) => class extends superClass {
  static properties = {
    ...super.properties ?? {},
    size: {},
    classStack: {},
  }
  static styles = [
    super.styles ?? [],
    css`
      .icon {
        position: relative;
        top: 2px;
      }
    `
  ]

  getSize () {
    const {
      size
    } = this
    if (size.slice(-1) === 'x') {
      return size.slice(0, size.length -1) + 'em'
    }
    return parseInt(size) + 'px'
  }
  getClassStack (...stack) {
    stack.unshift(this.classStack)
    return classMap(Object.assign(
      {},
      ...stack
        .map(s => typeof s === 'string' ? s.split(' ') : s)
        .map(s => Array.isArray(s) ? Object.fromEntries(s.map(i => [i, true ])) : s)
    ))
  }
  constructor () {
    super()
    this.size = '1x'
  }

  renderWithinSvg (body) {
    return svg`<svg
      class=${this.getClassStack('icon')}
      xmlns="http://www.w3.org/2000/svg"
      width=${this.getSize()}
      height=${this.getSize()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${body}
    </svg>`
  }
}

export default IconMixin
