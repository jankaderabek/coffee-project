<template>
  <div>
    <Logo/>
    <h1 class="title">coffee-project-frontend</h1>
    <div class="links">
      <nuxt-link to="/reviews" class="button--green">Reviews</nuxt-link>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'

export default Vue.extend({
  apollo: {
    reviews: {
      query: gql`
        query reviewlist {
          reviews {
            name
          }
        }
      `,
    },
  },
})
</script>
