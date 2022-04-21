<script lang="ts" setup>
import { ref } from 'vue'
import  {categories, ICategory}  from '@/categories'
import play2 from '@/assets/svg/play2.svg'
import arrow from '@/assets/svg/arrow.svg'
const rotate = ref(false)

const category = ref<ICategory | null>(null)

function setCategory(value: ICategory){
  rotate.value = !rotate.value
  category.value = value
}

</script>

<template>
  <div class="w-screen h-screen gradient flex items-center flex-col overflow-y-scroll no-scrollbar card">
    
    <div :class="rotate ? 'rotate-revert' : 'rotate-off '" class="relative grid grid-cols-4 w-2/5 mt-52 " style="transition: 0.5s ease-in-out;">
      <div @click="setCategory(item)" v-for="item in categories" :key="item" class="item cursor-pointer overflow-hidden w-full h-full flex text-white relative">
      
      
        <div class="absolute z-10 gradient-item w-full h-full flex justify-center items-center font-roboto font-bold text-3xl px-2 text-shadow">{{item.name}}</div>
        <img class="w-full h-full object-cover" :src="item.img" alt="hell">
      
      </div>
      <div v-for="i in 26" :key="i" class="item cursor-pointer overflow-hidden w-full h-full flex text-white relative">
      
      
        <div class="absolute z-10 gradient-item w-full h-full flex justify-center items-center font-roboto font-bold text-3xl px-2 text-shadow">Random Text</div>
        <img class="" :src="`https://picsum.photos/id/${i}/500`" alt="">
      
      </div>
    </div>

    <div v-show="rotate" class=" fixed hover:opacity-80 cursor-pointer left-0 p-3 text-opacity-50 top-52 z-10 font-roboto text-2xl text-white" @click="rotate = !rotate" >
      <img class="w-20 filter invert transform rotate-90" :src="arrow" alt="">
    </div>

    <div :class="rotate ? 'rotate-off ' : 'rotate'" class="absolute flex items-center flex-col w-full h-full pt-52 overflow-y-auto no-scrollbar" style="transition: 0.5s ease-in-out;">
      <div v-if="category" class="flex items-center flex-col w-full">
        <h1 class="text-white text-3xl mb-12">Category {{category.name}}</h1>
        <div   v-for="item in category.ambientCards" :key="item" class=" w-1/4 transition-shadow hover:shadow-md flex justify-start items-center my-2 h-24 bg-black bg-opacity-10 rounded-xl">
        <div class="overflow-hidden h-full p-5 flex">
          <img class="w-24 h-full object-cover shadow-2xl" :src="item.img" :alt="item.title">
        </div>
        <div class="flex flex-col font-roboto text-white items-start justify-center ml-3">
          <div class="text-xl">{{item.title}}</div>
          <div class="text-base opacity-50">{{item.description.slice(0, 30)}}</div>
        </div>
        <router-link class="ml-auto mr-4" :to="{ name: 'Card', params: { category: category.name, card: item.title}}">
        <img class="transition-opacity hover:opacity-100 cursor-pointer opacity-10 h-14 " :src="play2" alt="Открыть" title="Открыть">
        </router-link>
      </div>
      </div>
      
      
      
    </div>
  </div>
</template>

<style lang="scss">
.gradient{
  background: linear-gradient(180deg, #504F4F 0%, #292626 100%);
}

.gradient-item{
  background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
}

.gradient-back{
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%);
}

.item img{
  transition: transform .8s ease-in-out;
}

.item:hover img{
  transform: scale(1.25) translateZ(0);
}


.rotate{
  transform: perspective(55rem) rotateY(180deg);
  backface-visibility: hidden;
  scroll-behavior: smooth;
}
.rotate-revert{
  transform: perspective(55rem) rotateY(-180deg);
  backface-visibility: hidden;
  scroll-behavior: smooth;
}
.rotate-off{
  transform: perspective(55rem) rotateY(0deg);
  backface-visibility: hidden;
}
</style>
