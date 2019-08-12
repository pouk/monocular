<template lang="pug">
  div.home
    img(src="../assets/logo.png")
    hello-world(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
