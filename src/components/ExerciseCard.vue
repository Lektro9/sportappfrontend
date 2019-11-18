<template>
  <v-container fluid>
    <v-row class="grey lighten-5">
      <v-card
        class="ma-3 pa-6 transparent"
        width="300"
        height="300"
        elevation="30"
        raised
        v-for="(card, index) in exerciseData"
        :key="index"
      >
        <div class="bg"></div>
        <v-list-item>
          <v-list-item-content>
            <div class="overline">
              <v-icon>mdi-calendar</v-icon>
              {{card.date}}
            </div>
          </v-list-item-content>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item>

        <v-card-title>
          <v-icon large left>mdi-arm-flex</v-icon>
        </v-card-title>
        <v-card-title>{{ card.warmupReps }}x {{ card.warmupExercise }}</v-card-title>
        <v-card-title>{{ card.workReps }}x {{ card.workExercise }}</v-card-title>
        <v-divider></v-divider>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ExerciseCard",
  props: ["exerciseData"],
  data: () => ({})
};
</script>

<style>
.transparent {
  z-index: 5;
}

.transparent .bg {
  background: url("../assets/push-up.png") center center;
  opacity: 0.4;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
