<script lang="ts" setup>
import Card from '@/components/Content.vue'
import Nav from '@/components/Nav.vue'
</script>
<template>
  <Nav />
  <h1 style="position: absolute; z-index: 100; color: aliceblue; border: 2px solid red;">{{$route.params}}</h1>
  <Card />
</template>

<style>
html, body {
  height: 100%;
  overflow: hidden;
}</style>

