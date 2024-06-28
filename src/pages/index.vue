<script setup lang="ts">
import {Button} from '@/components/ui/button'
import {useRouter} from 'vue-router'

const router = useRouter()
const goto = () => {
  router.push('/404')
}
</script>

<template>
  <div>
    这里是index
    <Button @click="goto">Click me</Button>
  </div>
</template>