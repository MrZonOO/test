<template>
  <div class="user_info">
    <div class="subheading">DOCTOR A</div>
    <div class="body-1 mt-2">DOCTORA@mail.com</div>
    <v-avatar
      size="72"
      color="grey lighten-4"
    >
      <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
    </v-avatar>
    <div class="today_report_box">
      <div class="description">Today Report</div>
      <div class="widget_box">
        <div class="tile_widget">
          <div class="tile_title">3</div>
          <div class="tile_subtitle">Appointment</div>
        </div>
        <div class="tile_widget">
          <div class="tile_title">2</div>
          <div class="tile_subtitle">Pending</div>
        </div>
        <div class="tile_widget">
          <div class="tile_title">3</div>
          <div class="tile_subtitle">Visit</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.user_info {
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 240px;
  min-height: 240px;
  max-height: 240px;
  padding: 24px 0 64px;
  color: #fff!important;

  .v-avatar {
    position: absolute;
    bottom: 80px;
  }

  .today_report_box {
    width: 100%;
    padding-left: 4px;
    height: 84px;
    position: absolute;
    bottom: 0;

    .description {
      font-size: 0.8em;
      text-transform: uppercase;
    }

    .widget_box {
      display: flex;

      .tile_widget {
        background: #fff;
        width: 100%;
        color: #555;
        padding: 4px;
        margin-top: 4px;
        margin-right: 4px;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
        z-index: 1;
      }

      .tile_title {
        font-size: 20px;
        font-weight: 500;
      }

      .tile_subtitle {
        font-size: 12px;
      }
    }
  }
}
</style>
