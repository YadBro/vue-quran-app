<script setup>

</script>

<template>
      <h5 class="text-center">@Yadi Apriyadi - 2022; Source= <a href="https://github.com/gadingnst/quran-api" target="_blank" noreferrer>here</a></h5>
  <router-view v-slot="{Component}">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

</style>