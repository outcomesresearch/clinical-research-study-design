<template>
  <v-app>
    <v-main>
      <outcomes-research-wrapper :_title="`Statistical Power Applet`">
        <outcomes-navbar />
        <div id="app" class="wrapper-for-outer-flexbox">
          <div class="app-container">
            <router-view />
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
export default {
  name: "App",
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

ol,
ul {
  /* list-style: initial; */
  padding-left: 20px; /* Add padding to align list items properly */
}

ol > li,
ul > li {
  margin: 10px 0;
}

.app-container p {
  padding-bottom: 20px;
}

.italic {
  font-style: italic;
}
</style>
