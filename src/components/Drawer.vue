<template>
  <div class="drawer">
    <div class="drawer__header">Top posts</div>
    <div class="drawer__scroller">

    </div>
    <div class="drawer__footer">Dismiss All</div>
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
.drawer {
  background-color: #212121;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header,
  &__footer {
    height: 26px;
    text-align: center;
    padding: 8px;
    flex-grow: 0;
  }

  &__scroller {
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>
