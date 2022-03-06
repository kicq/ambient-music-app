<script lang="ts" setup></script>

<template>
  <div
    class="h-20 flex justify-around items-center absolute top-0 w-full bg-gray-800 z-10"
  >
    <div class="border-gray-400 h-full flex">
      <img src="https://img.icons8.com/ios-glyphs/120/ffffff/apple-music.png" />
    </div>

    <div class="text-xl text-blue-50">SW Naboo</div>

    <div class="flex justify-center items-center w-20 h-full">
      <div class="w-10"><img src="https://img.icons8.com/ios-glyphs/90/ffffff/expand-arrow--v1.png"/></div>
      <div class="absolute bottom-0 transform translate-y-full w-auto p-4 rounded-lg bg-gray-500 hidden">
        <div class="">item-1</div>
        <div class="">item-2</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
