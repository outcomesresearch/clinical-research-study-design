<!-- src/App.vue -->

<template>
  <v-app>
    <v-main>
      <outcomes-research-wrapper :_title="`Statistical Power Applet`">
        <outcomes-navbar />
        <div id="app" class="wrapper-for-outer-flexbox">
          <div class="app-container">
            <decision-tree initialStep="start" />
          </div>
        </div>
        <outcomes-footer :copyright="copyright" />
      </outcomes-research-wrapper> </v-main
  ></v-app>
</template>

<script>
import DecisionTree from "./components/DecisionTree.vue";

export default {
  name: "App",
  components: {
    DecisionTree,
  },
  data() {
    return {
      copyright: `© 2024 Washington University School of Medicine, St. Louis, Missouri`,
    };
  },
};
</script>
<style>
@import "./assets/wrapper-style.css";

#app {
  height: 100%;
}

.app-container {
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  max-width: 900px;
}

.v-card-title {
  white-space: wrap;
}
</style>
