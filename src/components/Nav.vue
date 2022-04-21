<script lang="ts" setup></script>

<template>
  <div
    class="nav h-11  flex justify-around items-center absolute top-0 w-full z-10"
  >
    <div class="border-gray-400 h-full flex">
      <router-link to="/">
        <img class="w-full h-full object-cover" src="https://img.icons8.com/ios-glyphs/120/ffffff/apple-music.png" />
      </router-link>
    </div>

    <div class="text-xl text-blue-50">SW Naboo</div>

    
  </div>
</template>

<style lang="scss">
  .nav{
    background-color: rgba(196, 196, 196, 0.2);
    backdrop-filter: blur(4px);
  }
</style>
