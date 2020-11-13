<template>
  <b-row>
    <b-row v-if="sendCoffeeError">
      <b-alert show variant="danger">Chyba při uložení</b-alert>
    </b-row>

    <b-form>
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

    <div v-if="sendCoffeeLoading" class="d-flex justify-content-center mb-3">
      <b-spinner label="Loading..."></b-spinner>
    </div>

    <b-row v-if="sendCoffeeError">
      <b-alert show variant="danger">Chyba při uložení</b-alert>
    </b-row>
  </b-row>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { useSendCoffeeMutation, CreatedCoffeeDetailFragment, CoffeeDetailFragment } from '~/apollo/generated/types'

export default defineComponent({
  name: 'NewCoffeeForm',
  setup(_props, { emit }) {
    const newCoffee = reactive<CoffeeDetailFragment>({
      roaster: '',
      title: '',
      country: '',
      process: '',
      characteristics: '',
    })

    const { mutate: createCoffee, loading: sendCoffeeLoading, error: sendCoffeeError } = useSendCoffeeMutation()

    const saveNewCoffee = async () => {
      let createdCoffee: CreatedCoffeeDetailFragment | null = null

      try {
        const result = await createCoffee({ input: { data: newCoffee } })
        createdCoffee = result.data?.createCoffee?.coffee ?? null
      } catch (e) {}

      if (createdCoffee) {
        emit('input', createdCoffee)
      }
    }

    return {
      newCoffee,
      saveNewCoffee,
      sendCoffeeLoading,
      sendCoffeeError,
    }
  },
})
</script>
