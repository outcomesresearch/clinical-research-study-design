<template>
  <v-card class="mx-auto my-12" max-width="374" :color="getBackgroundColor">
    <v-card-item>
      <v-card-title class="card-title">{{ title }}</v-card-title>
    </v-card-item>
    <v-card-text v-if="description">
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    supportCopyText: {
      default: false,
    },
    supportSeeExample: {
      default: false,
    },
    disabled: {
      default: false,
    },
    identifier: {
      default: "",
    },
    currentlySelected: {
      default: false,
    },
    title: {
      default: undefined,
    },
    description: {
      default: "",
    },
    unselectable: {
      default: false,
    },
    width: {
      default: `calc(50% - 30px)`,
    },
    subtitle: {
      default: undefined,
    },
  },
  data() {
    return {
      selection: 1,
    };
  },
  components: {},
  computed: {
    getBackgroundColor() {
      return this.currentlySelected ? "success" : "";
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: $SMALL) {
  #app .text-h6 {
    font-size: 1.1rem !important;
  }

  .card {
    width: 100% !important;
  }
}
.unselectable {
  pointer-events: none;
  cursor: none;
}

.all-pointer-events {
  pointer-events: all;
  cursor: pointer;
}

.justTitle {
  margin-bottom: 0px;
}

.card {
  height: min-content;
}
</style>
