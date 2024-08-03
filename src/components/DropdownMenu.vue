<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-icon icon="mdi-dots-horizontal" v-bind="props" />
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :value="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      items: [{ title: "View this step in flow chart" }],
    };
  },
};
</script>
