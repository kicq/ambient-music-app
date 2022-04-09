<script lang="ts" setup>
// import Loader from './Loader.vue'
// import Play from './btn/Play.vue'
import play from '../assets/svg/play.svg'
import voice from '../assets/svg/voice.svg'
import settings from '../assets/svg/settings.svg'
import library from '../assets/svg/library.svg'
// import {click} from '../store/sounds/index'
import { ref, defineProps } from 'vue'
import { categories } from '@/categories'
import {route} from '@/router'
const url = `https://cdna.artstation.com/p/assets/images/images/036/404/840/large/mike-ming-yin-imperial-hangar-01.jpg`
const formatWithUrl = () => `url('${getCard()?.img}')`
const addGradient = () => `linear-gradient(
          rgba(0, 0, 0, 0.1), 
          rgba(0, 0, 0, 0.7)
        ), ${formatWithUrl()}`

const playing = ref(false)
const range = ref(0.1)
const isFull = ref(true)


const {category, card} = route.value.params
const getCard = () => {
  const foundCategory = categories.find(elem => elem.name === category)
  if(!foundCategory) return 
  return foundCategory.ambientCards.find(elem => elem.title === card)
}

</script>

<template>
  <div
    :style="{ background: addGradient(), backgroundSize: 'cover' }"
    class="w-full h-screen filter blur-xl transform scale-110"
  ></div>
  <div
    class="absolute md:w-1/2 h-3/6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    @click="'click5'"
  >
    <div class="flex v-full h-full border-2 justify-center">
      <div
        class="h-full relative flex flex-col justify-end rounded-xl items-center my"
        :class="isFull ? 'w-1/4': 'w-2/3'"
        :style="{ background: formatWithUrl(), backgroundSize: 'cover' }"
      >
        <div :class="isFull ? 'anim-hide': 'anim-show'" class="flex trans-20 absolute justify-between m-6 font-roboto text-xs items-end text-white card-shadow trans-20">
          <div class="w-3/6 text-left">
            {{getCard()?.description}}
          </div>
          <div class="w-auto text-2xl">{{getCard()?.title}}</div>
        </div>
        <div
          class="min-w-min relative -bottom-5 transform translate-y-full bg-white h-20 bg-opacity-10 rounded-lg flex justify-between px-4 spec"
        >
          <img class="w-8 mx-3" :src="play" alt="" />
          <img class="w-8 mx-3" :src="voice" alt="" />
          <div class="flex px-2 items-center border-0 w-28">
            <vue-slider :tooltip="'none'" style="width: 100%" v-model="range" />
          </div>
        </div>
      </div>
      <div
        class="bg-white w-20 bg-opacity-10 rounded-lg ml-5 backdrop-filter blur-xl flex flex-col justify-around items-center"
      >
        <img @click="isFull = !isFull" class="w-8" :src="settings" alt="" />
        <img class="w-8" :src="library" alt="" />
        <img class="w-8" :src="voice" alt="" />
        <img class="w-8" :src="play" alt="" />
      </div>
      <div
        :class="isFull ? 'w-64': 'opacity-0 transform scale-x-0 w-0'"
        class="bg-white bg-opacity-10 rounded-lg ml-5 backdrop-filter blur-xl flex flex-col py-2 px-3 justify-start items-center overflow-x-auto no-scrollbar options"
      >
        <div
          v-for="i in categories.find(elem => elem.name === category)"
          :key="i"
          :class="isFull ? 'text-white': 'text-opacity-0'"
          class="flex w-full justify-center border-opacity-30 text-white border border-white border-solid rounded-lg text-xl font-roboto py-1 my-1"
        >
          Jedi Temple {{i}}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-shadow{
  text-shadow: 0 0 4px rgba(2, 2, 2, 1)
}

.my{
  // width: 30vw;
  transition: 0.5s;
  transition-delay: 0.1s;
}
.options{
  transition: 0.5s;
  transition-delay: 0.1s;
  scroll-behavior: smooth;
  // overflow: hidden;
}

.anim-show{
  // transition: 1.0s;
  // transition-delay: 1s;
  opacity: 0;
  
  animation: 0.5s linear show;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}
.anim-hide{
  // transition: 1.0s;
  // transition-delay: 1s;
  opacity: 0;
  animation: 0.1s linear hide;
}
@keyframes show{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
@keyframes hide{
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}

</style>
