<template>
  <div
    @scroll.passive="debouncedScrollHandler"
  >
    <slot/>
  </div>
</template>

<script>
import { debounce } from '../utils'

export default {
  name: 'InfiniteScroll',
  created () {
    this.debouncedScrollHandler = debounce(this.scrollHandler, 200)
  },
  methods: {
    async scrollHandler () {
      if (this.isAtBottom()) {
        this.$emit('scroll-end')
      }
    },
    isAtBottom () {
      const { height } = this.$el.getBoundingClientRect()
      const { scrollHeight, scrollTop } = this.$el
      const remainingHeight = Math.trunc(scrollHeight - scrollTop)
      const totalHeight = Math.ceil(height)
      const range = 5
      const result = remainingHeight < totalHeight + range && remainingHeight > totalHeight - range
      return result
    }
  }
}
</script>
