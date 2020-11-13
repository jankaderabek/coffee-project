<template>
  <section>
    <CoffeeSelect v-model="coffee" />

    <NewCoffeeForm v-if="!coffee" @input="coffee = $event" />

    <CoffeePreview v-if="coffee" :coffee="coffee" />

    <NewReviewForm v-if="coffee" :coffee="coffee" @input="$router.push(`/reviews/${$event.id}`)" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Multiselect from 'vue-multiselect'
import { CreatedCoffeeDetailFragment } from '~/apollo/generated/types'
import NewCoffeeForm from '~/components/Coffee/NewCoffeeForm.vue'
import CoffeeSelect from '~/components/Coffee/CoffeeSelect.vue'
import CoffeePreview from '~/components/Coffee/CoffeePreview.vue'
import NewReviewForm from '~/components/Review/NewReviewForm.vue'

export default defineComponent({
  name: 'AddReviewPage',
  components: {
    NewReviewForm,
    CoffeePreview,
    CoffeeSelect,
    NewCoffeeForm,
    Multiselect,
  },
  setup() {
    const coffee = ref<CreatedCoffeeDetailFragment | null>(null)

    return {
      coffee,
    }
  },
})
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
