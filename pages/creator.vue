<template>
  <div>
    <section class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-4">
      <div class="pb-12 text-center">
        <h1 class="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
          {{ $t('deck_editor') }}
        </h1>
        <h2 class="text-base font-bold text-primary">
          {{ $t('deck_editor_content') }}
        </h2>
      </div>
      <div
        v-if="loading"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="_ in 6"
          class="h-32 w-28 animate-pulse md:h-48 md:w-44 lg:h-72 lg:w-72"
        >
          <div class="flex flex-col justify-center">
            <div class="rounded-box relative bg-neutral">
              <svg
                class="absolute inset-0 m-auto h-7 w-7 animate-spin"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                ></path>
              </svg>
              <div
                class="h-24 w-24 object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6"
      >
        <CoreDeck
          v-for="deck in decks"
          :deck="deck.Deck"
          @click="openDeckEditor(deck)"
        />
        <div
          class="hoveranimation flex w-full flex-col justify-center hover:cursor-pointer"
          @click="showModalCreateDeck = true"
        >
          <div class="mx-auto">
            <Icon-lucide-plus-circle class="my-auto text-4xl" />
          </div>

          <div class="text-center">
            <span class="md:text-md text-xs lg:text-lg">{{
              $t('create_a_deck')
            }}</span>
          </div>
        </div>
      </div>
    </section>
    <ModalEditDeck
      v-if="showModalEditDeck"
      :deck="currentDeck"
      @closeModalDeckEdit="closeModalDeckEdit"
    />
    <ModalCreateDeck
      v-if="showModalCreateDeck"
      @closeModalDeckCreate="closeModalDeckCreate"
    />
  </div>
</template>

<script lang="ts" setup>
import { getEditorDecks } from '~/api/deck.api'
import { DeckEditorList } from '~/types'

definePageMeta({ layout: 'connected', middleware: ['auth'] })

let decks = ref(<DeckEditorList>[])
let loading = ref(true)
let currentDeck = ref({})

let showModalEditDeck = ref(false)
let showModalCreateDeck = ref(false)

async function closeModalDeckEdit() {
  showModalEditDeck.value = false
  await fetchDecks()
}

async function closeModalDeckCreate() {
  showModalCreateDeck.value = false
  await fetchDecks()
}

async function fetchDecks() {
  decks.value = await getEditorDecks().then((res) => {
    loading.value = false
    return <DeckEditorList>res || []
  })
}

function openDeckEditor(deck) {
  currentDeck.value = deck
  showModalEditDeck.value = true
}

onMounted(async () => {
  await fetchDecks()
})

useHead({
  title: 'Memnix App - Creator',
  meta: [
    {
      name: 'description',
      content: "Memnix's creator",
    },
  ],
})
</script>

<style scoped></style>
