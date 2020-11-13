<template>
  <Multiselect :value="value" :options="coffeeList" label="roaster" track-by="id" @input="$emit('input', $event)">
    <template slot="option" slot-scope="{ option }">
      <div>
        <span>{{ option.roaster }}</span
        ><br />
        <span class="small">{{ option.title }}</span>
      </div>
    </template>
  </Multiselect>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import Multiselect from 'vue-multiselect'
import { CoffeeDetailFragment, useGetCoffeeListQuery } from '~/apollo/generated/types'

export default defineComponent({
  name: 'CoffeeSelect',
  components: {
    Multiselect,
  },
  props: {
    value: {
      type: [Object] as PropType<CoffeeDetailFragment | null>,
    },
  },
  setup(_props) {
    const { result } = useGetCoffeeListQuery()

    const coffeeList = computed(() => {
      return result.value?.coffees ?? []
    })

    return {
      coffeeList,
    }
  },
})
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
