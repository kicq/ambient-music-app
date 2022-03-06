<script lang="ts" setup>
import Loader from './Loader.vue'
import Play from './btn/Play.vue'
//import play from '../assets/svg/play.svg'
import {click} from '../store/sounds/index'
import { ref } from 'vue'
const url = `https://cutewallpaper.org/21/star-wars-animated-wallpaper/Star-Wars-Kylo-Ren-Shape-your-computer-beautifully.gif`
const formatWithUrl = () => `url('${url}')`
const addGradient = () => `linear-gradient(
          rgba(0, 0, 0, 0.1), 
          rgba(0, 0, 0, 0.7)
        ), ${formatWithUrl()}`

const playing = ref(false)

</script>

<template>
  <div
    :style="{ background: addGradient(), backgroundSize:'cover' }"
    class="w-full h-screen filter blur-xl transform scale-110"
  ></div>
  <div
    class="absolute w-1/2 h-1/2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg "
    :style="{ background: formatWithUrl(), backgroundSize:'cover' }"
    @click="'click5'"
  >
    <!-- <h3 class="text-white text-shadow-lg "> Name Ambient #2</h3>
    <p class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestiae totam assumenda beatae, dolore quibusdam nobis? Nam, officiis! Voluptatem temporibus distinctio dignissimos odit repudiandae possimus doloremque est molestiae mollitia delectus!</p> -->
    <Loader :isPlay="playing"/>

    <div class="w-full flex justify-center mt-20">
      <Play @click="playing = !playing, click()" :isPlay="!playing" />
    </div>
    
  </div>


</template>


