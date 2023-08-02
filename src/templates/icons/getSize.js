export default function size (size = '1x') {
  if (size.slice(-1) === 'x') {
    return size.slice(0, size.length -1) + 'em'
  }
  return parseInt(size) + 'px'
}
