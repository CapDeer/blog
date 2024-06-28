<script setup lang="ts">
import {Button} from '@/components/ui/button'
import { useRouter} from 'vue-router'
const router = useRouter()
</script>

<template>
  page not found
    <Button @click="router.back()">
      返回
    </Button>
</template>