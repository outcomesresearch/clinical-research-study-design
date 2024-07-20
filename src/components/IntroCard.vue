<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-12 container"
  >
    <v-card-item>
      <v-card-title>Clinical Research Study Design</v-card-title>
    </v-card-item>
    <v-card-text
      >Choosing the right study design is crucial for clinicians and researchers
      to critically evaluate medical literature and design their own studies.
      This step by step tool asks a series of questions to determine the most
      appropriate study design for your context. At any stage, you can jump to a
      visual representation of the decision tree and see the choices you've made
      and what comes next.
    </v-card-text>
    <v-card-text>
      We'll first distinguish between experimental and observational studies,
      then narrow down to subtypes such as randomised trials, cohort studies, or
      case-control studies. This structured path ensures that researchers select
      the most appropriate design for each situation, improving the quality and
      ability to communicate the results of clinical research.
    </v-card-text>
    <v-card-actions>
      <v-btn
        text="Begin"
        variant="text"
        :style="{ marginLeft: 'auto' }"
        @click="$emit('started')"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "IntroCard",
};
</script>
