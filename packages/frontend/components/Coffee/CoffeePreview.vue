<template>
  <div>
    <b-row>
      <b-col>Pražírna</b-col>
      <b-col>{{ coffee.roaster }}</b-col>
    </b-row>

    <b-row>
      <b-col>Název</b-col>
      <b-col>{{ coffee.title }}</b-col>
    </b-row>

    <b-row>
      <b-col>Původ</b-col>
      <b-col>{{ coffee.country }}</b-col>
    </b-row>

    <b-row>
      <b-col>Charakteristika</b-col>
      <b-col>{{ coffee.characteristics }}</b-col>
    </b-row>

    <b-row>
      <b-col>Proces</b-col>
      <b-col>{{ coffee.process }}</b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import Multiselect from 'vue-multiselect'
import { CoffeeDetailFragment } from '~/apollo/generated/types'

export default defineComponent({
  name: 'CoffeePreview',
  components: {
    Multiselect,
  },
  props: {
    coffee: {
      type: Object as PropType<CoffeeDetailFragment>,
    },
  },
})
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
