<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageTitle title="My Assets"></PageTitle>
      <ExploreContainer name="Tab 1 page" />
      <LineChart/>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import PageTitle from "@/components/PageTitle.vue";
import LineChart from "@/components/LineChart.vue"
</script>
<style scoped>
ion-content::part(background) {
  background: #161730;
}
ion-header::part(background) {
  background: #161730;
}
ion-content::part(scroll) {
  color: #fff;
}
</style>
