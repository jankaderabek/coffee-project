<template>
  <b-row class="mt-2">
    <b-col v-if="result && result.review">
      <b-row>
        <b-col>Komentář</b-col>
        <b-col>{{ result.review.comment }}</b-col>
      </b-row>
      <b-row>
        <b-col>Příprava</b-col>
        <b-col>{{ result.review.brewing }}</b-col>
      </b-row>
      <b-row>
        <b-col>Hodnoceni</b-col>
        <b-col>{{ result.review.stars }}</b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useGetReviewQuery } from '~/apollo/generated/types'

export default defineComponent({
  setup(_props, { root }) {
    const { result } = useGetReviewQuery({ id: root.$route.params.id })

    return {
      result,
    }
  },
})
</script>
