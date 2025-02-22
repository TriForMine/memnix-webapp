<template>
  <div>
    <div v-if="loaded" class="bg-base-100">
      <div v-show="isMobile === true">
        <CoreDeckMobileSection
          :deckList="todayDeckList"
          :title="$t('daily_decks')"
          :type="CarouselType.Today"
          :white="true"
          @refreshToday="refreshToday"
        />
        <CoreDeckMobileSection
          :deckList="availableDeckList"
          :title="$t('featured_decks')"
          :type="CarouselType.ToSubscribe"
          :white="false"
          @refreshToday="refreshToday"
        />
        <CoreDeckMobileSection
          :deckList="myDecksList"
          :title="$t('my_decks')"
          :type="CarouselType.ToPlay"
          :white="true"
          @refreshToday="refreshToday"
        />
      </div>

      <div v-show="!isMobile">
        <CoreDeckDesktopSection
          :deckList="todayDeckList"
          :title="$t('daily_decks')"
          :type="CarouselType.Today"
          :white="true"
          @refreshToday="refreshToday"
        />
        <CoreDeckDesktopSection
          :deckList="availableDeckList"
          :title="$t('featured_decks')"
          :type="CarouselType.ToSubscribe"
          :white="false"
          @refreshToday="refreshToday"
        />
        <CoreDeckDesktopSection
          :deckList="myDecksList"
          :title="$t('my_decks')"
          :type="CarouselType.ToPlay"
          :white="true"
          @refreshToday="refreshToday"
        />
      </div>
    </div>
    <div v-else>
      <CoreSkeletonSection />
      <CoreSkeletonSection />
      <CoreSkeletonSection />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  CarouselType,
  Deck,
  DeckList,
  SubDeckList,
  TodayResponse,
} from '~/types'
import { getAvailableDeck, getDeck, getSubDeck } from '~/api/deck.api'
import { todays } from '~/api/card.api'
import { useTodayStore } from '~/stores/todays'
import { useApiStore } from '~/stores/api'

definePageMeta({ layout: 'connected', middleware: ['auth'] })

let isMobile = ref(false)
let loaded = ref(false)
let myDecksList = ref(<SubDeckList>[])
let todayDeckList = ref(<DeckList>[])
let availableDeckList = ref(<SubDeckList>[])

async function refreshToday() {
  const apiStore = useApiStore()

  loaded.value = false
  if (apiStore.refreshMyDecks) {
    myDecksList.value = await getSubDeck().then((res) => {
      apiStore.refreshMyDecks = false
      return <SubDeckList>res.data || []
    })
  }

  if (apiStore.refreshAvailableDecks) {
    availableDeckList.value = await getAvailableDeck().then((res) => {
      apiStore.refreshAvailableDecks = false
      return <SubDeckList>res.data || []
    })
  }

  if (apiStore.refreshToday) {
    const data: TodayResponse = await todays()
    todayDeckList.value = []
    await handleData(data).then(() => {
      loaded.value = true
      apiStore.refreshToday = false
    })
  }

  loaded.value = true
}

onMounted(async () => {
  const apiStore = useApiStore()

  const data: TodayResponse = await todays()

  myDecksList.value = await getSubDeck().then((res) => {
    if (apiStore.refreshMyDecks) {
      apiStore.refreshMyDecks = false
    }
    return <SubDeckList>res.data || []
  })

  availableDeckList.value = await getAvailableDeck().then((res) => {
    if (apiStore.refreshAvailableDecks) {
      apiStore.refreshAvailableDecks = false
    }
    return <SubDeckList>res.data || []
  })

  await handleData(data).then(() => (loaded.value = true))

  isMobile.value = screen.width <= 768
  window.addEventListener('resize', () => {
    isMobile.value = screen.width <= 768
  })
})

const handleData = async function (todayResponse: TodayResponse) {
  const data = todayResponse.data
  const store = useTodayStore()
  for (let i = 0; i < data.count; i++) {
    store.setDeck(
      data.decks_responses[i].deck_id,
      data.decks_responses[i].cards
    )
    todayDeckList.value.push(<Deck>data.decks_responses[i].deck)
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
