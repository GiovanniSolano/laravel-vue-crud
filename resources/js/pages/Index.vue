<template>
    <NavBar/>
    <router-view></router-view>
</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
      NavBar: defineAsyncComponent(() => import('../components/NavBar.vue'))
  },


  setup() {

    return {

    }

  }
}
</script>
