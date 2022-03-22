<script lang="ts" setup>
// import Loader from './Loader.vue'
// import Play from './btn/Play.vue'
import play from '../assets/svg/play.svg'
import voice from '../assets/svg/voice.svg'
import settings from '../assets/svg/settings.svg'
import library from '../assets/svg/library.svg'
// import {click} from '../store/sounds/index'
import { ref } from 'vue'
const url = `https://cdna.artstation.com/p/assets/images/images/036/404/840/large/mike-ming-yin-imperial-hangar-01.jpg`
const formatWithUrl = () => `url('${url}')`
const addGradient = () => `linear-gradient(
          rgba(0, 0, 0, 0.1), 
          rgba(0, 0, 0, 0.7)
        ), ${formatWithUrl()}`

const playing = ref(false)
</script>

<template>
  <div
    :style="{ background: addGradient(), backgroundSize: 'cover' }"
    class="w-full h-screen filter blur-xl transform scale-110"
  ></div>
  <div
    class="absolute md:w-1/2 h-1/2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    @click="'click5'"
  >

  <div class="flex h-full">
    <div
      class="w-full h-full flex flex-col rounded-xl items-center"
      :style="{ background: formatWithUrl(), backgroundSize: 'cover' }"
    >
      <div class="absolute -bottom-5  transform translate-y-full bg-white h-20 bg-opacity-10 rounded-lg flex justify-between px-4 spec">
        <img class="w-8 mx-2" :src="play" alt="">
        <img class="w-8 mx-2" :src="voice" alt="">
        <input type="range" name="" id="">
      </div>
    </div>
    <div class="bg-white w-24 bg-opacity-10 rounded-lg ml-5 backdrop-filter blur-xl flex flex-col justify-around items-center">
      <img class="w-8" :src="settings" alt="">
      <img class="w-8" :src="library" alt="">
      <img class="w-8" :src="voice" alt="">
      <img class="w-8" :src="play" alt="">
      
    </div>
    <div class="bg-white w-64 bg-opacity-10 rounded-lg ml-5 backdrop-filter blur-xl flex flex-col py-2 px-2 justify-start items-center ok">
      <div v-for="i in 9" :key="i" class="flex w-full justify-center border-opacity-30 text-white border border-white border-solid rounded-lg text-base font-roboto py-1 my-1">Jedi Temple</div>
      
    </div>
  </div>
    

    
  </div>
</template>

<style scoped>
.ok{
  width: 264px;
}
</style>
