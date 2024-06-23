<!-- src/App.vue -->

<template>
  <v-app>
    <v-main>
      <outcomes-research-wrapper :_title="`Statistical Power Applet`">
        <outcomes-navbar />
        <div id="app" className="wrapper-for-outer-flexbox">
          <decision-tree initialStep="start" />
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
</style>
