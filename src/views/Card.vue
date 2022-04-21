<script lang="ts" setup>
import Card from '@/components/Content.vue'
import Nav from '@/components/Nav.vue'
import {onUnmounted, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import { Howler } from 'howler'


onMounted(() => {
  Object.keys(useRoute().params).length ? {} : useRouter().back()
})
onUnmounted(() => {
  Howler.stop()
})
</script>
<template>
  <Nav />
  <h1 style="position: absolute; z-index: 100; color: aliceblue; border: 0px solid red;">{{$route.params}}</h1>
  <Card :key="($route.params.card as string)" />
</template>

<style>
html, body {
  height: 100%;
  overflow: hidden;
}</style>


