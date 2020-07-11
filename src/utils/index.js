export const humanize = timestamp => {
  const delta = Math.round((+new Date() - new Date(timestamp * 1000)) / 1000)

  const minute = 60
  const hour = minute * 60
  const day = hour * 24

  let result

  if (delta < 30) {
    result = 'just then.'
  } else if (delta < minute) {
    result = delta + ' seconds ago.'
  } else if (delta < 2 * minute) {
    result = 'a minute ago.'
  } else if (delta < hour) {
    result = Math.floor(delta / minute) + ' minutes ago.'
  } else if (Math.floor(delta / hour) === 1) {
    result = '1 hour ago.'
  } else if (delta < day) {
    result = Math.floor(delta / hour) + ' hours ago.'
  } else if (delta < day * 2) {
    result = 'yesterday'
  }

  return result
}
