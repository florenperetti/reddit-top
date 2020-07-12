<template>
  <article @click="$emit('view-post', post)" class="post">
    <div class="post__content-wrapper">
      <div class="post__header">
        <span :class="!post.read ? 'post__icon-read' : 'post__icon-read post__icon-read--unread'"></span>
        <h2 class="post__author">{{ post.author }}</h2>
        <span class="post__date">{{ postDate }}</span>
      </div>
      <div class="post__content">
        <img
          v-if="post.thumbnail"
          :src="post.thumbnail"
          class="post__thumbnail"
        >
        <h3 class="post__title">{{post.title}}</h3>
      </div>
      <div class="post__footer">
        <button @click="$emit('dismiss-post', post.name)" class="post__dismiss-button">
          <span class="post__icon-dismiss">&times;</span>
          Dismiss Post</button>
        <span class="post__comments">{{ post.num_comments }} comments</span>
      </div>
    </div>
    <div>
      <span class="post__icon-chevron">&rsaquo;</span>
    </div>
  </article>
</template>

<script>
import { humanize } from '../utils'

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    postDate () {
      return humanize(this.post.created_utc)
    }
  }
}
</script>

<style lang="scss">
.post {
  display: flex;
  align-items: center;
  padding: 10px;

  + .post {
    border-top: 1px solid #ccc;
  }

  &__content-wrapper {
    flex-grow: 1;
  }

  &__header,
  &__footer,
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
  }

  &__icon-read {
    height: 6px;
    width: 6px;
    background-color: rgb(117, 115, 243);
    border: 2px solid rgb(117, 115, 243);
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;

    &--unread {
      background-color: transparent !important;
    }
  }

  &__author,
  &__title {
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
  }

  &__title {
    margin-right: auto;
  }

  &__author {
    font-size: 1.2rem;
    width: 60%;
    margin-right: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__date {
    font-size: 0.8rem;
    color: #ccc;
  }

  &__thumbnail {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-right: 16px;
  }

  &__footer {
    margin-top: 4px;
  }

  &__dismiss-button {
    display: inline-flex;
    align-items: center;
  }

  &__icon-dismiss {
    color: orange;
    height: 16px;
    width: 16px;
    font-size: 20px;
    border-radius: 50%;
    border: 1px solid orange;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }

  &__comments {
    color: orange;
  }

  &__icon-chevron {
    color: #ccc;
    font-size: 26px;
    margin-left: 8px;
  }
}
</style>
