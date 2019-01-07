<template>
  <div class="nva_memu_list">
    <vue-perfect-scrollbar class="overflow_container">
      <v-list dense>
        <v-list dark class="transparent">
          <v-list-tile
            v-for="(item,i) in menus"
            :key="i"
            :to="item.to"
          >
            <v-list-tile-avatar>
              <v-icon dark>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="body-2">
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-list>
    </vue-perfect-scrollbar>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
    },
  },
};
</script>


<style lang="scss">
.nva_memu_list {
  height: calc(100% - 240px);
  position: relative;
}
</style>
