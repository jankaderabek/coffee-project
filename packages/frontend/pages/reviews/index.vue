<template>
  <b-card-group v-if="result && result.reviews" deck>
    <b-card
      v-for="review in result.reviews"
      :key="review.id"
      :header="review.roaster"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="Title"
    >
      <b-card-text>Header and footers using props.</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
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
