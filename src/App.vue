<template>
  <Home />
</template>

<script>
import Home from '@/pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
*, *:after, *:before {
  box-sizing: border-box;
}

body, html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', Helvetica, sans-serif;
  color: #262626;
  font-size: 14px;
  line-height: 1.8;
}

@for $i from 1 through 6 {
  h#{$i} {
    margin: 0;
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
}
.container {
  width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
}

@media screen and (max-width: 1250px) {
  .container {
    width: 998px;
  }
}

@media screen and (max-width: 1020px) {
  .container {
    width: 100%;
  }
}
</style>
