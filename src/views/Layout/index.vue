<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import {onMounted} from 'vue'

import {useCategoryStore} from "@/stores/categoryStore.js";
const categoryStore = useCategoryStore()
onMounted(()=>{
  categoryStore.getCategory()
})

</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
<!--  添加一个key破坏复用机制-->
<!--  <RouterView :key="$route.fullPath" />-->
  <RouterView />
  <LayoutFooter />
</template>