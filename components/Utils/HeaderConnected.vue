<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <NuxtLink
        class="hoveranimation btn btn-ghost text-xl normal-case"
        to="/discover"
      >
        <h1
          class="from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-4xl font-bold text-primary hover:animate-pulse dark:bg-gradient-to-r dark:text-transparent"
        >
          Memnix
        </h1></NuxtLink
      >
    </div>
    <div class="navbar-center"></div>
    <div class="navbar-end">
      <UtilsThemeSwitcher />
      <UtilsLangSwitcher />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style scoped></style>
