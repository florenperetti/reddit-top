import axios from 'axios'

export const fetchTopPosts = async (params = {
  limit: 10
}) => {
  try {
    const results = await axios.get('https://www.reddit.com/r/funny/top/.json', { params })
    return results.data
  } catch (error) {
    console.error(error)
  }
}
