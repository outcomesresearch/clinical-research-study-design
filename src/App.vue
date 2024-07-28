<!-- src/App.vue -->

<template>
  <v-app>
    <v-main>
      <outcomes-research-wrapper :_title="`Statistical Power Applet`">
        <outcomes-navbar />
        <div id="app" class="wrapper-for-outer-flexbox">
          <div class="app-container">
            <visual-flow-chart />
            <intro-card v-if="inIntro" @started="setStarted" />
            <decision-tree v-else @started="(e) => setStarted(e)" />
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
import IntroCard from "./components/IntroCard.vue";
import VisualFlowChart from "./components/VisualFlowChart.vue";

export default {
  name: "App",
  components: {
    DecisionTree,
    IntroCard,
    VisualFlowChart,
  },
  methods: {
    setStarted(isTriggeringIntro = false) {
      this.inIntro = isTriggeringIntro;
    },
  },
  data() {
    return {
      inIntro: true,
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
  width: 1500px;
  max-width: 100%;
  height: 100%;
}

.v-card-title {
  white-space: pre-wrap;
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

.v-tab__slider {
  background: #b71c1c !important;
  opacity: 30% !important;
}

:not(.v-tab-item--selected) > .v-btn__content > .v-tab__slider {
  background: grey !important;
  opacity: var(--v-border-opacity) !important;
}

.v-list-item-subtitle {
  -webkit-box-orient: unset;
  padding-bottom: 5px;
}

.v-list-item {
  padding-inline: 0px !important;
}

ol,
ul {
  /* list-style: initial; */
  padding-left: 20px; /* Add padding to align list items properly */
}

ol > li,
ul > li {
  margin: 10px 0;
}

p {
  padding-bottom: 20px;
}

.italic {
  font-style: italic;
}
</style>
