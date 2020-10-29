<template>
  <section>
    <b-row v-if="sendCoffeeError">
      <b-alert show variant="danger">Chyba při uložení</b-alert>
    </b-row>

    <b-row>
      <b-form v-if="!createdCoffee">
        <b-form-group label="Pražírna">
          <b-form-input v-model="newCoffee.roaster"></b-form-input>
        </b-form-group>

        <b-form-group label="Název">
          <b-form-input v-model="newCoffee.title"></b-form-input>
        </b-form-group>

        <b-form-group label="Původ">
          <b-form-input v-model="newCoffee.country"></b-form-input>
        </b-form-group>

        <b-form-group label="Charakteristika">
          <b-form-input v-model="newCoffee.characteristics"></b-form-input>
        </b-form-group>

        <b-form-group label="Proces">
          <b-form-input v-model="newCoffee.process"></b-form-input>
        </b-form-group>

        <b-button @click="saveNewCoffee">Přidat novou kávu</b-button>
      </b-form>

      <div v-else-if="sendCoffeeLoading" class="d-flex justify-content-center mb-3">
        <b-spinner label="Loading..."></b-spinner>
      </div>

      <b-col v-else-if="createdCoffee">
        <b-row>
          <b-col>Pražírna</b-col>
          <b-col>{{ createdCoffee.roaster }}</b-col>
        </b-row>

        <b-row>
          <b-col>Název</b-col>
          <b-col>{{ createdCoffee.title }}</b-col>
        </b-row>

        <b-row>
          <b-col>Původ</b-col>
          <b-col>{{ createdCoffee.country }}</b-col>
        </b-row>

        <b-row>
          <b-col>Charakteristika</b-col>
          <b-col>{{ createdCoffee.characteristics }}</b-col>
        </b-row>

        <b-row>
          <b-col>Proces</b-col>
          <b-col>{{ createdCoffee.process }}</b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import { CoffeeInput, useSendCoffeeMutation, CoffeeDetailFragment } from '~/apollo/generated/types'
import Multiselect from 'vue-multiselect'

export default defineComponent({
  components: {
    Multiselect
  },
  setup() {
    const newCoffee = reactive<Omit<Required<CoffeeInput>, 'created_by' | 'updated_by'>>({
      roaster: '',
      title: '',
      country: '',
      process: '',
      characteristics: '',
    })
    const createdCoffee = ref<CoffeeDetailFragment | null>(null)
    const { mutate: createCoffee, loading: sendCoffeeLoading, error: sendCoffeeError} = useSendCoffeeMutation()

    const saveNewCoffee = async () => {
      try {
        const result = await createCoffee({input: {data: newCoffee}})
        createdCoffee.value = result.data?.createCoffee?.coffee ?? null
      } catch (e) {
      }
    }

    return {
      newCoffee,
      saveNewCoffee,
      createdCoffee,
      sendCoffeeLoading,
      sendCoffeeError
    }
  },
})
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
