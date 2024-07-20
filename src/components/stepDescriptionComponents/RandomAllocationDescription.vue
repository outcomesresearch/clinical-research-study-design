<template>
  <div>
    <p>
      Randomization is a crucial aspect of randomized clinical trials (RCTs). It
      involves the random assignment of participants to different intervention
      groups. This is done to ensure that, on average, known and unknown factors
      that could influence treatment response are evenly distributed across
      groups, allowing for a fair comparison.
    </p>
    <v-card class="mt-5">
      <v-tabs v-model="tab" bg-color="gray" grow class="mb-3">
        <v-tab value="commonMethods">Common Randomization Methods</v-tab>
        <v-tab value="strengths">Strengths</v-tab>
        <v-tab value="weaknesses">Weaknesses</v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="commonMethods">
          <ol>
            <li>
              <strong>Simple Randomization</strong>: Participants are randomly
              assigned to different treatment groups without any specific
              stratification or blocking.
            </li>
            <li>
              <strong>Stratified Randomization</strong>: Ensures balance in
              important baseline characteristics by dividing participants into
              strata based on certain factors (e.g., age, gender) and then
              randomizing within each stratum.
            </li>
            <li>
              <strong>Blocked Randomization</strong>: Participants are
              randomized in blocks, and each block contains an equal number of
              participants from each treatment group.
            </li>
            <li>
              <strong>Minimization</strong>: A dynamic randomization method that
              minimizes differences between groups by adjusting for specific
              baseline characteristics.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="strengths">
          <ol>
            <li>
              Achieves balance in known and unknown factors between intervention
              groups.
            </li>
            <li>
              Enhances the internal validity of the study by reducing the risk
              of confounding.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>Impractical or unethical in certain situations.</li>
            <li>
              Blinding may not always be feasible, leading to potential bias.
            </li>
          </ol>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RandomizationInfo",
  data: () => ({
    tab: null,
  }),
};
</script>

<style scoped></style>
