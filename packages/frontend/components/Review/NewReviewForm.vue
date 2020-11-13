<template>
  <b-row>
    <b-row v-if="sendReviewError">
      <b-alert show variant="danger">Chyba při uložení</b-alert>
    </b-row>

    <b-form>
      <b-form-group label="Typ přípravy">
        <b-form-input v-model="newReview.brewing"></b-form-input>
      </b-form-group>

      <b-form-group label="Počet hvězdiček">
        <b-form-rating v-model="newReview.stars" variant="warning" class="mb-2" no-border></b-form-rating>
      </b-form-group>

      <b-form-group label="Hodnocení">
        <b-form-textarea v-model="newReview.comment" type="number"></b-form-textarea>
      </b-form-group>

      <b-button @click="saveNewReview">Přidat hodnocení</b-button>
    </b-form>

    <div v-if="sendReviewLoading" class="d-flex justify-content-center mb-3">
      <b-spinner label="Loading..."></b-spinner>
    </div>

    <b-row v-if="sendReviewError">
      <b-alert show variant="danger">Chyba při uložení</b-alert>
    </b-row>
  </b-row>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from '@nuxtjs/composition-api'
import {
  CreatedCoffeeDetailFragment,
  EditableTextReviewDataFragment,
  ReviewDataFragment,
  useSendReviewMutation,
} from '~/apollo/generated/types'

export default defineComponent({
  name: 'NewReviewForm',
  props: {
    coffee: {
      type: Object as PropType<CreatedCoffeeDetailFragment>,
    },
  },
  setup({ coffee }: { coffee: CreatedCoffeeDetailFragment }, { emit }) {
    const newReview = reactive<EditableTextReviewDataFragment>({
      brewing: '',
      comment: '',
      stars: 5,
    })

    const { mutate: createReview, loading: sendReviewLoading, error: sendReviewError } = useSendReviewMutation()

    const saveNewReview = async () => {
      let createdReview: ReviewDataFragment | null = null

      const result = await createReview({
        input: {
          data: {
            ...newReview,
            coffee: coffee.id,
          },
        },
      })

      createdReview = result.data?.createReview?.review ?? null

      if (createdReview) {
        emit('input', createdReview)
      }
    }

    return {
      newReview,
      saveNewReview,
      sendReviewLoading,
      sendReviewError,
    }
  },
})
</script>
