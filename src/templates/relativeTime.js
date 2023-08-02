import dayjs from 'dayjs'
import relativeTimePlugin from 'dayjs/plugin/relativeTime.js'

dayjs.extend(relativeTimePlugin)

export default function relativeTime (date) {
  return dayjs(date).fromNow()
}