<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col>
            <exerciseCard :exerciseData="exampleData" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ExerciseCard from "./components/ExerciseCard";

export default {
  props: {
    source: String
  },
  components: {
    ExerciseCard
  },
  data: () => ({
    drawer: null,
    exampleData: [
      {
        date: "15.11.2019",
        category: "Pushups",
        warmupReps: "2",
        warmupExercise: "Close-Pushups",
        workReps: "2",
        workExercise: "One-Arm-Pushups"
      },
      {
        date: "17.11.2019",
        category: "Pullups",
        warmupReps: "2",
        warmupExercise: "Close-Pullups",
        workReps: "2",
        workExercise: "One-Arm-Pullup"
      }
    ]
  })
};
</script>
