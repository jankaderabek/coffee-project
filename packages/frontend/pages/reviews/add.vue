<template>
  <section>
    <b-row v-if="sendCoffeeError">
      <b-alert show variant="danger">Chyba při uložení</b-alert>
    </b-row>

    <b-row>
      <Multiselect
        v-model="createdCoffee"
        :options="coffees"
        label="roaster"
        track-by="id"
      >
        <template slot="option" slot-scope="{ option }">
          <div>
            <span>{{ option.roaster }}</span
            ><br />
            <span class="small">{{ option.title }}</span>
          </div>
        </template>
      </Multiselect>
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

      <div
        v-else-if="sendCoffeeLoading"
        class="d-flex justify-content-center mb-3"
      >
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

    <b-row v-if="createdCoffee">
      <b-form>
        <b-form-group label="Typ přípravy">
          <b-form-input v-model="newReview.brewing"></b-form-input>
        </b-form-group>

        <b-form-group label="Počet hvězdiček">
          <b-form-rating
            v-model="newReview.stars"
            variant="warning"
            class="mb-2"
            no-border
          ></b-form-rating>
        </b-form-group>

        <b-form-group label="Hodnocení">
          <b-form-textarea
            v-model="newReview.comment"
            type="number"
          ></b-form-textarea>
        </b-form-group>

        <b-button @click="saveNewReview">Přidat hodnocení</b-button>
      </b-form>
    </b-row>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import Multiselect from 'vue-multiselect'
import {
  CoffeeInput,
  useSendCoffeeMutation,
  CreatedCoffeeDetailFragment,
  useGetCoffeeListQuery,
  EditableTextReviewDataFragment,
  useSendReviewMutation,
} from '~/apollo/generated/types'

export default defineComponent({
  name: 'AddReviewPage',
  components: {
    Multiselect,
  },
  setup(_props, { root }) {
    const newCoffee = reactive<
      Omit<Required<CoffeeInput>, 'reviews' | 'created_by' | 'updated_by'>
    >({
      roaster: '',
      title: '',
      country: '',
      process: '',
      characteristics: '',
    })
    const createdCoffee = ref<CreatedCoffeeDetailFragment | null>(null)
    const {
      mutate: createCoffee,
      loading: sendCoffeeLoading,
      error: sendCoffeeError,
    } = useSendCoffeeMutation()

    const saveNewCoffee = async () => {
      try {
        const result = await createCoffee({ input: { data: newCoffee } })
        createdCoffee.value = result.data?.createCoffee?.coffee ?? null
      } catch (e) {}
    }

    const { result } = useGetCoffeeListQuery()

    const newReview = reactive<EditableTextReviewDataFragment>({
      brewing: '',
      stars: 5,
      comment: '',
    })

    const { mutate: sendNewReview } = useSendReviewMutation()

    const saveNewReview = async () => {
      if (createdCoffee.value === null) {
        return
      }

      try {
        const result = await sendNewReview({
          input: {
            data: {
              ...newReview,
              coffee: createdCoffee.value.id,
            },
          },
        })

        root.$router.push(`/reviews/${result.data?.createReview?.review?.id}`)
      } catch (e) {}
    }

    return {
      newCoffee,
      saveNewCoffee,
      createdCoffee,
      sendCoffeeLoading,
      sendCoffeeError,
      coffees: result.value?.coffees ?? [],
      newReview,
      saveNewReview,
    }
  },
})
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
