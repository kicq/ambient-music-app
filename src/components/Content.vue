<script lang="ts" setup>
// import Loader from './Loader.vue'

import { Howler as _howl } from 'howler'
// import Play from './btn/Play.vue'
import play from '../assets/svg/play.svg'
import stop from '../assets/svg/stop.svg'
import voice from '../assets/svg/voice.svg'
import settings from '../assets/svg/settings.svg'
import library from '../assets/svg/library.svg'
// import {click} from '../store/sounds/index'
import { ref, defineProps, onMounted, onUnmounted } from 'vue'
import { categories } from '@/categories'
import { route } from '@/router'
import { SoundsManager } from '@/audioAPI'
import { useRoute, useRouter } from 'vue-router'
import { ISound } from '@/audioAPI/playbackControl'

const Howler = _howl as unknown as Record<string, any>

const url = `https://cdna.artstation.com/p/assets/images/images/036/404/840/large/mike-ming-yin-imperial-hangar-01.jpg`
const formatWithUrl = () => `url('${getCard()?.img}')`
const addGradient = () => `linear-gradient(
          rgba(0, 0, 0, 0.1), 
          rgba(0, 0, 0, 0.7)
        ), ${formatWithUrl()}`

const playing = ref(false)
const range = ref(100)
const showWindow = ref<'none' | 'playlist' | 'params'>('none')
const turnWindow = (value: 'none' | 'playlist' | 'params') => {
  if (showWindow.value === value) showWindow.value = 'none'
  else showWindow.value = value
}

const { category, card } = route.value.params
const getCard = () => {
  const foundCategory = categories.find((elem) => elem.name === category)
  if (!foundCategory) return
  return foundCategory.ambientCards.find((elem) => elem.title === card)
}
const getCardsByCurrentCategory = () => {
  return categories.find((elem) => elem.name === category)?.ambientCards
}

const soundManager = getCard()?.soundManager as SoundsManager

onMounted(() => {
  if (!getCard()) return
  soundManager.controller.load()
  console.log('START LOAD TRACKS')
})

onUnmounted(() => {
  if (!getCard()) return
  soundManager.controller.stop()
  Howler.stop()
})

const playManager = {
  play: function () {
    soundManager.start()
    playing.value = !playing.value
  },
  stop: function () {
    soundManager.stop()
    playing.value = !playing.value
  },
}

const params = useRoute().params
const router = useRouter()
console.log('router', router)

function setParamsRoute(value: string) {
  console.log('router', { ...params, card: value })
  // router.back()
  router.push({
    name: 'Card',
    params: { ...params, card: value },
  })

  console.log('set params', value)
}

function globalVolume(value: number) {
  Howler.volume(value / 100)
  range.value = value
}
</script>

<template>
  <div
    :style="{ background: 'black', backgroundSize: 'cover' }"
    class="w-full h-screen filter  transform scale-110"
  ></div>

  <div class="absolute left-0 top-0 my-blur">
    <img class="w-full h-full object-cover" :src="getCard()?.img" alt="">
  </div>
  
  
  <div
    class="absolute md:w-1/2 h-3/6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    @click="'click5'"
  >
    <div class="flex v-full h-full justify-center">
      <div
        class="h-full relative flex flex-col justify-end rounded-xl items-center my"
        :class="showWindow !== 'none' ? 'w-1/4' : 'w-2/3'"
        :style="{ background: formatWithUrl(), backgroundSize: 'cover' }"
      >
        <div
          :class="showWindow !== 'none' ? 'anim-hide' : 'anim-show'"
          class="flex trans-20 w-full mx-10 absolute justify-around m-6 font-roboto text-xs items-end text-white card-shadow trans-20"
        >
          <div class="w-3/6 text-left">
            {{ getCard()?.description }}
          </div>
          <div class="w-auto text-2xl leading-none">{{ getCard()?.title }}</div>
        </div>
        <div
          class="min-w-min relative -bottom-5 transform translate-y-full bg-white h-20 bg-opacity-10 rounded-lg flex justify-between px-4 spec"
        >
          <div class="w-8 flex justify-center items-center cursor-pointer">
            <img
              v-show="!playing"
              class="w-full h-full object-contain"
              @click="playManager.play()"
              :src="play"
              alt=""
            />
            <img
              v-show="playing"
              class="w-2/3 h-2/3 object-contain"
              @click="playManager.stop()"
              :src="stop"
              alt=""
            />
          </div>

          <img class="w-8 mx-3" :src="voice" alt="" />
          <div class="flex px-2 items-center border-0 w-28">
            <vue-slider
              @change="globalVolume"
              :tooltip="'none'"
              style="width: 100%"
              v-model="range"
            />
          </div>
        </div>
      </div>
      <div
        class="bg-white w-20 bg-opacity-10 rounded-lg ml-5 backdrop-filter blur-xl flex flex-col justify-start items-center"
      >
        <div
          class="w-2/3 h-auto my-5 p-1 "
          @click="turnWindow('params')"
          :class="showWindow === 'params' ? 'bg-gray-100 bg-opacity-10 rounded-md border border-opacity-5' : ''"
        >
          <img class="w-full cursor-pointer" :src="settings" alt="" />
        </div>
        <div
          class="w-2/3 h-auto my-5  p-1"
          @click="turnWindow('playlist')"
          :class="showWindow === 'playlist' ? 'bg-gray-100 bg-opacity-10 rounded-md border border-opacity-5' : ''"
        >
          <img class="w-full cursor-pointer" :src="library" alt="" />
        </div>
      </div>
      <!-- params -->
      <div
        :class="
          showWindow !== 'none' ? 'w-64' : 'opacity-0 transform scale-x-0 w-0'
        "
        class="bg-white bg-opacity-10 rounded-lg ml-5 backdrop-filter blur-xl flex flex-col py-2 px-3 justify-start items-center overflow-x-auto no-scrollbar options"
      >
        <div v-if="showWindow === 'playlist'" class="w-full">
          <div
            v-for="i in getCardsByCurrentCategory()"
            :key="i"
            :class="showWindow === 'playlist' ? 'text-white' : 'text-opacity-0'"
            @click="setParamsRoute(i.title)"
            class="flex w-full justify-center border-opacity-30 text-white border border-white border-solid rounded-lg text-xl font-roboto py-1 my-1 cursor-pointer"
          >
            {{ i.title }}
          </div>
        </div>
        <div v-if="showWindow === 'params'" class="w-full">
          <div
            v-for="(item, key) in soundManager.controller.sounds"
            :key="item"
            :class="showWindow === 'params' ? 'text-white' : 'text-opacity-0'"
            @click="item"
            class="flex flex-col w-full justify-center border-opacity-30 text-white border border-white border-solid rounded-lg text-xl font-roboto py-1 my-1 cursor-pointer p-2"
          >
            <div class="text-white">
              {{ key }}: {{ (item.volumeReactive.value * 100).toFixed(0) }}
            </div>
            <vue-slider
              style="width: 100%"
              tooltip="none"
              :interval="0.01"
              :max="1"
              :min="0"
              v-model="item.volume"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-shadow {
  text-shadow: 0 0 4px rgba(2, 2, 2, 1);
}

.my-blur{
  position: absolute;
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  // filter: blur(1px);
  
  filter: blur(24px);
  animation: blur 7s infinite linear;
}

@keyframes blur{
  from{
    filter: blur(24px);
  }
  50%{
    filter: blur(21px);
  }
  90%{
    filter: blur(25px);
  }
  to{
    filter: blur(24px);
  }
}

.my {
  // width: 30vw;
  transition: 0.5s;
  transition-delay: 0.1s;
}
.options {
  transition: 0.5s;
  transition-delay: 0.1s;
  scroll-behavior: smooth;
  // overflow: hidden;
}

.anim-show {
  // transition: 1.0s;
  // transition-delay: 1s;
  opacity: 0;

  animation: 0.5s linear show;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}
.anim-hide {
  // transition: 1.0s;
  // transition-delay: 1s;
  opacity: 0;
  animation: 0.1s linear hide;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes hide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
