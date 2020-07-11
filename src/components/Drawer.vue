<template>
  <div id="drawer">
    <div>Top posts</div>
    <div>

    </div>
    <div>Dismiss All</div>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  props: {
    posts: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
#drawer {
  background-color: #212121;
  color: white;
  padding: 16px;
  height: 100%;
}
</style>
