<template>
  <div class="drawer">
    <div class="drawer__header">Top posts</div>
    <transition-group name="list" tag="div" class="drawer__scroller">
      <Post
        v-for="post in posts"
        class="list-item"
        :key="post.data.name"
        :post="post.data"
        @dismiss-post="$emit('dismiss-post', $event)"
      />
    </transition-group>
    <div class="drawer__footer">
      <button @click="$emit('dismiss-all')" class="drawer__dismiss-button">Dismiss All</button>
    </div>
  </div>
</template>

<script>
import Post from './Post'

export default {
  name: 'Drawer',
  props: {
    posts: {
      type: Array
    }
  },
  components: {
    Post
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
  &__dismiss-button {
    height: 32px;
    text-align: center;
    padding: 8px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  &__dismiss-button {
    display: block;
    width: 100%;
  }

  &__scroller {
    background-color: #111111;
    flex-grow: 1;
    overflow-y: auto;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all .5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
