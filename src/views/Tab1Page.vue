<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageTitle title="My Assets"></PageTitle>
      <ExploreContainer name="Tab 1 page" />
      <div class="container-main">
      <LineChart/>
      <TokenTab v-for="i in 6"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import PageTitle from "@/components/PageTitle.vue";
import LineChart from "@/components/LineChart.vue"
import TokenTab from "../components/TokenTab.vue";

// import {onMounted} from "@vue/runtime-core";
// import {PushNotificationsPlugin as PushNotifications} from "@capacitor/push-notifications/dist/esm/definitions";

  // onMounted(async () => {
  //   await PushNotifications.addListener('pushNotificationReceived', notification => {
  //     console.log('Push notification received: ', notification);
  //   });
  //
  // })
</script>
<style scoped lang="scss">
ion-content::part(background) {
  background: #161730;
}
ion-header::part(background) {
  background: #161730;
}
ion-content::part(scroll) {
  color: #fff;
}
  .container-main{
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px
  }
</style>
