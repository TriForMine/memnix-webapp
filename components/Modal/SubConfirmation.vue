<template>
  <div class="modal modal-open modal-bottom sm:modal-middle">
    <div class="modal-box border-2 border-secondary">
      <h3 class="text-lg font-bold md:text-xl lg:text-2xl">
        {{ $t('subscribe_to_deck') }}
      </h3>
      <p class="text-md py-4 md:text-lg lg:text-xl">
        {{ $t('subscribe_to_deck_content') }}
      </p>
      <div class="modal-action">
        <label
          class="btn-neutral hoveranimation btn"
          @click="$emit('closeModalSubConfirmation')"
        >
          {{ $t('no') }}
        </label>
        <label class="hoveranimation btn btn-secondary" @click="subToDeckEvent">
          {{ $t('yes') }}
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { subToDeck } from '~/api/deck.api'
import { useApiStore } from '~/stores/api'
import { Deck } from '~/types'
import { PropType } from '@vue/runtime-core'

const emit = defineEmits(['closeModalSubConfirmation'])

const props = defineProps({
  deck: {
    type: Object as PropType<Deck>,
    required: true,
  },
})

async function subToDeckEvent() {
  const apiStore = useApiStore()
  const res = await subToDeck(props.deck.ID)
  if (res.success) {
    apiStore.refreshMyDecks = true
    apiStore.refreshAvailableDecks = true
    apiStore.refreshToday = true
  }
  emit('closeModalSubConfirmation')
}
</script>

<style scoped></style>
