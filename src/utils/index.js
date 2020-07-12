export const humanize = timestamp => {
  const delta = Math.round((+new Date() - new Date(timestamp * 1000)) / 1000)

  const minute = 60
  const hour = minute * 60
  const day = hour * 24

  if (delta < 30) {
    return 'just now'
  }
  if (delta < minute) {
    return delta + ' seconds ago'
  }
  if (delta < 2 * minute) {
    return 'a minute ago'
  }
  if (delta < hour) {
    return Math.floor(delta / minute) + ' minutes ago'
  }
  if (Math.floor(delta / hour) === 1) {
    return '1 hour ago'
  }
  if (delta < day) {
    return Math.floor(delta / hour) + ' hours ago'
  }
  if (delta < day * 2) {
    return 'yesterday'
  }
  if (delta < day * 7) {
    return Math.floor(delta / day) + 'days ago'
  }
  return 'more than a week ago'
}

export const debounce = (func, wait, immediate) => {
  let timeout
  return function () {
    const context = this; const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
