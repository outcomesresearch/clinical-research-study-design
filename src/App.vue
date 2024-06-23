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
          <div class="footnote-container">
            <span class="footnote text-grey-lighten-1"
              >Modified from Grimes and Shulz, Lancet 2002; 359: 57–61
            </span>
          </div>
        </div>
        <outcomes-footer :copyright="copyright" />
      </outcomes-research-wrapper>
    </v-main>
  </v-app>
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

.app-container,
.footnote-container {
  padding-left: 10px;
  padding-right: 10px;
}

.app-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  height: 100%;
}

.v-card-title {
  white-space: wrap;
}

.footnote {
  font-style: italic;
}

.footnote-container {
  margin-left: auto;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  align-content: end;
  justify-content: end;
}
</style>
