<template>
  <v-app>
    <v-progress-linear
      id="app-progress-linear"
      active
      indeterminate
      color="info"
      height="4"
    ></v-progress-linear>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
#app-progress-linear {
  position: fixed;
  z-index:10;
  top:0;
  margin: 0;
}

.overflow_container {
  height: 100%;
  position: relative;
}
</style>
