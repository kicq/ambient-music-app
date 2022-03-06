<script setup lang="ts">
import Play from '../../assets/svg/play.svg'
import Stop from '../../assets/svg/stop.svg'
import { withDefaults,defineProps } from "vue"
interface Props {
  isPlay?: boolean
}

withDefaults(defineProps<Props>(), {
  isPlay: false,
})
</script>
<template>
  <div class="w-20 p-3  ">
    <img v-show="isPlay" :src="Play" >
    <img v-show="!isPlay" :src="Stop" >
  </div>
  
</template>

<style>
/* #play-button-container {
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.play-button {
  display: inline-block;
  position: absolute;
  width: 50px;
  height: 50px;
  background: #fff;
  transition: clip-path 0.1s ease;
}
.play-button-before {
  clip-path: polygon(0 0, 50% 25%, 50% 75%, 0% 100%);
}
.play-button-after {
  clip-path: polygon(49% 25%, 100% 50%, 100% 50%, 49% 76%);
}
.ccc .play-button-before {
  clip-path: polygon(0 0, 30% 0, 30% 100%, 0% 100%);
}
.ccc .play-button-after {
  clip-path: polygon(0% 0, 100% 0, 100% 100%, 0% 100%) !important;
} */
</style>
