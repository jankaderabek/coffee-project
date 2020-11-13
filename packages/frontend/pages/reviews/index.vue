<template>
  <b-card-group v-if="result && result.reviews" deck>
    <b-card
      v-for="review in result.reviews"
      :key="review.id"
      :header="review.coffee.title"
      header-tag="header"
      class="mt-2"
    >
      <b-card-text>{{ review.comment }}</b-card-text>
      <b-button :to="`/reviews/${review.id}`" variant="primary"> Detail </b-button>
    </b-card>
  </b-card-group>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useGetReviewsQuery } from '~/apollo/generated/types'

export default defineComponent({
  setup() {
    const { result } = useGetReviewsQuery()

    return {
      result,
    }
  },
})
</script>

<style>
.card {
  min-width: 300px;
}
</style>
