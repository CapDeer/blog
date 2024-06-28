<template>
  <div class="nav">
    {{ title }}
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { title } from '@/config'

</script>