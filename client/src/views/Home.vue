<template>
  <v-container>
    <v-layout row>
      <v-flex class="center">
        <tile-button class="indigo lighten-1" title="Login"></tile-button>
        <tile-button class="teal lighten-1" title="Login"></tile-button>
        <tile-button
          @click.native="navigateTo({name: 'reports'})"
          class="cyan darken-1"
          title="Reports"
        ></tile-button>
        <tile-button
          @click.native="navigateTo({name: 'roster'})"
          class="indigo lighten-1"
          title="Rooster"
        ></tile-button>
        <tile-button class="cyan darken-1" title="Instelingen"></tile-button>
        <tile-button class="indigo lighten-1" title="Register"></tile-button>
        <tile-button class="indigo darken-4" title="Login"></tile-button>
        <tile-button class="teal lighten-1" background-color="error" title="Login"></tile-button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TileButton from "@/components/TileButton.vue";
export default {
  data() {
    return {};
  },
  components: {
    TileButton
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.tile-buttons {
  width: 20%;
  height: 220px;
}

.center {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>