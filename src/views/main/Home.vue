<template>
  <v-app id="home-app" class="bg_color">
    <div class="top_segment default"></div>
    <!-- <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      clipped
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar
      class="elevation-0"
      color="transparent"
      height="48"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-tooltip bottom>
        <v-btn
          slot="activator"
          icon
          flat
          dark
        >
          <v-icon>search</v-icon>
        </v-btn>
        <span>Search Client (F2)</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn
          slot="activator"
          icon
          flat
          dark
        >
          <v-icon>add</v-icon>
        </v-btn>
        <span>Add Client</span>
      </v-tooltip>
      <v-spacer></v-spacer>
      <v-btn
        flat
        dark
      >A-A1</v-btn>
      <v-btn
        icon
        flat
        dark
      >
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn
        icon
        flat
        dark
        @click.stop="drawerRight = !drawerRight"
      >
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      :class="[$vuetify.breakpoint.mdAndDown ? 'bg_color' : 'bg_transparent']"
      width="280"
      floating
      fixed
      app
    >
      <user-info></user-info>
      <nav-menu :menus="menus"></nav-menu>
    </v-navigation-drawer>
    <v-content>
      <div class="main_content">
        <transition name="fade" mode="in-out">
          <router-view/>
        </transition>
      </div>
    </v-content>
    <v-navigation-drawer
      v-model="drawerRight"
      right
      temporary
      fixed
    ></v-navigation-drawer>
  </v-app>
</template>

<script>
import UserInfo from '@/components/main/UserInfo.vue';
import NavMenu from '@/components/main/NavMenu.vue';

export default {
  components: {
    UserInfo,
    NavMenu,
  },
  data: () => ({
    drawer: null,
    drawerRight: null,
    menus: [{
      title: 'Dashboard',
      icon: 'dashboard',
      to: '/dashboard',
    }, {
      title: 'Client Waiting List',
      icon: 'people',
      to: '/queue',
    }, {
      title: 'Appointment',
      icon: 'event',
      to: '/appointment',
    }, {
      title: 'Medical Certificate',
      icon: 'fa-certificate',
      to: '/medicalCertificate',
    }, {
      title: 'Consent Form',
      icon: 'description',
      to: '/consent',
    }, {
      title: 'Sales',
      icon: 'receipt',
      to: '/sales',
    }, {
      title: 'Credit Note',
      icon: 'credit_card',
      to: '/creditNote',
    }, {
      title: 'Assessment',
      icon: 'assessment',
      to: '/assessments',
    }, {
      title: 'Admission',
      icon: 'hotel',
      to: '/admission',
    }, {
      title: 'Schedule',
      icon: 'navigation',
      to: '/schedule',
    }, {
      title: 'Interface',
      icon: 'storage',
      to: '/services',
    }, {
      title: 'Inventory',
      icon: 'store',
      to: '/inventory/items',
    }, {
      title: 'Master Setting',
      icon: 'settings',
      to: '/settings',
    }, {
      title: 'Reports',
      icon: 'poll',
      to: '/reports',
    }],
  }),
};
</script>

<style lang="scss">
.bg_color {
  background-color: #3d4c5a!important;
}
.bg_transparent {
  background-color: transparent!important;
}
#home-app {
  position: relative;
  .top_segment {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 240px;
    padding: 0;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    &.default {
      background: -webkit-linear-gradient(to right, #5496d8, #86b9e9);
      background: linear-gradient(to right, #5496d8, #86b9e9);
    }
  }
  .main_content {
    margin: 0 8px 8px 8px;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    z-index: 2;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12) !important;
    height: calc(100% - 8px);
    overflow: hidden;
    @media only screen and (max-width: 1263px) {
      & {
        margin: 0;
        height: 100%;
      }
    }
  }
}
</style>
