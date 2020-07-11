<template>
  <div id="main">
    selected post data
  </div>
</template>

<script>

export default {
  name: 'MainPost',
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  flex: 1 1 auto;
  padding: 16px;
}
</style>
