<template>
  <section class="relative bg-base-100">
    <div
      class="invisible absolute bottom-0 left-0 z-0 h-20 w-20 overflow-hidden lg:visible lg:h-72 lg:w-72"
    >
      <nuxt-img
        alt="moutmout"
        format="webp"
        height="100%"
        loading="lazy"
        quality="75"
        src="https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true"
        width="100%"
      />
    </div>
    <div class="flex h-screen flex-wrap bg-base-200">
      <div class="hero hidden lg:hero lg:w-1/2">
        <div class="hero-content">
          <div class="max-w-md">
            <h1
              class="bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
            >
              Memnix app
            </h1>
            <p class="py-6 font-bold italic">
              {{ $t('spaced_repetition_learning_system') }}
            </p>
            <div class="flex w-full justify-center">
              <NuxtLink class="mx-auto" to="/discover">
                <button class="hoveranimation btn btn-primary">
                  {{ $t('learn_more') }}
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="hero min-h-screen bg-base-100 lg:w-1/2">
        <div class="flex h-fit flex-col justify-center justify-between">
          <div class="ml-3 flex items-center space-x-3 pb-8 pt-5 lg:hidden">
            <div class="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28">
              <nuxt-img
                alt="moutmout"
                format="webp"
                loading="lazy"
                quality="75"
                src="https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true"
              />
            </div>
            <h1
              class="bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
            >
              Memnix
            </h1>
          </div>
          <IndexAuth />
          <div class="mx-auto items-center py-6 lg:hidden">
            <p class="py-6 font-bold italic">
              {{ $t('spaced_repetition_learning_system') }}
            </p>
            <div class="flex w-full justify-center">
              <NuxtLink to="/discover">
                <button class="hoveranimation btn btn-secondary">
                  {{ $t('learn_more') }}
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ middleware: ['guest'] })

import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(false)
})

useHead({
  title: 'Memnix app',
  link: [
    {
      rel: 'preconnect',
      href: 'https://www.youtube.com/',
    },
    {
      rel: 'preconnect',
      href: 'https://s.ytimg.com',
    },
  ],
})
</script>
